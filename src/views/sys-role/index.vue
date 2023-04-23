<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElTree } from 'element-plus'
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
import { addRoleApi, deleteRoleApi, deleteRolesApi, getRoleTableApi, updatePerm, updateRoleApi } from '@/api/role/index'
import { type GetRoleTableResponseData, type IApiRoleInfoData } from '@/api/role/types/role'
import { getMenuTree } from '@/api/menu/index'

const router = useRouter()

interface IMenuItem {
  id: string
  menuTitle: string
}

defineOptions({
  name: 'VxeTable',
})
const loading = ref(false)
const dialogTableVisible = ref(false)
const defaultProps = {
  children: 'children',
  label: 'menuTitle',
}
const permTreeData = ref<IMenuItem[]>()
const menuForm = reactive({
  menuIds: [] as any[],
  roleId: '',
})
const treeRef = ref<InstanceType<typeof ElTree>>()

const getMenuTrees = async () => {
  loading.value = true

  const { data: menuTree } = await getMenuTree()
  loading.value = false
  permTreeData.value = [...menuTree]
}

const submitPermFormHandle = () => {
  const menuArr = treeRef.value!.getCheckedNodes(false)
  const menuNodeIds = [] as String[]

  menuArr.forEach((menu) => {
    menuNodeIds.push(menu.id)
    menuNodeIds.push(menu.parentId)
  })

  const menuIds = [...new Set(menuNodeIds)].filter(menuId => menuId !== '0')

  updatePerm(menuForm.roleId, menuIds).then((res: any) => {
    ElMessage.success(res.msg)
  }).catch((err: any) => {
    ElMessage.error(err.msg)
  }).finally(() => {
    router.go(0)
    treeRef.value!.setCheckedKeys([], false)
    dialogTableVisible.value = false
  })
}

const cancelPermFormHandle = () => {
  treeRef.value!.setCheckedKeys([], false)
  dialogTableVisible.value = false
}

