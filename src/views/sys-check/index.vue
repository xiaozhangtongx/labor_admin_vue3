<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  type VxeFormDefines,
  type VxeFormInstance,
  type VxeFormProps,
  type VxeGridInstance,
  type VxeGridPropTypes,
  type VxeGridProps,
  type VxeModalInstance,
  type VxeModalProps,
} from 'vxe-table'
import { useDateFormat } from '@vueuse/core'
import { getUserTableApi } from '@/api/user/index'
import type { IApiUserInfoData } from '@/api/user/types/user'
import { editCheckInfoApi, getCheckTableApi } from '@/api/check/index'
import type { GetCheckTableResponseData, IApiCheckInfoData, IGetCheckTableRequestData } from '@/api/check/types/check'
import MyStatus from '@/components/MyStatus/index.vue'
import Map from '@/components/Map/index.vue'
import { isNumber } from '@/utils/validate'

defineOptions({
  name: 'VxeTable',
})

const userLists = ref<any[]>()
const loading = ref(false)
const dialogTableVisible = ref(false)
const userItem = ref<IApiUserInfoData>()
const selectTime = ref<Date[]>([])
const selectTimeInfo = reactive({
  startTime: '',
  endTime: '',
})
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)
const status = ref(null)
const userCheckInfo = ref<IApiCheckInfoData>()
// 状况(0-正常/1-未打卡/2-迟到/3-早退/4-时长不够/5-请假/6-加班/7-补办工时)
const statusOptions = [
  { id: 0, label: '正常', status: 0 },
  { id: 1, label: '未打卡', status: 1 },
  { id: 2, label: '迟到', status: 2 },
  { id: 3, label: '早退', status: 3 },
  { id: 4, label: '时长不够', status: 4 },
  { id: 5, label: '请假', status: 5 },
  { id: 6, label: '加班', status: 6 },
  { id: 7, label: '补办工时', status: 7 },
]
const statusList = [
  { id: 0, value: '正常', type: 'success' },
  { id: 1, value: '未打卡', type: 'danger' },
  { id: 2, value: '迟到', type: 'danger' },
  { id: 3, value: '早退', type: 'danger' },
  { id: 4, value: '时长不够', type: 'danger' },
  { id: 5, value: '请假', type: 'warning' },
  { id: 6, value: '加班', type: 'info' },
  { id: 7, value: '补办工时', type: '' },
]
const shortcuts = [
  {
    text: '上一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '上个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '三月前',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]

// TODO: 处理日期格式
const handleSearch = () => {
  selectTimeInfo.startTime = selectTime.value[0] ? useDateFormat(selectTime.value[0], 'YYYY-MM-DD HH:mm:ss').value : ''
  selectTimeInfo.endTime = selectTime.value[1] ? useDateFormat(selectTime.value[1], 'YYYY-MM-DD HH:mm:ss').value : ''
}

// TODO: 获取用户列表
const getUserList = async (query: string) => {
  loading.value = true
  const params = reactive({
    username: query || userItem.value?.username || '',
    size: 20,
    current: 0,
  })
  const { data: userList } = await getUserTableApi(params)
  loading.value = false
  userLists.value = userList.records.map((user: IApiUserInfoData) => {
    return { id: user.id, label: user.username, value: user }
  })
}

onMounted(() => {
  getUserList('')
})

const xGridDom = ref<VxeGridInstance>()
const xFormDom = ref<VxeFormInstance>()
const xModalDom = ref<VxeModalInstance>()
const xModalOpt: VxeModalProps = reactive({
  title: '',
  showClose: true,
  escClosable: true,
  maskClosable: true,
  beforeHideMethod: () => {
    xFormDom.value?.clearValidate()
    return Promise.resolve()
  },
})
const xGridOpt: VxeGridProps = reactive({
  loading: true,
  border: true,
  autoResize: true,
  showHeaderOverflow: true,
  showOverflow: true,
  keepSource: true,
  columnConfig: {
    resizable: true,
  },
  /** 分页配置项 */
  pagerConfig: {
    align: 'right',
  },
  printConfig: {
    columns: [{ field: 'username' }, { field: 'phoneNum' }, { field: 'roles' }, { field: 'avatar' }],
  },
  /** 表单配置项 */
  formConfig: {
    items: [
      {
        field: 'username',
        slots: { default: 'userName_item' },
      },
      {
        field: 'status',
        slots: { default: 'status_item' },
      },
      {
        field: 'startTime',
        slots: { default: 'startTime_item' },
      },
      {
        itemRender: {
          name: '$buttons',
          children: [
            {
              props: { type: 'submit', content: '查询', status: 'primary' },
            },

          ],
        },
      },
    ],
  },
  /** 工具栏配置 */
  toolbarConfig: {
    refresh: true,
    custom: true,
    export: true,
    print: true,
    zoom: true,
  },
  /** 自定义列配置项 */
  customConfig: {
    /** 是否允许列选中  */
    checkMethod: ({ column }) => !['username'].includes(column.field),
  },
  exportConfig: {
    modes: ['current', 'selected', 'all'],
  },
  /** 列配置 */
  columns: [

    {
      type: 'seq',
      width: '50px',
      title: '序号',
    },
    {
      field: 'user.username',
      title: '用户名',
      width: '80px',
    },
    {
      field: 'signInTime',
      title: '签到时间',
    },
    {
      field: 'signOutTime',
      title: '签退时间',
    },
    {
      field: 'workTime',
      title: '工作时长（小时）',
    },
    {
      field: 'createTime',
      title: '打卡日期',
    },
    {
      field: 'status',
      width: '80px',
      title: '状态',
      slots: { default: 'row-status' },
    },
    {
      title: '操作',
      width: '200px',
      fixed: 'right',
      showOverflow: false,
      slots: { default: 'row-operate' },
    },
  ],
  /** 数据代理配置项（基于 Promise API） */
  proxyConfig: {
    /** 启用动态序号代理 */
    seq: true,
    /** 是否代理表单 */
    form: true,
    /** 是否自动加载，默认为 true */
    // autoLoad: false,
    props: {
      total: 'total',
    },
    ajax: {
      query: ({ page, form }: VxeGridPropTypes.ProxyAjaxQueryParams) => {
        xGridOpt.loading = true
        crudStore.clearTable()
        return new Promise<any>((resolve: Function) => {
          let total = 0
          let result: IApiCheckInfoData[] = []
          /** 加载数据 */
          const callback = (res: GetCheckTableResponseData) => {
            if (res && res.data) {
              const resData = res.data
              // 总数
              if (Number.isInteger(resData.total))
                total = resData.total
              // 分页数据
              if (Array.isArray(resData.records))
                result = resData.records
            }
            xGridOpt.loading = false
            resolve({ total, result })
          }

          /** 接口需要的参数 */
          const params: IGetCheckTableRequestData = {
            userId: userItem.value?.id || '',
            startTime: selectTimeInfo.startTime || '',
            endTime: selectTimeInfo.endTime || '',
            status: status.value,
            size: page.pageSize,
            current: page.currentPage,
          }
          /** 调用接口 */
          getCheckTableApi(params).then(callback).catch(callback)
        })
      },
    },
  },
})

// #region vxe-form
const xFormOpt = reactive<VxeFormProps>({
  span: 24,
  titleWidth: '100px',
  loading: false,
  /** 是否显示标题冒号 */
  titleColon: false,
  /** 表单数据 */
  data: {
    id: '',
    username: '',
    userId: '',
    createTime: '',
    addTime: 0,
    overTime: 0,
    status: 7,
    des: '管理员操作：工时补加',
  },
  /** 项列表 */
  items: [
    {
      field: 'username',
      title: '用户名',
      itemRender: { name: '$input', props: { placeholder: '请输入用户名' } },
    },
    {
      field: 'createTime',
      title: '打卡日期',
      itemRender: { name: '$input', props: { placeholder: '请输入打卡日期' } },
    },
    {
      field: 'addTime',
      title: '补加工时(h)',
      itemRender: { name: '$input', props: { placeholder: '请输入补充工时' } },
    },
    {
      field: 'overTime',
      title: '加班时长(h)',
      itemRender: { name: '$input', props: { placeholder: '请输入加班时长' } },
    },
    {
      align: 'right',
      itemRender: {
        name: '$buttons',
        children: [
          { props: { content: '取消' }, events: { click: () => xModalDom.value?.close() } },
          {
            props: { type: 'submit', content: '确定', status: 'primary' },
            events: { click: () => crudStore.onSubmitForm() },
          },
        ],
      },
    },
  ],
  /** 校验规则 */
  rules: {
    addTime: [
      {
        validator: ({ itemValue }) => {
          if (!itemValue)
            return new Error('请输入补加工时')

          if (!isNumber(itemValue))
            return new Error('请输入数字')
        },
      },
    ],
    overTime: [
      {
        validator: ({ itemValue }) => {
          if (!itemValue)
            return new Error('请输入加班时长')

          if (!isNumber(itemValue))
            return new Error('请输入数字')
        },
      },
    ],
  },
})
// #region CRUD
const crudStore = reactive({
  /** 表单类型：修改：true 新增：false */
  isUpdate: true,
  /** 加载表格数据 */
  commitQuery: () => xGridDom.value?.commitProxy('query'),
  /** 清空表格数据 */
  clearTable: () => xGridDom.value?.reloadData([]),
  /** 点击显示弹窗 */
  onShowModal: (row?: IApiCheckInfoData) => {
    if (row) {
      crudStore.isUpdate = true
      xModalOpt.title = '修改考勤数据'
      // 赋值
      xFormOpt.data.id = row.id
      xFormOpt.data.username = row.user.username
      xFormOpt.data.userId = row.user.id
      xFormOpt.data.addTime = row.addTime || 0
      xFormOpt.data.overTime = row.overTime || 0
      xFormOpt.data.createTime = row.createTime
    }

    // 禁用表单项
    if (xFormOpt.items) {
      if (xFormOpt.items[0]?.itemRender?.props)
        xFormOpt.items[0].itemRender.props.disabled = crudStore.isUpdate
      if (xFormOpt.items[1]?.itemRender?.props)
        xFormOpt.items[1].itemRender.props.disabled = crudStore.isUpdate
    }
    xModalDom.value?.open()
    nextTick(() => {
      !crudStore.isUpdate && xFormDom.value?.reset()
      xFormDom.value?.clearValidate()
    })
  },
  // TODO: 显示弹窗，显示用户打卡详情
  onShowDialog: (row?: IApiCheckInfoData) => {
    dialogTableVisible.value = true
    userCheckInfo.value = row
  },
  // TODO: 修改考勤信息
  onSubmitForm: () => {
    if (xFormOpt.loading)
      return
    xFormDom.value?.validate((errMap?: VxeFormDefines.ValidateErrorMapParams) => {
      if (errMap)
        return
      xFormOpt.loading = true
      const callback = (err?: any) => {
        xFormOpt.loading = false
        if (err.code !== 200)
          return
        xModalDom.value?.close()
        ElMessage.success('操作成功')
        !crudStore.isUpdate && crudStore.afterInsert()
        crudStore.commitQuery()
      }
      if (crudStore.isUpdate) {
        // 调用修改接口
        editCheckInfoApi(xFormOpt.data)
          .then(res => callback(res))
          .catch(err => callback(err))
      }
      xFormOpt.data = {}
    })
  },
  /** 新增后是否跳入最后一页 */
  afterInsert: () => {
    const pager: VxeGridPropTypes.ProxyAjaxQueryPageParams = xGridDom.value?.getProxyInfo()?.pager
    if (pager) {
      const currTotal: number = pager.currentPage * pager.pageSize
      if (currTotal === pager.total)
        ++pager.currentPage
    }
  },

})
</script>

<template>
  <div class="app-container">
    <!-- 表格 -->
    <vxe-grid ref="xGridDom" v-bind="xGridOpt">
      <!-- 远程用户名搜索 -->
      <template #userName_item>
        <el-select
          v-model="userItem"
          value-key="id"
          remote-show-suffix
          filterable
          remote
          clearable
          reserve-keyword
          placeholder="请输入员工的姓名"
          :remote-method="getUserList"
          :loading="loading"
        >
          <el-option v-for="item in userLists" :key="item.id" :label="item.label" :value="item.value" />
        </el-select>
      </template>

      <!-- 状态选择 -->
      <template #status_item>
        <el-select-v2
          v-model="status"
          :options="statusOptions"
          placeholder="请选择状态"
          value-key="status"
        />
      </template>

      <!-- 时间选择 -->
      <template #startTime_item>
        <el-date-picker
          v-model="selectTime"
          type="datetimerange"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :default-time="defaultTime"
          :shortcuts="shortcuts"
          value-format="YYYY-MM-DD HH:mm:ss"
          format="YYYY-MM-DD HH:mm:ss"
          range-separator="至"
          @change="handleSearch"
        />
      </template>

      <template #row-status="{ row }">
        <MyStatus :status="parseInt(row.status)" :status-list="statusList" />
      </template>

      <!-- 操作 -->
      <template #row-operate="{ row }">
        <el-button link type="primary" @click="crudStore.onShowDialog(row)">
          <span class="i-carbon-task-view mr-1" />  查看详情
        </el-button>
        <el-button link type="danger" @click="crudStore.onShowModal(row)">
          <span class="i-ph-pencil-line-light mr-1" />  编辑信息
        </el-button>
      </template>
    </vxe-grid>
    <!-- 弹窗 -->
    <vxe-modal ref="xModalDom" v-bind="xModalOpt">
      <!-- 表单 -->
      <vxe-form ref="xFormDom" v-bind="xFormOpt" />
    </vxe-modal>

    <!-- 考勤数据详情对话框 -->
    <el-dialog v-model="dialogTableVisible" destroy-on-close :title="`${userCheckInfo?.user.username} ${useDateFormat(userCheckInfo?.createTime, 'YYYY-MM-DD').value}考勤数据`" width="600px" style="z-index:10004 !important">
      <el-scrollbar height="400px">
        <el-descriptions title="员工信息" :column="2" label-align="right">
          <el-descriptions-item label="姓名">
            {{ userCheckInfo?.user.username }}
          </el-descriptions-item>
          <el-descriptions-item label="手机号码">
            {{ userCheckInfo?.user.phoneNum }}
          </el-descriptions-item>
          <el-descriptions-item label="部门">
            Suzhou
          </el-descriptions-item>
          <el-descriptions-item label="职位">
            <el-tag size="small">
              School
            </el-tag>
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions v-if="dialogTableVisible" title="考勤数据" :column="2" border>
          <el-descriptions-item label="打卡日期">
            {{ userCheckInfo!.createTime || 'N/A' }}
          </el-descriptions-item>
          <el-descriptions-item label="签到时间">
            {{ userCheckInfo!.signInTime || 'N/A' }}
          </el-descriptions-item>
          <el-descriptions-item label="签退时间">
            {{ userCheckInfo!.signOutTime || 'N/A' }}
          </el-descriptions-item>
          <el-descriptions-item label="工作时长">
            {{ userCheckInfo!.workTime || 0 }}
          </el-descriptions-item>

          <el-descriptions-item label="加班时长">
            {{ userCheckInfo!.overTime || 0 }}
          </el-descriptions-item>

          <el-descriptions-item label="补加时长">
            {{ userCheckInfo!.addTime || 0 }}
          </el-descriptions-item>
          <el-descriptions-item label="考勤日志">
            {{ userCheckInfo!.des }}
          </el-descriptions-item>
        </el-descriptions>
        <h4 class="mt-2">
          打卡地点
        </h4>
        <Map :lng="userCheckInfo?.lon" :lat="userCheckInfo?.lat" />
      </el-scrollbar>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>
