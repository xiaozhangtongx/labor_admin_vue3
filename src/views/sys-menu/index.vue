<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { getMenuTree } from '@/api/menu/index'

const ruleFormRef = ref<FormInstance>()
const dialogVisible = ref(false)
const tableData = ref<any>(null)
const editForm = reactive({
  menuTitle: '',
  menuPerms: '',
  menuIcon: '',
  menuPath: '',
  component: '',
  menuType: '',
  status: '',
  orderNum: '',
  parentId: '',
})
const visible = ref(false)

const getMenuTrees = async () => {
  const { data: menuTree } = await getMenuTree()
  tableData.value = [...menuTree]
}

onMounted(() => {
  getMenuTrees()
})

const editFormRules = reactive<FormRules>({
  parentId: [
    { required: true, message: '请选择上级菜单', trigger: 'blur' },
  ],
  name: [
    { required: true, message: '请输入名称', trigger: 'blur' },
  ],
  perms: [
    { required: true, message: '请输入权限编码', trigger: 'blur' },
  ],
  type: [
    { required: true, message: '请选择状态', trigger: 'blur' },
  ],
  orderNum: [
    { required: true, message: '请填入排序号', trigger: 'blur' },
  ],
  statu: [
    { required: true, message: '请选择状态', trigger: 'blur' },
  ],
})

const editHandle = (id: String) => {
  ElMessage.success(`修改成功${id}`)
}

const deleteHandle = (id: String) => {
  ElMessageBox.confirm(`正在删除用户：${id}，确认删除？`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    ElMessage.success('删除成功')
  })
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid, fields) => {
    if (valid)
      ElMessage.success('submit!')
    else
      ElMessage.error('error submit!')
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.resetFields()
}
</script>

<template>
  <div class="app-container bg-white m-5">
    <el-form :inline="true">
      <el-form-item>
        <vxe-button status="primary" icon="vxe-icon-add" @click="dialogVisible = true">
          新增菜单
        </vxe-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      stripe
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column
        prop="menuTitle"
        label="名称"
        sortable
        width="180"
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
      />
      <el-table-column
        prop="component"
        label="菜单组件"
      />
      <el-table-column
        prop="orderNum"
        label="排序号"
      />
      <el-table-column
        prop="status"
        label="状态"
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
      >
        <template #default="scope">
          <el-button type="primary" link @click="editHandle(scope.row.id)">
            <span class="i-ph-pencil-line-light mr-1" />  编辑
          </el-button>
          <el-divider direction="vertical" />
          <el-button type="danger" link @click="deleteHandle(scope.row.id)">
            <span class="i-material-symbols-delete-outline-rounded mr-1" /> 删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增对话框 -->
    <el-dialog
      v-model="dialogVisible"
      title="提示"
      width="600px"
    >
      <el-form ref="ruleFormRef" :model="editForm" :rules="editFormRules" label-width="100px" class="demo-editForm">
        <el-form-item label="上级菜单" prop="parentId">
          <el-select v-model="editForm.parentId" placeholder="请选择上级菜单">
            <template v-for="item in tableData" :key="item.id">
              <el-option :label="item.menuTitle" :value="item.id" />
              <template v-for="child in item.children" :key="child.id">
                <el-option :label="child.menuTitle" :value="child.id">
                  <span>{{ `- ${child.menuTitle}` }}</span>
                </el-option>
              </template>
            </template>
          </el-select>
        </el-form-item>

        <el-form-item label="菜单名称" prop="name" label-width="100px">
          <el-input v-model="editForm.menuTitle" autocomplete="off" />
        </el-form-item>

        <el-form-item label="权限编码" prop="perms" label-width="100px">
          <el-input v-model="editForm.menuPerms" autocomplete="off" />
        </el-form-item>

        <el-form-item label="图标" prop="icon" label-width="100px">
          <el-input v-model="editForm.menuIcon" autocomplete="off" />
        </el-form-item>
        <el-form-item label="菜单URL" prop="path" label-width="100px">
          <el-input v-model="editForm.menuPath" autocomplete="off" />
        </el-form-item>

        <el-form-item label="菜单组件" prop="component" label-width="100px">
          <el-input v-model="editForm.component" autocomplete="off" />
        </el-form-item>

        <el-form-item label="类型" prop="type" label-width="100px">
          <el-radio-group v-model="editForm.menuType">
            <el-radio :label="0">
              目录
            </el-radio>
            <el-radio :label="1">
              菜单
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="状态" prop="statu" label-width="100px">
          <el-radio-group v-model="editForm.status">
            <el-radio :label="0">
              禁用
            </el-radio>
            <el-radio :label="1">
              正常
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

</style>
