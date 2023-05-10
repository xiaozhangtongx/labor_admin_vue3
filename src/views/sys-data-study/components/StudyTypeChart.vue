<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const chart = ref(null)

onMounted(() => {
  const myChart = echarts.init(chart.value!)
  const option = {
    color: ['#82E5FF', '#00B2FF', '#246EFF'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['文档', '视频', '图文'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', '12', '123', '1234'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '文档',
        type: 'bar',
        stack: '总量',
        label: {
          position: 'insideRight',
        },
        data: [320, 302, 301, 334, 390, 330, 320, 21, 45, 10],
        barWidth: 23, // 设置柱状图宽度为37px
      },
      {
        name: '视频',
        type: 'bar',
        stack: '总量',
        label: {
          position: 'insideRight',
        },
        data: [120, 132, 101, 134, 90, 230, 210, 10, 45, 78],
      },
      {
        name: '图文',
        type: 'bar',
        stack: '总量',
        label: {
          position: 'insideRight',
        },
        data: [220, 182, 191, 234, 290, 330, 310, 451, 214, 314],
      },
    ],
  }

  myChart.setOption(option)
})
</script>

<template>
  <div class="chart-container">
    <div ref="chart" class="min-w-800px h-370px w-96" />
  </div>
</template>

<style>
.chart-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
