<script lang="ts" setup>
import type { PropType } from 'vue'

interface statusData {
  id: number
  value: string
  type: string
}

const props = defineProps({
  status: {
    type: Number,
    required: true,
  },
  statusList: {
    type: Array as PropType<statusData[]>,
    require: true,
  },
})

const type = props.statusList![props.status].type
const value = props.statusList![props.status].value
</script>

<template>
  <el-tag :type="type" effect="plain">
    <span> {{ value }}</span>
  </el-tag>
</template>

<style lang="scss" scoped>

</style>
