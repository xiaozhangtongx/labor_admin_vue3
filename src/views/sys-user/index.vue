<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
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
import RoleColumnSolts from './tsx/RoleColumnSolts'
import StatusColumnSolts from './tsx/StatusColumnSolts'
import AvatarColumnSolts from './tsx/AvatarColumnSolts'
import { deleteUserApi, getUserTableApi } from '@/api/user/index'
import type { GetTableResponseData, IApiUserInfoData } from '@/api/user/types/user'
import { getRoleTableApi } from '@/api/role/index'
import { type IApiRoleInfoData, type IGetRoleTableRequestData } from '@/api/role/types/role'

interface IRoleItem {
  roleId: string
  roleName: string
  value: IApiRoleInfoData
}

defineOptions({
  name: 'VxeTable',
})

const roleList = ref<IRoleItem[]>([])
const loading = ref(false)

const getRoleList = async (query: string) => {
  loading.value = true
  const params: IGetRoleTableRequestData = {
    roleName: query,
    current: 1,
    size: 50,
  }
  const { data: userList } = await getRoleTableApi(params)
  loading.value = false
  roleList.value = userList.records.map((item) => {
    return { roleId: item.id, roleName: item.roleName, value: item }
  })
}
getRoleList('')
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
        itemRender: {
          name: '$input',
          props: { placeholder: '请输入用户名', clearable: true },
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
      type: 'checkbox',
      width: '50px',
    },
    {
      field: 'username',
      title: '用户名',
    },
    {
      field: 'roles',
      title: '角色',
      slots: RoleColumnSolts,
    },
    {
      field: 'phoneNum',
      title: '手机号',
    },
    {
      field: 'avatar',
      title: '头像',
      slots: AvatarColumnSolts,
    },
    {
      field: 'status',
      title: '状态',
      slots: StatusColumnSolts,
    },
    {
      title: '操作',
      width: '150px',
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
          let result: IApiUserInfoData[] = []
          /** 加载数据 */
          const callback = (res: GetTableResponseData) => {
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
            username: form.username || '',
            phone: form.phone || undefined,
            size: page.pageSize,
            current: page.currentPage,
          }
          /** 调用接口 */
          getUserTableApi(params).then(callback).catch(callback)
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
    password: '',
    roleList: [],
  },
  /** 项列表 */
  items: [
    {
      field: 'username',
      title: '用户名',
      itemRender: { name: '$input', props: { placeholder: '请输入用户名' } },
    },
    {
      field: 'phoneNum',
      title: '手机号',
      itemRender: { name: '$input', props: { placeholder: '请输入手机号' } },
    },
    {
      field: 'password',
      title: '密码',
      itemRender: { name: '$input', props: { placeholder: '请输入密码' } },
    },
    {
      field: 'avatar',
      title: '头像链接',
      itemRender: { name: '$input', props: { placeholder: '请输入头像链接' } },
    },
    {
      field: 'roles',
      title: '角色',
      slots: { default: 'role_item' },
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
    username: [
      {
        required: true,
        validator: ({ itemValue }) => {
          if (!itemValue)
            return new Error('请输入')

          if (!itemValue.trim())
            return new Error('空格无效')
        },
      },
    ],
    password: [
      {
        required: true,
        validator: ({ itemValue }) => {
          if (!itemValue)
            return new Error('请输入')

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
  onShowModal: (row?: IApiUserInfoData) => {
    if (row) {
      crudStore.isUpdate = true
      xModalOpt.title = '修改用户'
      // 赋值
      xFormOpt.data.username = row.username
    }
    else {
      crudStore.isUpdate = false
      xModalOpt.title = '新增用户'
    }
    // 禁用表单项

    if (xFormOpt.items) {
      if (xFormOpt.items[0]?.itemRender?.props)
        xFormOpt.items[0].itemRender.props.disabled = crudStore.isUpdate
    }
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
        if (err)
          return
        xModalDom.value?.close()
        ElMessage.success('操作成功')
        !crudStore.isUpdate && crudStore.afterInsert()
        crudStore.commitQuery()
      }
      if (crudStore.isUpdate) {
        // 调用修改接口
        setTimeout(() => callback(), 1000)
      }
      else {
        // 调用新增接口
        setTimeout(() => callback(), 1000)
      }
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
  onDelete: (row: IApiUserInfoData) => {
    const tip = `确定 <strong style='color:red;'>删除</strong> 用户 <strong style='color:#409eff;'>${row.username}</strong> ？`
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
        deleteUserApi(row.id)
          .then(() => {
            ElMessage.success('删除成功')
            crudStore.afterDelete()
            crudStore.commitQuery()
          })
          .catch(() => 1)
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
</script>

<template>
  <div class="app-container">
    <!-- 表格 -->
    <vxe-grid ref="xGridDom" v-bind="xGridOpt">
      <!-- 左侧按钮列表 -->
      <template #toolbar-btns>
        <vxe-button status="primary" icon="vxe-icon-add" @click="crudStore.onShowModal()">
          新增用户
        </vxe-button>
        <vxe-button status="danger" icon="vxe-icon-delete">
          批量删除
        </vxe-button>
      </template>
      <!-- 操作 -->
      <template #row-operate="{ row }">
        <el-button link type="primary" @click="crudStore.onShowModal(row)">
          <span class="i-ph-pencil-line-light mr-1" />  修改
        </el-button>
        <el-button link type="danger" @click="crudStore.onDelete(row)">
          <span class="i-material-symbols-delete-outline-rounded mr-1" /> 注销
        </el-button>
        <el-button link type="warning" @click="crudStore.onDelete(row)">
          <span class="i-material-symbols-lock-reset mr-1" />  重置密码
        </el-button>
      </template>
    </vxe-grid>
    <!-- 弹窗 -->
    <vxe-modal ref="xModalDom" v-bind="xModalOpt">
      <!-- 表单 -->
      <vxe-form ref="xFormDom" v-bind="xFormOpt">
        <template #role_item="{ data }">
          <el-select
            v-model="data.roleList"
            value-key="id"
            remote-show-suffix
            multiple
            filterable
            remote
            clearable
            reserve-keyword
            placeholder="请输入角色名"
            :remote-method="getRoleTableApi"
            :loading="loading"
          >
            <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName" :value="item.value" />
          </el-select>
        </template>
      </vxe-form>
    </vxe-modal>
  </div>
</template>

<style lang="scss" scoped>
.el-select-dropdown .el-popper .detailDialog_select-popper.is-multiple {
  z-index: 10035 !important;
}

.vxe-modal--wrapper {
  z-index: 1005 !important;
}
</style>
