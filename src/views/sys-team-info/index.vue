<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { ElMessage, ElMessageBox, type ElMessageBoxOptions } from 'element-plus'
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
import StatusColumnSolts from './tsx/StatusColumnSolts'
import type { GetTeamMemberTableResponseData, IApiTeamInfoData, IApiTeamMemberInfoData } from '@/api/team/types/team'
import { addTeamMemberApi, deleteTeamApi, deleteTeamsApi, getTeamInfoApi, getTeamMemberListTableApi } from '@/api/team/index'
import { getUserTableApi, repassUserApi } from '@/api/user/index'
import type { IApiUserInfoData } from '@/api/user/types/user'

const route = useRoute()
const router = useRouter()

const teamInfo = ref<IApiTeamInfoData>()
const isLoading = ref<boolean>(false)
const leaderInfo = ref<any>(null)
const loading = ref(false)
const userLists = ref<any[]>()
const userItem = ref<IApiUserInfoData>()

defineOptions({
  name: 'VxeTable',
})

// TODO: 获取组员列表
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

  /** 表单配置项 */
  formConfig: {
    items: [
      {
        field: 'username',
        slots: { default: 'userName_item' },
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
      type: 'checkbox',
      width: '50px',
    },

    {
      field: 'teamMember.username',
      title: '成员名',
    },
    {
      field: 'teamMember.phoneNum',
      title: '手机号',
    },
    {
      field: 'createTime',
      title: '入组时间',
    },
    {
      field: 'status',
      width: '80px',
      title: '状态',
      slots: StatusColumnSolts,
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
          let result: IApiTeamMemberInfoData[] = []
          /** 加载数据 */
          const callback = (res: GetTeamMemberTableResponseData) => {
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
            teamId: route.query.id,
            userId: userItem.value?.id || '',
            size: page.pageSize,
            current: page.currentPage,
          }
          /** 调用接口 */
          getTeamMemberListTableApi(params).then(callback).catch(callback)
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
    member: null,
    userId: '',
    teamId: route.query.id,
  },
  /** 项列表 */
  items: [
    {
      title: '小组成员',
      slots: { default: 'member_item' },
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
  onShowModal: () => {
    xModalOpt.title = '新增组员'
    xModalDom.value?.open()
    nextTick(() => {
      !crudStore.isUpdate && xFormDom.value?.reset()
      xFormDom.value?.clearValidate()
    })
  },
  /** 确定并保存 */
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

      xFormOpt.data.userId = xFormOpt.data.member.id
      xFormOpt.data.teamId = route.query.id
      addTeamMemberApi(xFormOpt.data)
        .then(res => callback(res))
        .catch(err => callback(err))

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

  /** 删除 */
  onDelete: (row: IApiTeamMemberInfoData) => {
    const tip = `确定 <strong style='color:red;'>删除</strong> 组员 <strong style='color:#409eff;'>${row.teamMember.username}</strong> ？`
    const config: ElMessageBoxOptions = {
      type: 'error',
      showClose: true,
      closeOnClickModal: true,
      closeOnPressEscape: true,
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      dangerouslyUseHTMLString: true,
    }
    ElMessageBox.confirm(tip, '提示', config)
      .then(() => {
        deleteTeamApi(row.id)
          .then(() => {
            ElMessage.success('删除成功')
            crudStore.afterDelete()
            crudStore.commitQuery()
          })
          .catch(() => 1)
      })
      .catch(() => 1)
  },

  // 重置密码
  onResetPass: (row: IApiTeamMemberInfoData) => {
    const tip = `确定 <strong style='color:red;'>重置</strong> 组员 <strong style='color:#409eff;'>${row.teamMember.username}</strong> 的密码？`
    const config: ElMessageBoxOptions = {
      type: 'warning',
      showClose: true,
      closeOnClickModal: true,
      closeOnPressEscape: true,
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      dangerouslyUseHTMLString: true,
    }
    ElMessageBox.confirm(tip, '提示', config)
      .then(() => {
        repassUserApi(row.teamMember)
          .then(() => {
            ElMessage.success('密码重置成功')
            crudStore.afterDelete()
            crudStore.commitQuery()
          })
          .catch(() => 1)
      })
      .catch(() => 1)
  },

  /** 批量删除 */
  onDeleteUsers: () => {
    const tip = '确定 <strong style=\'color:red;\'>删除</strong> 这些组员吗？'
    const config: ElMessageBoxOptions = {
      type: 'warning',
      showClose: true,
      closeOnClickModal: true,
      closeOnPressEscape: true,
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      dangerouslyUseHTMLString: true,
    }
    ElMessageBox.confirm(tip, '提示', config)
      .then(() => {
        const selectUserArr = xGridDom.value?.getCheckboxRecords().map(user => user.id) as string[]
        deleteTeamsApi(selectUserArr).then((res: any) => {
          ElMessage.success(res.msg)
        }).catch((err: any) => {
          ElMessage.error(err.msg)
        }).finally(() => {
          crudStore.afterDelete()
          crudStore.commitQuery()
        })
      })
      .catch(() => 1)
  },

  /** 删除后是否返回上一页 */
  afterDelete: () => {
    const tableData: IApiUserInfoData[] = xGridDom.value!.getData()
    const pager: VxeGridPropTypes.ProxyAjaxQueryPageParams = xGridDom.value?.getProxyInfo()?.pager
    if (pager && pager.currentPage > 1 && tableData.length === 1)
      --pager.currentPage
  },
  /** 更多自定义方法 */
  moreFunc: () => {},
})

// TODO: 获取小组信息
const getTeamInfo = () => {
  const teamId = route.query.id as string

  // eslint-disable-next-line max-statements-per-line
  if (teamId === undefined) { router.push('/403') }
  else {
    isLoading.value = true
    getTeamInfoApi(teamId).then((res: any) => {
      teamInfo.value = res.data
      leaderInfo.value = res.data.leader
    }).catch((err: any) => {
      ElMessage.error(err.message)
    }).finally(() => {
      isLoading.value = false
    })
  }
}

// TODO: 初始化数据
onMounted(() => {
  getTeamInfo()
})
</script>

<template>
  <div v-loading="isLoading" class="app-container">
    <el-card shadow="never">
      <el-descriptions
        title="小组信息"
        :column="3"
      >
        <el-descriptions-item label="小组名称:">
          {{ teamInfo?.teamName }}
        </el-descriptions-item>
        <el-descriptions-item label="小组职责:">
          {{ teamInfo?.des }}
        </el-descriptions-item>
        <el-descriptions-item label="创建时间:">
          {{ teamInfo?.createTime }}
        </el-descriptions-item>
        <el-descriptions-item label="小组组长:">
          {{ teamInfo?.teamLeader.username }}
        </el-descriptions-item>
        <el-descriptions-item label="小组状态:">
          <el-tag v-if="teamInfo?.status === 0" class="ml-2" type="danger">
            停工
          </el-tag>
          <el-tag v-else class="ml-2" type="success">
            正常
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <el-button type="success" @click="router.push('/sys/team')">
            <span class="i-mingcute-back-line" /> 返回上一页
          </el-button>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <!-- 小组成员信息 -->
    <el-card shadow="never" class="mt-2">
      <h4>
        小组成员信息
      </h4>
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
        <!-- 左侧按钮列表 -->
        <template #toolbar-btns>
          <vxe-button status="primary" icon="vxe-icon-add" @click="crudStore.onShowModal()">
            新增成员
          </vxe-button>
          <vxe-button status="danger" icon="vxe-icon-delete" @click="crudStore.onDeleteUsers()">
            批量删除
          </vxe-button>
        </template>
        <!-- 操作 -->
        <template #row-operate="{ row }">
          <el-button link type="danger" @click="crudStore.onDelete(row)">
            <span class="i-material-symbols-delete-outline-rounded mr-1" /> 移除
          </el-button>
          <el-button link type="warning" @click="crudStore.onResetPass(row)">
            <span class="i-material-symbols-lock-reset mr-1" />  重置密码
          </el-button>
        </template>
      </vxe-grid>
      <!-- 弹窗 -->
      <vxe-modal ref="xModalDom" v-bind="xModalOpt">
        <!-- 表单 -->
        <vxe-form ref="xFormDom" v-bind="xFormOpt">
          <template #member_item="{ data }">
            <el-select
              v-model="data.member"
              value-key="id"
              remote-show-suffix
              filterable
              remote
              clearable
              reserve-keyword
              placeholder="请输入组员的姓名"
              :remote-method="getUserList"
              :loading="loading"
            >
              <el-option v-for="item in userLists" :key="item.id" :label="item.label" :value="item.value" />
            </el-select>
          </template>
        </vxe-form>
      </vxe-modal>
    </el-card>
  </div>
</template>

<style lang="scss">
.el-select-dropdown .el-popper .detailDialog_select-popper.is-multiple {
  z-index: 99992 !important;
}
.el-popper{
  z-index: 99992 !important;
}
.vxe-modal--wrapper{
  z-index: 100 !important;
}
</style>
