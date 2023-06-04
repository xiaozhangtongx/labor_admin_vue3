<script lang="ts" setup>
import CheckLineChart from './components/CheckLineChart.vue'
import WorkTable from './components/WorkTable.vue'
import CheckTimeLineChart from './components/CheckTimeLineChart.vue'

const checkDataList = [
  { id: 1, bgColor: 'bg-blue-300', textColor: 'text-blue-300', label: '部门人数', data: 5, icon: 'i-fluent-people-team-24-filled' },
  { id: 2, bgColor: 'bg-green-300', textColor: 'text-green-300', label: '正常出勤人数', data: 1, icon: 'i-material-symbols-event-available-outline-rounded' },
  { id: 3, bgColor: 'bg-yellow-300', textColor: 'text-yellow-300', label: '迟到人数', data: 2, icon: 'i-ic-twotone-free-cancellation' },
  { id: 4, bgColor: 'bg-purple-300', textColor: 'text-purple-300', label: '请假人数', data: 2, icon: 'i-ic-outline-leave-bags-at-home' },
]
</script>

<template>
  <div class="app-container">
    <el-container class="my-5">
      <el-aside width="70%">
        <el-card shadow="never" class="max-h-600px min-w-820px">
          <span>数据总览</span>
          <div class="grid grid-cols-1 auto-cols-max sm:grid-cols-4">
            <div v-for="item in checkDataList" :key="item.id" class=" m-2 h-90px rounded flex justify-around items-center cursor-pointer  ">
              <div class=" text-4xl hover:bg-blue-300  hover:text-white  w-80px h-80px flex justify-center items-center rounded-md transition duration-800 ease-in-out transform hover:item.bgColor" :class="item.textColor ">
                <span :class="item.icon" />
              </div>
              <div>
                <h3 class="text-gray-500">
                  {{ item.label }}
                </h3>
                <h2 class="font-thin text-center font-bold font-mono">
                  {{ (item.data).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') }}
                </h2>
              </div>
            </div>
          </div>
          <CheckLineChart class="max-w-880px h-370px w-800" />
        </el-card>
      </el-aside>
      <el-aside width="30%" class="pl-5">
        <el-card shadow="never" class="max-h-580px min-w-320px ">
          <span>本周工作达人</span>
          <WorkTable class="mt-2" />
        </el-card>
      </el-aside>
    </el-container>

    <el-card class="mt-2" shadow="never">
      <CheckTimeLineChart />
    </el-card>
  </div>
</template>

<style lang="scss" scoped>

</style>
