<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref } from 'vue'
import type { ElMessageBoxOptions, UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
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
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox, genFileId } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import RoleColumnSolts from './tsx/RoleColumnSolts'
import StatusColumnSolts from './tsx/StatusColumnSolts'
import AvatarColumnSolts from './tsx/AvatarColumnSolts'
import { addUserApi, deleteUserApi, deleteUsersApi, getUserTableApi, repassUserApi, updateUserInfoApi, updateUserRoleApi } from '@/api/user/index'
import type { GetTableResponseData, IApiUserInfoData } from '@/api/user/types/user'
import { getRoleListApi } from '@/api/role/index'
import { type IGetRoleListRequestData } from '@/api/role/types/role'
import { isPhoneNumber } from '@/utils/validate'
import { client, options, random_name } from '@/utils/oss'

interface IRoleItem {
  id: string
  roleName: string
}

defineOptions({
  name: 'VxeTable',
})

const roleLists = ref<IRoleItem[]>()
const list = ref<any>([])
const router = useRouter()
const uploadTaskCover = ref<UploadRawFile>()
const uploadPercentageCover = ref<number>(0)
const uploading = ref(false)
const uploadingCover = ref(false)
const uploadCover = ref<UploadInstance>()
const dialogVisible = ref(false)
const uploadStatusCover = ref('')
const loading = ref(false)
const dialogTableVisible = ref(false)
const roleForm = reactive({
  roleList: [] as String[],
  userId: '',
})
const studyDataForm = reactive<any>({
  coverUrl: '',
})
const formDataCover = reactive<any>({
  fileName: '',
  type: '',
  size: 0,
  url: '',
})

const getRoleList = async (query: string) => {
  loading.value = true
  const params: IGetRoleListRequestData = {
    roleName: query,
  }
  const { data: roleList } = await getRoleListApi(params)
  loading.value = false
  roleLists.value = [...roleList]
}

const onSubmit = () => {
  updateUserRoleApi(roleForm.userId, roleForm.roleList).then((res: any) => {
    ElMessage.success(res.msg)
  }).catch((err: any) => {
    ElMessage.error(err.msg)
  }).finally(() => {
    router.go(0)
    dialogTableVisible.value = false
  })
}
// TODO: 上传前回调
const beforeUploadCover = (file: UploadRawFile) => {
  if (uploading.value) {
    ElMessage.warning('当前有文件正在上传，请稍后再试')
    return false
  }

  uploadingCover.value = true
  uploadPercentageCover.value = 0
  uploadStatusCover.value = '正在上传...'
  uploadTaskCover.value = file

  formDataCover.fileName = file.name
  formDataCover.type = file.type
  formDataCover.size = file.size

  return true
}

// TODO: 上传头像
const multipartUploadCover = (file: any) => {
  const fileName = `/laboradmin/${random_name}.${file.name.split('.')[1]}`
  if (beforeUploadCover(file.raw)) {
    // 请求oss接口上传
    client
      .multipartUpload(fileName, file.raw,
        {
          progress(percentage: number) { // 获取进度条的值
            uploadPercentageCover.value = Math.floor(percentage * 100)
          },
        },
        { ...options },
      )
      .then((response: any) => {
        if (response.res.statusCode === 200) {
          list.value.push({
            url: response.res.requestUrls[0].split('?')[0],
            name: fileName,
          })
          studyDataForm.coverUrl = response.res.requestUrls[0].split('?')[0]
          uploadStatusCover.value = '上传完成'
          uploadingCover.value = false
          uploadPercentageCover.value = 100
        }
      })
      .catch((error: any) => {
        ElMessage.error(error.message) // 错误返回
        studyDataForm.coverUrl = ''
        uploadStatusCover.value = '上传失败'
        uploadingCover.value = false
      })
  }
}

// TODO: 上传头像修改回调
const handleChangeCover: UploadProps['onChange'] = (uploadFile) => {
  multipartUploadCover(uploadFile)
}

// TODO: 头像上传处理替换处理上传
const handleExceedCover: UploadProps['onExceed'] = (files) => {
  uploadCover.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  uploadCover.value!.handleStart(file)
}

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  list.value = []
  studyDataForm.coverUrl = ''
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  studyDataForm.coverUrl = uploadFile.url!
  dialogVisible.value = true
}

