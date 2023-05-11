<script lang="ts" setup>
interface User {
  name: string
  dept: string
  worTime: string
}
const tableData: User[] = []

for (let i = 0; i < 15; i++) {
  tableData.push({
    name: 'Tom',
    dept: '材料部',
    worTime: '100',
  },
  )
}
</script>

<template>
  <el-table
    :data="tableData"
    :default-sort="{ prop: 'date', order: 'descending' }"
    style="width: 100%"
    height="467"
  >
    <el-table-column type="index" width="50" />
    <el-table-column prop="name" label="用户名" />
    <el-table-column prop="dept" label="部门" sortable />
    <el-table-column prop="worTime" label="工作时长" sortable />
  </el-table>
</template>
