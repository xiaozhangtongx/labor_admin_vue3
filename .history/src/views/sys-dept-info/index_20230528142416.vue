<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getDeptInfoApi, getDeptStandardApi } from '@/api/dept/index'
import { type IApiDeptInfoData } from '@/api/dept/types/dept'
import Map from '@/components/Map/index.vue'

const route = useRoute()
const router = useRouter()

const deptInfo = ref<IApiDeptInfoData>()
const isLoading = ref<boolean>(false)
const leaderInfo = ref<any>(null)
const deptStandard = ref<any>(null)
const deptStandardDialogVisible = ref(false)

// TODO: 获取部门信息
const getDeptInfo = () => {
  const deptId = route.query.id as string

  // eslint-disable-next-line max-statements-per-line
  if (deptId === undefined) { router.push('/403') }
  else {
    isLoading.value = true
    getDeptInfoApi(deptId).then((res: any) => {
      deptInfo.value = res.data
      leaderInfo.value = res.data.leader
      getDeptStandardApi(deptId).then((res: any) => {
        deptStandard.value = res.data
      })
    }).catch((err: any) => {
      ElMessage.error(err.message)
    }).finally(() => {
      isLoading.value = false
    })
  }
}

// TODO: 修改或者添加考勤标准
const showDialog = (deptStandard: any) => {
  deptStandardDialogVisible.value = true
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
            部门主管信息
          </h4>
          <div class="flex flex-col items-center justify-center max-h-400px overflow-hidden">
            <el-avatar
              :size="130"
              :src="leaderInfo?.avatar"
            />
            <h3 class="my-6">
              {{ leaderInfo?.username }}
            </h3>
            <h3 class="my-3">
              <el-tag class="mr-2">
                管理部门
              </el-tag>
              <el-divider direction="vertical" />
              <el-tag class="ml-2" type="success">
                部门主管
              </el-tag>
            </h3>
            <h4 class="my-3">
              联系方式： {{ leaderInfo?.phoneNum }}
            </h4>
          </div>
        </el-card>
      </el-aside>

      <el-aside width="69%">
        <el-card v-if="deptStandard === null" class=" h-427px max-h-427px min-w-730px">
          <el-empty description="该部门暂时还没指定考勤标准">
            <el-button type="primary" @click="showDialog(null)">
              制定考勤标准
            </el-button>
          </el-empty>
        </el-card>
        <el-card v-else class=" h-427px max-h-427px min-w-730px">
          <el-descriptions
            title="部门考勤标准"
            :column="3"
          >
            <el-descriptions-item label="迟到时间:">
              {{ deptStandard?.earliestTime }}
            </el-descriptions-item>
            <el-descriptions-item label="早退时间:">
              {{ deptStandard?.latestTime }}
            </el-descriptions-item>
            <el-descriptions-item>
              <el-button type="primary" @click="showDialog(deptStandard)">
                更换考勤标准
              </el-button>
            </el-descriptions-item>
          </el-descriptions>
          <Map :lng="deptStandard?.lon" :lat="deptStandard?.lat" />
        </el-card>
      </el-aside>
    </el-container>

    <!-- 考勤标准管理弹窗 -->
    <el-dialog
      v-model="deptStandardDialogVisible"
      title="Notice"
      width="30%"
      destroy-on-close
      center
    >
      <span>
        Notice: before dialog gets opened for the first time this node and the one
        bellow will not be rendered
      </span>
      <div>
        <strong>Extra content (Not rendered)</strong>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="deptStandardDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="deptStandardDialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>
