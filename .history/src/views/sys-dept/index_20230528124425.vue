<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
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
import { addDeptApi, getDeptTableApi, updateDeptApi } from '@/api/dept/index'
import { type GetDeptTableResponseData, type IApiDeptInfoData } from '@/api/dept/types/dept'
import { getUserTableApi } from '@/api/user/index'
import type { IApiUserInfoData } from '@/api/user/types/user'

const router = useRouter()

defineOptions({
  name: 'VxeTable',
})

const xGridDom = ref<VxeGridInstance>()
const xFormDom = ref<VxeFormInstance>()
const xModalDom = ref<VxeModalInstance>()
const userLists = ref<any[]>()
const userItem = ref<IApiUserInfoData>()
const loading = ref(false)

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

  /** 表单配置项 */
  formConfig: {
    items: [
      {
        field: 'deptName',
        itemRender: {
          name: '$input',
          props: { placeholder: '请输入部门名称', clearable: true },
        },
      },
      {
        itemRender: {
          name: '$buttons',
          children: [
            {
              props: { type: 'submit', content: '查询', status: 'primary' },
            },
            {
              props: { type: 'reset', content: '重置' },
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
    slots: { buttons: 'toolbar-btns' },
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
      title: '序号',
      width: '50px',
    },

    {
      field: 'deptName',
      title: '部门名',
    },
    {
      field: 'des',
      title: '部门职责',
    },
    {
      field: 'createTime',
      title: '创建时间',
    },
    {
      field: 'updateTime',
      title: '上次更新时间',
    },
    {
      title: '操作',
      width: '370px',
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
          let result: IApiDeptInfoData[] = []
          /** 加载数据 */
          const callback = (res: GetDeptTableResponseData) => {
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
          const params = {
            deptName: form.deptName || '',
            size: page.pageSize,
            current: page.currentPage,
          }
          /** 调用接口 */
          getDeptTableApi(params).then(callback).catch(callback)
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
    deptName: '',
    des: '',
  },
  /** 项列表 */
  items: [
    {
      field: 'deptName',
      title: '部门名称',
      itemRender: { name: '$input', props: { placeholder: '请输入部门名' } },
    },
    {
      field: 'des',
      title: '部门职责',
      itemRender: { name: '$input', props: { placeholder: '请输入部门职责' } },
    },
    {
      field: 'leaderId',
      title: '部门主管',
      slots: { default: 'leader_item' },
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
    deptName: [
      {
        required: true,
        validator: ({ itemValue }) => {
          if (!itemValue)
            return new Error('请输入部门名称')

          if (!itemValue.trim())
            return new Error('空格无效')
        },
      },
    ],
    des: [
      {
        required: true,
        validator: ({ itemValue }) => {
          if (!itemValue)
            return new Error('请输入部门职责')

          if (!itemValue.trim())
            return new Error('空格无效')
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
  onShowModal: (row?: IApiDeptInfoData) => {
    if (row) {
      crudStore.isUpdate = true
      xModalOpt.title = '修改部门'
      // 赋值
      xFormOpt.data.id = row.id
      xFormOpt.data.deptName = row.deptName
      xFormOpt.data.des = row.des
    }
    else {
      crudStore.isUpdate = false
      xModalOpt.title = '新增部门'
    }

    xModalDom.value?.open()
    nextTick(() => {
      !crudStore.isUpdate && xFormDom.value?.reset()
      xFormDom.value?.clearValidate()
    })
  },
  /** 确定并保存 */
  onSubmitForm: (row?: IApiDeptInfoData) => {
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
        updateDeptApi(xFormOpt.data)
          .then(res => callback(res))
          .catch(err => callback(err))
      }
      else {
        // 调用新增接口
        addDeptApi(xFormOpt.data)
          .then(res => callback(res))
          .catch(err => callback(err))
      }
      xFormOpt.data = {}
    })
  },
  // TODO: 跳转详情信息
  onGoInfo: (row?: IApiDeptInfoData) => {
    router.push({
      path: '/sys/dept/info',
      query: {
        id: row?.id,
      },
    })
  },
  // TODO: 跳转小组信息
  onGoTeam: (row?: IApiDeptInfoData) => {
    router.push({
      path: '/sys/team',
      query: {
        id: row?.id,
      },
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

// TODO: 初始化数据
onMounted(() => {
  getUserList('')
})
</script>

<template>
  <div class="app-container">
    <!-- 表格 -->
    <vxe-grid ref="xGridDom" v-bind="xGridOpt">
      <!-- 左侧按钮列表 -->
      <template #toolbar-btns>
        <vxe-button status="primary" icon="vxe-icon-add" @click="crudStore.onShowModal()">
          新增部门
        </vxe-button>
      </template>
      <!-- 操作 -->
      <template #row-operate="{ row }">
        <el-button link type="primary" @click="crudStore.onGoInfo(row)">
          <span class="i-mdi-clipboard-search-outline" />  查看详情
        </el-button>
        <el-divider direction="vertical" />
        <el-button link type="warning" @click="crudStore.onShowModal(row)">
          <span class="i-ph-pencil-line-light " />  信息修改
        </el-button>
        <el-divider direction="vertical" />
        <el-button link type="danger" @click="crudStore.onGoTeam(row)">
          <span class="i-fluent-people-team-24-filled" />  下属小组
        </el-button>
      </template>
    </vxe-grid>
    <!-- 弹窗 -->
    <vxe-modal ref="xModalDom" v-bind="xModalOpt">
      <!-- 表单 -->
      <vxe-form ref="xFormDom" v-bind="xFormOpt">
        <template #leader_item="{ data }">
          <el-select
            v-model="data.leader"
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
      </vxe-form>
    </vxe-modal>
  </div>
</template>

<style lang="scss" scoped>
.el-select-dropdown .el-popper .detailDialog_select-popper.is-multiple {
  z-index: 10015 !important;
}
.el-popper{
  z-index: 99995 !important;
}
</style>
