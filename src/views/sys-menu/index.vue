<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { addMenuApi, deleteMenuApi, getMenuTree, updateMenuInfoApi } from '@/api/menu/index'
import { type IMenuRequestData, type IMenuResponseData } from '@/api/menu/types/menu'

const loading = ref<boolean>(false)
const ruleFormRef = ref<FormInstance>()
const dialogVisible = ref(false)
const isExpandAll = ref(true)
const treeTable = ref(true)
const tableData = ref<IMenuResponseData[]>([])
const formTreeData = ref<IMenuResponseData[]>([])
const editForm = reactive<IMenuRequestData>({
  id: '',
  menuTitle: '',
  menuPerms: '',
  menuIcon: '',
  menuPath: '',
  component: '',
  menuType: 0,
  status: 0,
  orderNum: 0,
  redirect: '',
  parentId: '',
  menuName: '',
})

const router = useRouter()
const getMenuTrees = async () => {
  loading.value = true
  const { data: menuTree } = await getMenuTree()
  tableData.value = [...menuTree]
  formTreeData.value = [{ id: '0', menuTitle: '根节点' }, ...menuTree]
  loading.value = false
}
const changeExpand = async () => {
  treeTable.value = false
  isExpandAll.value = !isExpandAll.value
  await nextTick()
  treeTable.value = true
}

onMounted(() => {
  getMenuTrees()
})

const editFormRules = reactive<FormRules>({
  parentId: [
    { required: true, message: '请选择上级菜单', trigger: 'blur' },
  ],
  menuTitle: [
    { required: true, message: '请输入名称', trigger: 'blur' },
  ],
  menuName: [
    { required: true, message: '请输入标识', trigger: 'blur' },
  ],
  menuPerms: [
    { required: true, message: '请输入权限编码', trigger: 'blur' },
  ],
  menuType: [
    { required: true, message: '请选择状态', trigger: 'blur' },
  ],
  status: [
    { required: true, message: '请选择状态', trigger: 'blur' },
  ],
})

const editHandle = (menuInfo: IMenuResponseData) => {
  dialogVisible.value = true
  editForm.id = menuInfo.id
  editForm.menuPath = menuInfo.menuPath
  editForm.menuTitle = menuInfo.menuTitle
  editForm.menuPerms = menuInfo.menuPerms
  editForm.menuIcon = menuInfo.menuIcon || ''
  editForm.menuPath = menuInfo.menuPath
  editForm.menuType = menuInfo.menuType
  editForm.status = menuInfo.status
  editForm.orderNum = menuInfo.orderNum || 0
  editForm.redirect = menuInfo.redirect || ''
  editForm.parentId = menuInfo.parentId
  editForm.component = menuInfo.component as unknown as string
  editForm.menuName = menuInfo.menuName
}

const deleteHandle = (menuInfo: IMenuResponseData) => {
  ElMessageBox.confirm(`正在删除：${menuInfo.menuTitle}，确认删除？`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    deleteMenuApi(menuInfo.id).then((res: any) => ElMessage.success(res.msg)).catch((err: any) => ElMessage.error(err.msg)).finally(() => {
      router.go(0)
      getMenuTrees()
    })
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.resetFields()
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (editForm.id === '') {
        addMenuApi(editForm).then((res: any) => {
          ElMessage.success(res.msg)
          getMenuTrees()
        })
      }
      else {
        updateMenuInfoApi(editForm).then((res: any) => {
          ElMessage.success(res.msg)
          router.go(0)
          getMenuTrees()
        })
      }
    }
    else { ElMessage.error('error submit!') }
  })
  dialogVisible.value = false
  formEl.resetFields()
}
</script>

