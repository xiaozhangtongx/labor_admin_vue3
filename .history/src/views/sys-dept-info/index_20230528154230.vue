<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import AMapLoader from '@amap/amap-jsapi-loader'
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
const map = ref<any>(null)
const address = ref('')
const center = ref([116.397428, 39.90923])
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  id: '',
  deptId: route.query.id as string,
  lon: 114.361595,
  lat: 30.6078,
  earliestTime: '',
  latestTime: '',
  minDuration: 9,
  des: '',
  radius: 0,
})

const rules = reactive<FormRules>({
  radius: [
    { required: true, message: '请输入打卡半径', trigger: 'blur' },
  ],
  minDuration: [
    { required: true, message: '请输入最少工作时长', trigger: 'blur' },
  ],
  earliestTime: [
    {
      type: 'date',
      required: true,
      message: '请选择上班时间',
      trigger: 'change',
    },
  ],
  latestTime: [
    {
      type: 'date',
      required: true,
      message: '请选择下班时间',
      trigger: 'change',
    },
  ],
  des: [
    { message: '考勤标准备注', trigger: 'blur' },
  ],
})

// TODO: 初始化地图
const initMap = () => {
  // TODO: 初始化中心点
  if (ruleForm.lat !== null && ruleForm.lon !== null)
    center.value = [ruleForm.lon, ruleForm.lat]

  AMapLoader.load({
    key: 'b8fdf4fcb8c3449e4d3ef4e1a0172552',
    version: '2.0',
    plugins: ['AMap.Geolocation', 'AMap.Geocoder'],
  }).then((AMap: any) => {
    map.value = new AMap.Map('standardMap', {
      center: center.value,
      zoom: 13,
    })

    // TODO: 逆地理编码输出地址
    const geocoder = new AMap.Geocoder({
      city: '全国',
      radius: 1000,
    })
    geocoder.getAddress([ruleForm.lon, ruleForm.lat], (status: string, result: any) => {
      if (status === 'complete' && result.regeocode)
        address.value = result.regeocode.formattedAddress
    })

    // TODO: 添加标点
    const marker = new AMap.Marker({
      position: new AMap.LngLat(ruleForm.lon, ruleForm.lat), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: '打卡',
    })

    // 将创建的点标记添加到已有的地图实例：
    map.value?.add(marker)
    map.value.zoom = 18
  })
}

// TODO: 提交表单
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

// TODO: 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.resetFields()
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
  initMap()
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
          <Map :lon="deptStandard?.lon" :lat="deptStandard?.lat" />
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
      class="min-w-370px"
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
        <el-form-item label="考勤时间段" required>
          <el-col :span="11">
            <el-form-item prop="earliestTime">
              <el-time-picker
                v-model="ruleForm.earliestTime"
                type="date"
                label="上班时间"
                placeholder="请选择上班时间"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col class="text-center" :span="2">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="latestTime">
              <el-time-picker
                v-model="ruleForm.latestTime"
                label="请选择下班时间"
                placeholder="请选择下班时间"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="最少工作时长" prop="minDuration" required>
          <el-input-number
            v-model="ruleForm.minDuration"
            :min="6"
            :max="12"
            controls-position="right"
          /><span class="ml-2">小时（h）</span>
        </el-form-item>

        <el-form-item label="打卡半径" prop="radius" required>
          <el-input-number
            v-model="ruleForm.radius"
            :min="0.3"
            :max="5"
            :precision="2"
            :step="0.1"
            controls-position="right"
          /><span class="ml-2">千米（km）</span>
        </el-form-item>

        <el-form-item label="打卡坐标中心点" required>
          <div class="w-full h-200px bg-red-300 ">
            <p class="absolute top-0 z-9999">
              <strong>经度：</strong>{{ ruleForm.lon || '还未打卡' }}  <strong class="ml-3"> 纬度：</strong>   {{ ruleForm.lat || '还未打卡' }}
            </p>
            <p class="absolute top-2 z-9999">
              <strong>地址：</strong>{{ address || '还未打卡' }}
            </p>
            <div id="standardMap" class="w-full h-full standardMap" />
          </div>
          <Screenfull element=".standardMap" open-tips="地图全屏" class="absolute right-0 top-0" />
        </el-form-item>

        <el-form-item label="考勤标准描述" prop="des">
          <el-input
            v-model="ruleForm.des" type="textarea" maxlength="100"
            placeholder="请输入考勤标准描述"
            show-word-limit
          />
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
