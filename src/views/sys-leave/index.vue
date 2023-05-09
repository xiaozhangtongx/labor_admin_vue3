<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import FinishList from './components/FinishList.vue'
import { getApprovalTableApi, setApprovalApi } from '@/api/approval/index'
import { type IGetApprovalTableRequestData, type ISetApprovalRequestData } from '@/api/approval/types/approval'
import { useUserStore } from '@/store/modules/user'
import MyStatus from '@/components/MyStatus/index.vue'
import { uniqueFun } from '@/utils/utils'

defineOptions({
  name: 'ElementPlus',
})

const activeName = ref('todo')
const user = useUserStore()

const formRef = ref<FormInstance>()
const statusList = [
  { id: 0, type: '', value: '病假' },
  { id: 1, type: 'success', value: '婚假' },
  { id: 2, type: 'info', value: '丧假' },
  { id: 3, type: 'warning', value: '产假' },
  { id: 4, type: 'danger', value: '其它' },
]

const fromParm = reactive<IGetApprovalTableRequestData>({
  approverId: user.userInfo?.id,
  status: 1,
  applicationType: '0',
  current: 0,
  size: 5,
})

const sysFlowApproval = reactive<ISetApprovalRequestData>({
  id: '',
  applicationId: '',
  approverId: user.userInfo?.id || '',
  approvalResult: 0,
  reason: '',
  applicationType: '0',
})

const sysFlowLeaveList = ref<any[]>([])
const sysFlowInfo = ref<any>()
const loading = ref<boolean>(true)
const isFinish = ref<boolean>(false)
const active = ref<string>('')
const isApproval = ref<boolean>(false)
const disabled = computed(() => loading.value || isFinish.value)

// TODO: 获取要审批的请假列表
const getFlowLeaveList = () => {
  loading.value = true
  getApprovalTableApi(fromParm).then((res) => {
    const arr3 = [...sysFlowLeaveList.value, ...res.data.records]
    sysFlowLeaveList.value = [...uniqueFun(arr3)]
    sysFlowInfo.value = sysFlowLeaveList.value[0]
    active.value = sysFlowInfo.value?.id || ''
    loading.value = false
    fromParm.current++
    if (res.data.total <= sysFlowLeaveList.value.length)
      isFinish.value = true
  })
}

// TODO: 上滑刷新
const load = () => {
  getFlowLeaveList()
}

// TODO: 获取要审批列表的信息
const getFlowInfo = (sysFlowLeave: any) => {
  sysFlowInfo.value = sysFlowLeave
  loading.value = false
  active.value = sysFlowLeave.id
  sysFlowApproval.applicationId = sysFlowLeave.applicationId
  sysFlowApproval.id = sysFlowLeave.id
}

// TODO: 审批通过
const onApproveSuc = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.validate((valid) => {
    if (valid) {
      sysFlowApproval.approvalResult = 0
      isApproval.value = true
      setApprovalApi(sysFlowApproval).then((res: any) => {
        ElMessage.success(res.msg)
        removeItem(sysFlowApproval.id)
      }).catch((err) => {
        ElMessage.error(err.msg)
      }).finally(() => {
        isApproval.value = false
        formEl.resetFields()
      })
    }
    else {
      ElMessage.error('请输入审批意见')
    }
  })
}

// TODO: 审批不通过
const onAppoveFail = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.validate((valid) => {
    if (valid) {
      isApproval.value = true
      sysFlowApproval.approvalResult = 1
      setApprovalApi(sysFlowApproval).then((res: any) => {
        ElMessage.success(res.msg)
        removeItem(sysFlowApproval.id)
      }).catch((err) => {
        ElMessage.error(err.msg)
      }).finally(() => {
        isApproval.value = false
        formEl.resetFields()
      })
    }
    else {
      ElMessage.error('请输入审批意见')
    }
  })
}

const removeItem = (id: String) => {
  sysFlowLeaveList.value = sysFlowLeaveList.value.filter(item => item.id !== id)
}

onMounted(() => {
  getFlowLeaveList()
})
</script>

