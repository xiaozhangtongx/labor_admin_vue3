<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getDeptInfoApi } from '@/api/dept/index'
import { type IApiDeptInfoData } from '@/api/dept/types/dept'
import { useUserStore } from '@/store/modules/user'
import Map from '@/components/Map/index.vue'
import { getUserTableApi } from '@/api/user/index'
import type { IApiUserInfoData } from '@/api/user/types/user'

const route = useRoute()
const router = useRouter()
const userLists = ref<any[]>()
const loading = ref(false)
const deptInfo = ref<IApiDeptInfoData>()
const userItem = ref<IApiUserInfoData>()
const isLoading = ref<boolean>(false)
const useUser = useUserStore()
const leaderDialogVisible = ref<boolean>(false)
const leaderForm = reactive({
  leader: null,
})

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

// TODO: 获取部门信息
const getDeptInfo = () => {
  const deptId = route.query.id as string

  // eslint-disable-next-line max-statements-per-line
  if (deptId === undefined) { router.push('/403') }
  else {
    isLoading.value = true
    getDeptInfoApi(deptId).then((res: any) => {
      deptInfo.value = res.data
    }).catch((err: any) => {
      ElMessage.error(err.message)
    }).finally(() => {
      isLoading.value = false
    })
  }
}

// TODO: 初始化数据
onMounted(() => {
  getDeptInfo()
})
</script>

<template>
  <div v-loading="isLoading" class="app-container">
    <el-card shadow="never">
      <el-descriptions
        title="部门信息"
        :column="2"
      >
        <el-descriptions-item label="部门名称:">
          {{ deptInfo?.deptName }}
        </el-descriptions-item>
        <el-descriptions-item label="创建时间:">
          {{ deptInfo?.createTime }}
        </el-descriptions-item>
        <el-descriptions-item label="部门职责:">
          {{ deptInfo?.des }}
        </el-descriptions-item>
        <el-descriptions-item>
          <el-button type="success" @click="router.push('/sys/dept')">
            <span class="i-mingcute-back-line" /> 返回上一页
          </el-button>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-container class="flex justify-between mt-3">
      <el-aside width="30%">
        <el-card class=" h-427px max-h-427px min-w-320px">
          <h4 class="text-center">
            负责人信息
          </h4>
          <div class="flex flex-col items-center justify-center max-h-400px overflow-hidden">
            <el-avatar
              :size="130"
              :src="useUser.userInfo?.avatar"
            />
            <h3 class="my-6">
              {{ useUser.userInfo?.username }}
            </h3>
            <h3 class="my-2">
              <el-tag class="mr-2">
                管理部门
              </el-tag>
              <el-divider direction="vertical" />
              <el-tag class="ml-2" type="success">
                超级管理员
              </el-tag>
            </h3>
            <h4 class="my-3">
              联系方式： {{ useUser.userInfo?.phoneNum }}
            </h4>
            <h4 class="my-3">
              <el-button type="primary" @click="leaderDialogVisible = true">
                更换负责人
              </el-button>
            </h4>
          </div>
        </el-card>
      </el-aside>
      <el-aside width="69%">
        <el-card class=" h-427px max-h-427px min-w-730px">
          <el-descriptions
            title="部门考勤标准"
            :column="3"
          >
            <el-descriptions-item label="迟到时间:">
              {{ deptInfo?.createTime }}
            </el-descriptions-item>
            <el-descriptions-item label="早退时间:">
              {{ deptInfo?.createTime }}
            </el-descriptions-item>
            <el-descriptions-item>
              <el-button type="primary">
                更换考勤标准
              </el-button>
            </el-descriptions-item>
          </el-descriptions>
          <Map />
        </el-card>
      </el-aside>
    </el-container>

    <!-- 选择负责人对话框 -->
    <el-dialog
      v-model="leaderDialogVisible"
      title="更换负责人"
      width="30%"
      destroy-on-close
      draggable
    >
      <el-form :model="leaderForm" label-width="120px">
        <el-form-item label="Activity form">
          <el-select
            v-model="leaderForm.leader"
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
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            Create
          </el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>