<template>
  <div v-loading="loading" class="app-container bg-white m-5">
    <el-form :inline="true">
      <el-form-item>
        <vxe-button status="primary" icon="vxe-icon-add" @click="dialogVisible = true">
          新增菜单
        </vxe-button>
        <vxe-button status="warning" @click="changeExpand">
          {{ isExpandAll ? "关闭所有" : "展开所有" }}
        </vxe-button>
      </el-form-item>
    </el-form>

    <el-table
      v-if="treeTable"
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      stripe
      lazy
      max-height="480"
      :default-expand-all="isExpandAll"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column
        prop="menuTitle"
        label="名称"
        sortable
        width="173"
      />
      <el-table-column
        prop="menuName"
        label="标识"
        width="150"
      />
      <el-table-column
        prop="menuPerms"
        label="权限编码"
        sortable
        width="180"
      />

      <el-table-column
        prop="menuIcon"
        label="图标"
      >
        <template #default="scope">
          <span :class="scope.row.menuIcon" />
        </template>
      </el-table-column>

      <el-table-column
        prop="menuType"
        label="类型"
      >
        <template #default="scope">
          <el-tag v-if="scope.row.menuType === 0" size="small">
            目录
          </el-tag>
          <el-tag v-else-if="scope.row.menuType === 1" size="small" type="success">
            菜单
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        prop="menuPath"
        label="菜单URL"
        width="137"
      />
      <el-table-column
        prop="redirect"
        width="150"
        label="重定向"
      />
      <el-table-column
        prop="component"
        label="菜单组件"
        width="100"
      />
      <el-table-column
        prop="orderNum"
        label="排序"
        width="53"
      />
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="173"
      />
      <el-table-column
        prop="status"
        label="状态"
        width="73"
      >
        <template #default="scope">
          <el-tag v-if="scope.row.status === 0" size="small" type="success">
            正常
          </el-tag>
          <el-tag v-else-if="scope.row.status === 1" size="small" type="danger">
            禁用
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        prop="icon"
        label="操作"
        width="170"
        fixed="right"
      >
        <template #default="scope">
          <el-button type="primary" link @click="editHandle(scope.row)">
            <span class="i-ph-pencil-line-light mr-1" />  编辑
          </el-button>
          <el-divider direction="vertical" />
          <el-button type="danger" link @click="deleteHandle(scope.row)">
            <span class="i-material-symbols-delete-outline-rounded mr-1" /> 删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增对话框 -->
    <el-dialog
      v-model="dialogVisible"
      title="提示"
      width="537"
      align-center
    >
      <el-form ref="ruleFormRef" :model="editForm" :rules="editFormRules" label-width="100px" class="demo-editForm">
        <el-form-item label="上级菜单" prop="parentId">
          <el-select v-model="editForm.parentId" placeholder="请选择上级菜单">
            <template v-for="item in formTreeData" :key="item.id">
              <el-option :label="item.menuTitle" :value="item.id" />
              <template v-for="child in item.children" :key="child.id">
                <el-option :label="child.menuTitle" :value="child.id">
                  <span>{{ `- ${child.menuTitle}` }}</span>
                </el-option>
              </template>
            </template>
          </el-select>
        </el-form-item>

        <el-form-item label="菜单名称" prop="menuTitle" label-width="100px">
          <el-input v-model="editForm.menuTitle" autocomplete="off" />
        </el-form-item>

        <el-form-item label="菜单标识" prop="menuName" label-width="100px">
          <el-input v-model="editForm.menuName" autocomplete="off" placeholder="标识最好输入为英文" />
        </el-form-item>

        <el-form-item label="权限编码" prop="menuPerms" label-width="100px">
          <el-input v-model="editForm.menuPerms" autocomplete="off" />
        </el-form-item>

        <el-form-item label="图标" prop="menuIcon" label-width="100px">
          <el-input v-model="editForm.menuIcon" autocomplete="off" />
        </el-form-item>
        <el-form-item label="菜单URL" prop="menuPath" label-width="100px">
          <el-input v-model="editForm.menuPath" autocomplete="off" />
        </el-form-item>

        <el-form-item label="重定向" prop="redirect" label-width="100px">
          <el-input v-model="editForm.redirect" autocomplete="off" />
        </el-form-item>

        <el-form-item label="菜单组件" prop="component" label-width="100px">
          <el-input v-model="editForm.component" autocomplete="off" />
        </el-form-item>

        <el-form-item label="类型" prop="menuType" label-width="100px">
          <el-radio-group v-model="editForm.menuType">
            <el-radio :label="0">
              目录
            </el-radio>
            <el-radio :label="1">
              菜单
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="状态" prop="status" label-width="100px">
          <el-radio-group v-model="editForm.status">
            <el-radio :label="0">
              正常
            </el-radio>
            <el-radio :label="1">
              禁用
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="排序号" prop="orderNum" label-width="100px">
          <el-input-number v-model="editForm.orderNum" :min="1" label="排序号">
            1
          </el-input-number>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            立即创建
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.search-wrapper {
  margin-bottom: 20px;
  :deep(.el-card__body) {
    padding-bottom: 2px;
  }
}
</style>
