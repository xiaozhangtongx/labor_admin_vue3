<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
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
const title = ref<string>('')

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid, fields) => {
    if (valid)
      console.log('submit!')

    else
      console.log('error submit!', fields)
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))

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
  title.value = deptStandard === null ? '制定考勤标准' : '修改考勤标准'
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
      :title="title"
      width="37%"
      destroy-on-close
      draggable
      align-center
    >
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
        label-position="left"
      >
        <el-form-item label="Activity name" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="Activity zone" prop="region">
          <el-select v-model="ruleForm.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Activity count" prop="count">
          <el-select-v2
            v-model="ruleForm.count"
            placeholder="Activity count"
            :options="options"
          />
        </el-form-item>
        <el-form-item label="Activity time" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                v-model="ruleForm.date1"
                type="date"
                label="Pick a date"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col class="text-center" :span="2">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                v-model="ruleForm.date2"
                label="Pick a time"
                placeholder="Pick a time"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="Instant delivery" prop="delivery">
          <el-switch v-model="ruleForm.delivery" />
        </el-form-item>
        <el-form-item label="Activity type" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="Online activities" name="type" />
            <el-checkbox label="Promotion activities" name="type" />
            <el-checkbox label="Offline activities" name="type" />
            <el-checkbox label="Simple brand exposure" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="Sponsorship" />
            <el-radio label="Venue" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form" prop="desc">
          <el-input v-model="ruleForm.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            Create
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">
            Reset
          </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>
