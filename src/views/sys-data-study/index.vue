<script lang="ts" setup>
import StudyTypeChart from './components/StudyTypeChart.vue'
import StudyTable from './components/StudyTable.vue'
import StudyPieChart from './components/StudyPieChart.vue'

const studyDataList = [
  { id: 1, bgColor: 'bg-blue-50', label: '访问总人次', status: 0, data: 5670, changeData: 206.31 },
  { id: 2, bgColor: 'bg-green-50', label: '试卷总量', status: 0, data: 1314, changeData: 3 },
  { id: 1, bgColor: 'bg-yellow-50', label: '试题总量', status: 0, data: 5200, changeData: 20 },
  { id: 1, bgColor: 'bg-purple-50', label: '考试通过率', status: 1, data: 200, changeData: 30 },
]

const PieChartDataList = [
  {
    id: 0,
    title: '资料类型',
    data: [
      { value: 234, name: '文档' },
      { value: 135, name: '视频' },
      { value: 1548, name: '图文' },
    ],
  },
  {
    id: 1,
    title: '试题类型',
    data: [
      { value: 234, name: '选择题' },
      { value: 135, name: '填空题' },
    ],
  },
  {
    id: 2,
    title: '考试详情',
    data: [
      { value: 234, name: '通过' },
      { value: 175, name: '不通过' },
    ],
  },
]
</script>

<template>
  <div class="app-container">
    <el-card shadow="never">
      <span>学习数据分析</span>
      <div class="grid grid-cols-1 auto-cols-max sm:grid-cols-4">
        <div v-for="studyData in studyDataList" :key="studyData.id" class="bg-blue-100 m-2 h130px rounded flex justify-around items-center " :class="studyData.bgColor">
          <div>
            <h3 class="text-gray-500">
              {{ studyData.label }}
            </h3>
            <h2 class="font-thin text-center">
              {{ studyData.data.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') }}
            </h2>
          </div>
          <div>
            <h3 class="text-gray-500 text-center ">
              相较于昨日
            </h3>
            <h2 class=" font-thin font-mono text-center" :class="studyData.status ? 'text-green-500' : 'text-red-500'">
              206.31 <span class="font-bold  " :class="studyData.status ? 'i-tabler-arrow-narrow-down' : 'i-tabler-arrow-narrow-up'" />
            </h2>
          </div>
        </div>
      </div>
    </el-card>

    <el-container class="my-5">
      <el-aside width="70%">
        <el-card shadow="never" class="max-h-430px min-w-820px">
          <div class="flex justify-between">
            <span>内容发布比例</span> <el-button link type="primary">
              查看更多
            </el-button>
          </div>
          <StudyTypeChart />
        </el-card>
      </el-aside>
      <el-aside width="30%" class="pl-5">
        <el-card shadow="never" class="max-h-430px min-w-320px ">
          <div class="flex justify-between mb-2">
            <span>学习之星</span> <el-button link type="primary">
              查看更多
            </el-button>
          </div>
          <StudyTable class="max-h-400px " />
        </el-card>
      </el-aside>
    </el-container>

    <el-card shadow="never">
      <span>数据类型分析</span>
      <div class="grid grid-cols-1 auto-cols-max sm:grid-cols-3 mt-2">
        <StudyPieChart v-for="studyDataType in PieChartDataList" :key="studyDataType.id" class="w-360px h-280px" :title="studyDataType.title" :data="studyDataType.data" />
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>

</style>