onMounted(() => {
  getMenuTrees()
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
        field: 'roleName',
        itemRender: {
          name: '$input',
          props: { placeholder: '请输入角色名', clearable: true },
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
      field: 'roleName',
      title: '角色名',
    },
    {
      field: 'roleCode',
      title: '角色标识',
    },
    {
      field: 'des',
      title: '角色描述',
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
          let result: IApiRoleInfoData[] = []
          /** 加载数据 */
          const callback = (res: GetRoleTableResponseData) => {
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
            roleName: form.roleName || '',
            size: page.pageSize,
            current: page.currentPage,
          }
          /** 调用接口 */
          getRoleTableApi(params).then(callback).catch(callback)
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
    roleName: '',
    roleCode: '',
    des: '',
  },
  /** 项列表 */
  items: [
    {
      field: 'roleName',
      title: '角色名',
      itemRender: { name: '$input', props: { placeholder: '请输入角色名' } },
    },
    {
      field: 'roleCode',
      title: '角色标识',
      itemRender: { name: '$input', props: { placeholder: '请输入角色标识' } },
    },
    {
      field: 'des',
      title: '角色描述',
      itemRender: { name: '$input', props: { placeholder: '请输入角色描述' } },
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
    roleName: [
      {
        required: true,
        validator: ({ itemValue }) => {
          if (!itemValue)
            return new Error('请输入角色名称')

          if (!itemValue.trim())
            return new Error('空格无效')
        },
      },
    ],
    roleCode: [
      {
        required: true,
        validator: ({ itemValue }) => {
          if (!itemValue)
            return new Error('请输入角色标识')

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
  onShowModal: (row?: IApiRoleInfoData) => {
    if (row) {
      crudStore.isUpdate = true
      xModalOpt.title = '修改角色'
      // 赋值
      xFormOpt.data.id = row.id
      xFormOpt.data.roleName = row.roleName
      xFormOpt.data.roleCode = row.roleCode
      xFormOpt.data.des = row.des
    }
    else {
      crudStore.isUpdate = false
      xModalOpt.title = '新增角色'
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
        if (err.code !== 200)
          return
        xModalDom.value?.close()
        ElMessage.success('操作成功')
        !crudStore.isUpdate && crudStore.afterInsert()
        crudStore.commitQuery()
      }
      if (crudStore.isUpdate) {
        // 调用修改接口
        updateRoleApi(xFormOpt.data)
          .then(res => callback(res))
          .catch(err => callback(err))
      }
      else {
        // 调用新增接口
        addRoleApi(xFormOpt.data)
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

  /** 删除 */
  onDelete: (row: IApiRoleInfoData) => {
    const tip = `确定 <strong style='color:red;'>删除</strong><strong style='color:#409eff;'> ${row.roleName}</strong>这个角色吗 ？`
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
        deleteRoleApi(row.id)
          .then(() => {
            ElMessage.success('删除成功')
            crudStore.afterDelete()
            crudStore.commitQuery()
          })
          .catch(() => 1)
      })
      .catch(() => 1)
  },

  onSetPermission: (row: IApiRoleInfoData) => {
    menuForm.roleId = row.id
    menuForm.menuIds = []
    row.menus.forEach((menu) => {
      if (menu.parentId !== '0')
        menuForm.menuIds.push(menu.id)
    })
    dialogTableVisible.value = true
  },

  /** 删除后是否返回上一页 */
  afterDelete: () => {
    const tableData: IApiRoleInfoData[] = xGridDom.value!.getData()
    const pager: VxeGridPropTypes.ProxyAjaxQueryPageParams = xGridDom.value?.getProxyInfo()?.pager
    if (pager && pager.currentPage > 1 && tableData.length === 1)
      --pager.currentPage
  },

  /** 批量删除 */
  onDeleteRoles: () => {
    const tip = '确定 <strong style=\'color:red;\'>删除</strong> 这些角色吗？'
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
        const selectRoleArr = xGridDom.value?.getCheckboxRecords().map(role => role.id) as string[]
        deleteRolesApi(selectRoleArr).then((res: any) => {
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
})
</script>

<template>
  <div class="app-container">
    <!-- 表格 -->
    <vxe-grid ref="xGridDom" v-bind="xGridOpt">
      <!-- 左侧按钮列表 -->
      <template #toolbar-btns>
        <vxe-button status="primary" icon="vxe-icon-add" @click="crudStore.onShowModal()">
          新增角色
        </vxe-button>
        <vxe-button status="danger" icon="vxe-icon-delete" @click="crudStore.onDeleteRoles()">
          批量删除
        </vxe-button>
      </template>
      <!-- 操作 -->
      <template #row-operate="{ row }">
        <el-button link type="primary" @click="crudStore.onShowModal(row)">
          <span class="i-ph-pencil-line-light mr-1" />  修改
        </el-button>
        <el-button link type="danger" @click="crudStore.onDelete(row)">
          <span class="i-material-symbols-delete-outline-rounded mr-1" /> 删除
        </el-button>
        <el-button link type="info" @click="crudStore.onSetPermission(row)">
          <span class="i-icon-park-outline-permissions mr-1" />  分配权限
        </el-button>
      </template>
    </vxe-grid>
    <!-- 弹窗 -->
    <vxe-modal ref="xModalDom" v-bind="xModalOpt">
      <!-- 表单 -->
      <vxe-form ref="xFormDom" v-bind="xFormOpt" />
    </vxe-modal>

    <!-- 分配权限对话框 -->
    <el-dialog v-model="dialogTableVisible" title="分配权限" width="600px">
      <el-form :model="menuForm">
        <el-form-item v-model="menuForm.menuIds">
          <ElTree
            ref="treeRef"
            :data="permTreeData"
            show-checkbox
            default-expand-all
            node-key="id"
            :highlight-current="true"
            :default-checked-keys="menuForm.menuIds"
            :props="defaultProps"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitPermFormHandle()">
            确定
          </el-button>
          <el-button @click="cancelPermFormHandle()">
            取消
          </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>
