<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})

const chartRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const chartInstance = echarts.init(chartRef.value!)

  const option = {
    color: ['#82E5FF', '#00B2FF', '#246EFF', '#846BCE', '#249EFF'],
    title: {
      text: props.title,
      left: 'center',
      top: 'center',
    },
    tooltip: {
      trigger: 'item',
      position: 'bottom',
    },
    legend: {
      orient: 'vertical',
      bottom: 'bottom',
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        label: { show: true, position: 'outside' },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },

        data: props.data,
      },
    ],
  }

  chartInstance.setOption(option)

  // 可选 - 自适应容器大小
  window.addEventListener('resize', () => {
    chartInstance.resize()
  })

  // 组件卸载时销毁图表
  return () => {
    chartInstance.dispose()
  }
})
</script>

<template>
  <div ref="chartRef" />
</template>

<style>

</style>
