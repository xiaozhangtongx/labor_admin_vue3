<script lang="ts" setup>
import { ref } from 'vue'
import { Settings } from '../../layout/components'

const show = ref(false)
</script>

<template>
  <div @click="show = true">
    <el-tooltip effect="dark" content="消息通知" placement="bottom">
      <svg-icon name="i-ic-outline-settings text-xl cursor-pointer" />
    </el-tooltip>
    <el-drawer v-model="show" size="300px" :with-header="false">
      <Settings />
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>

</style>