<template>
  <div class="app-container">
    <el-card shadow="never">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="待审批" name="todo">
          <div v-if="activeName === 'todo'" v-loading="loading">
            <el-empty v-if="sysFlowLeaveList.length === 0" :image-size="200" class="h-120" description="你已经全部审批完了" />
            <div v-else class="common-layout">
              <el-container>
                <el-aside>
                  <el-scrollbar height="480px">
                    <div v-infinite-scroll="load" :infinite-scroll-disabled="disabled" class="infinite-list">
                      <el-card
                        v-for="sysFlowLeave in sysFlowLeaveList" :key="sysFlowLeave.id" shadow="hover"
                        :class="{ activeCard: active === sysFlowLeave.id }" class="infinite-list-item  cursor-pointer "
                        @click="getFlowInfo(sysFlowLeave)"
                      >
                        <h4>
                          <MyStatus :status="parseInt(sysFlowLeave.applicationType)" :status-list="statusList" />
                        </h4>
                        <h5 class="flex justify-between w-60 text-gray-500">
                          <span>{{ sysFlowLeave.flowLeaveInfo.proposer.username
                          }}</span><span>{{ sysFlowLeave.flowLeaveInfo.createTime }}</span>
                        </h5>
                      </el-card>
                      <el-divider v-if="loading" border-style="dashed">
                        Loading...
                      </el-divider>
                      <el-divider v-if="isFinish" border-style="dashed">
                        加载完毕
                      </el-divider>
                    </div>
                  </el-scrollbar>
                </el-aside>
                <el-main>
                  <div>
                    <Screenfull element=".flow-leave" open-tips="审批表全屏" class="absolute right-0" />
                    <el-empty v-if="loading" :image-size="200" description="请点击左侧的待审批单查看数据" />
                    <el-scrollbar v-else v-loading="isApproval" height="450px">
                      <div class="flow-leave">
                        <h2 class="flex justify-center items-center">
                          审批表
                        </h2>
                        <el-descriptions v-loading="loading" title="申请人信息" :column="2" label-align="right">
                          <el-descriptions-item label="姓名">
                            {{ sysFlowInfo.flowLeaveInfo.proposer.username }}
                          </el-descriptions-item>
                          <el-descriptions-item label="手机号码">
                            {{ sysFlowInfo.flowLeaveInfo.proposer.phoneNum }}
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
                        <el-descriptions title="申请表单" :column="2" border>
                          <el-descriptions-item label="申请时间">
                            {{ sysFlowInfo.flowLeaveInfo.createTime }}
                          </el-descriptions-item>
                          <el-descriptions-item label="请假时长">
                            {{ sysFlowInfo.flowLeaveInfo.duration }} 天
                          </el-descriptions-item>
                          <el-descriptions-item label="请假开始时间">
                            {{ sysFlowInfo.flowLeaveInfo.startTime }}
                          </el-descriptions-item>
                          <el-descriptions-item label="请假结束时间">
                            {{ sysFlowInfo.flowLeaveInfo.endTime }}
                          </el-descriptions-item>

                          <el-descriptions-item label="申请原因">
                            {{ sysFlowInfo.flowLeaveInfo.reason }}
                          </el-descriptions-item>
                        </el-descriptions>
                        <h4 class="mt-2">
                          审批意见
                        </h4>
                        <el-form ref="formRef" :model="sysFlowApproval">
                          <el-form-item
                            prop="reason" :rules="[
                              {
                                required: true,
                                message: '请输入审批意见',
                                trigger: 'blur',
                              },
                            ]"
                          >
                            <el-input
                              v-model="sysFlowApproval.reason" :rows="5" type="textarea" placeholder="请输入审批意见"
                              maxlength="30" show-word-limit
                            />
                          </el-form-item>
                          <el-form-item>
                            <el-button type="success" @click="onApproveSuc(formRef)">
                              通过
                            </el-button>
                            <el-button type="danger" @click="onAppoveFail(formRef)">
                              拒绝
                            </el-button>
                          </el-form-item>
                        </el-form>
                      </div>
                    </el-scrollbar>
                  </div>
                </el-main>
              </el-container>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已审批" name="done">
          <FinishList v-if="activeName === 'done'" />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.search-wrapper {
  margin-bottom: 20px;

  :deep(.el-card__body) {
    padding-bottom: 2px;
  }
}

.toolbar-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.table-wrapper {
  margin-bottom: 20px;
}

.pager-wrapper {
  display: flex;
  justify-content: flex-end;
}

.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper {
  height: 300px;
  text-align: center;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin: 10px;
  background: #fff;

  &:hover {
    background: #ECF5FF;
  }
}

.infinite-list .infinite-list-item+.list-item {
  margin-top: 10px;
}

.flow-leave {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
}

.activeCard {
  background: #ECF5FF !important;
}
</style>
