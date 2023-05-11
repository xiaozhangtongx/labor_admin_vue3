<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const chartRef = ref<HTMLDivElement | null>(null)

const data = [] as any[]
for (let i = 1; i < 50; i++) {
  const time = `${(Math.floor(i / 2)).toString().padStart(2, '0')}:${Math.floor(i % 2) !== 0 ? '00' : '30'}`
  data.push([time, Math.round((Math.random()) * 320)])
}

onMounted(() => {
  const myChart = echarts.init(chartRef.value!)

  const option = {
    color: ['#4BD7F2', '#00B2FF', '#246EFF'],
    tooltip: {
      trigger: 'axis',
      position(pt: any) {
        return [pt[0], '10%']
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    title: {
      left: 'center',
      text: '各时段打卡详情',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '20%'],
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100,
      },
      {
        start: 0,
        end: 20,
      },
    ],
    series: [
      {
        name: '打卡人数',
        type: 'line',
        smooth: true,
        symbol: 'none',
        areaStyle: {
          opacity: 0.73,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)',
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)',
            },
          ]),
        },
        data,
        markArea: {
          itemStyle: {
            color: '#95E5',
          },
          data: [
            [
              {
                name: '上班打卡',
                xAxis: '07:00',
              },
              {
                xAxis: '09:00',
              },
            ],
            [
              {
                name: '下班签退',
                xAxis: '17:00',
              },
              {
                xAxis: '21:00',
              },
            ],
          ],
        },
      },
    ],
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div ref="chartRef" class="w-1250px h-370px" />
</template>

<style lang="scss" scoped>

</style>