onMounted(() => {
  getRoleList('')
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
      field: 'avatar',
      title: '头像',
      width: '80px',
      slots: AvatarColumnSolts,
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
      field: 'createTime',
      title: '创建时间',
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
    phoneNum: '',
    password: '',
    avatar: '',
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
      slots: { default: 'password_item' },
    },
    {
      field: 'avatar',
      title: '用户头像',
      slots: { default: 'avatar_item' },
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
            return new Error('请输入用户名')

          if (!itemValue.trim())
            return new Error('空格无效')
        },
      },
    ],
    phoneNum: [
      {
        required: true,
        validator: ({ itemValue }) => {
          if (!isPhoneNumber(itemValue))
            return new Error('请输入正确的手机号码')

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
            return new Error('请输入密码')

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
      xFormOpt.data.id = row.id
      xFormOpt.data.username = row.username
      xFormOpt.data.phoneNum = row.phoneNum
      xFormOpt.data.avatar = row.avatar
      studyDataForm.coverUrl = row.avatar
      list.value = [{
        url: studyDataForm.coverUrl,
        name: studyDataForm.coverUrl,
      }]
      xFormOpt.data.password = '傻子别看了，没有密码的'
    }
    else {
      crudStore.isUpdate = false
      xModalOpt.title = '新增用户'
    }
    // 禁用表单项
    if (xFormOpt.items) {
      if (xFormOpt.items[0]?.itemRender?.props)
        xFormOpt.items[0].itemRender.props.disabled = crudStore.isUpdate
      if (xFormOpt.items[2]?.itemRender?.props)
        xFormOpt.items[2].itemRender.props.disabled = crudStore.isUpdate
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
      xFormOpt.data.avatar = studyDataForm.coverUrl
      if (crudStore.isUpdate) {
        // 调用修改接口
        updateUserInfoApi(xFormOpt.data)
          .then(res => callback(res))
          .catch(err => callback(err))
      }
      else {
        // 调用新增接口
        addUserApi(xFormOpt.data)
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
  onDelete: (row: IApiUserInfoData) => {
    const tip = `确定 <strong style='color:red;'>删除</strong> 用户 <strong style='color:#409eff;'>${row.username}</strong> ？`
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

  // 重置密码
  onResetPass: (row: IApiUserInfoData) => {
    const tip = `确定 <strong style='color:red;'>重置</strong> 用户 <strong style='color:#409eff;'>${row.username}</strong> 的密码？`
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
        repassUserApi(row)
          .then(() => {
            ElMessage.success('密码重置成功')
            crudStore.afterDelete()
            crudStore.commitQuery()
          })
          .catch(() => 1)
      })
      .catch(() => 1)
  },

  // 设置角色
  onSetRole: (row: IApiUserInfoData) => {
    dialogTableVisible.value = true
    roleForm.userId = row.id
    roleForm.roleList = row.roles.map(role =>
      role.id,
    )
  },

  /** 批量删除 */
  onDeleteUsers: () => {
    const tip = '确定 <strong style=\'color:red;\'>删除</strong> 这些用户吗？'
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
        deleteUsersApi(selectUserArr).then((res: any) => {
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
        <vxe-button status="danger" icon="vxe-icon-delete" @click="crudStore.onDeleteUsers()">
          批量删除
        </vxe-button>
      </template>
      <!-- 操作 -->
      <template #row-operate="{ row }">
        <el-button link type="primary" @click="crudStore.onShowModal(row)">
          <span class="i-ph-pencil-line-light mr-1" />  修改
        </el-button>
        <el-button link type="info" @click="crudStore.onSetRole(row)">
          <span class="i-carbon-user-role mr-1" />  分配角色
        </el-button>
        <el-button link type="danger" @click="crudStore.onDelete(row)">
          <span class="i-material-symbols-delete-outline-rounded mr-1" /> 注销
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
        <!-- 用户密码 -->
        <template #password_item>
          <el-input
            v-model.trim="xFormOpt.data.password"
            placeholder="请输入密码"
            type="password"
            tabindex="2"
            show-password
            :disabled="crudStore.isUpdate"
          />
        </template>
        <!-- 用户头像 -->
        <template #avatar_item>
          <el-upload
            ref="uploadCover"
            v-model:file-list="list"
            class="upload-Cover"
            action
            multiple
            :auto-upload="false"
            accept=".jpg,.jpeg,.png,JPG,.PNG"
            :data="formDataCover"
            list-type="picture-card"
            :limit="1"
            :on-exceed="handleExceedCover"
            :on-change="handleChangeCover"
            :on-remove="handleRemove"
            :on-preview="handlePictureCardPreview"
          >
            <el-icon>
              <Plus />
            </el-icon>
          </el-upload>
          <div v-if="uploadingCover" class="ml-4">
            <div class="upload-progress">
              <el-progress :percentage="uploadPercentageCover" />
            </div>
            <div>{{ uploadStatusCover }}</div>
          </div>
          {{ }}
          <el-dialog v-model="dialogVisible">
            <img w-full :src="studyDataForm.coverUrl" alt="Preview Image">
          </el-dialog>
        </template>
      </vxe-form>
    </vxe-modal>

    <!-- 分配角色对话框 -->
    <el-dialog v-model="dialogTableVisible" title="分配角色" width="600px">
      <el-form :model="roleForm">
        <el-form-item>
          <el-checkbox-group v-model="roleForm.roleList">
            <el-checkbox v-for="role in roleLists" :key="role.id" :label="role.id">
              {{ role.roleName }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            确定
          </el-button>
          <el-button @click="dialogTableVisible = false">
            取消
          </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<style lang="scss">
.el-upload--picture-card{
  width: 73px;
  height: 73px;
}
.el-upload-list--picture-card .el-upload-list__item{
  width: 73px;
  height: 73px;
}
</style>
