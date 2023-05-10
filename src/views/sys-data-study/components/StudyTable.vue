<script lang="ts" setup>
interface User {
  name: string
  dept: string
  score: string
}
const tableData: User[] = []

for (let i = 0; i < 10; i++) {
  tableData.push({
    name: 'Tom',
    dept: '材料部',
    score: '100',
  },
  )
}
</script>

<template>
  <el-table
    :data="tableData"
    :default-sort="{ prop: 'date', order: 'descending' }"
    style="width: 100%"
    height="380"
  >
    <el-table-column type="index" width="50" />
    <el-table-column prop="name" label="用户名" />
    <el-table-column prop="dept" label="部门" sortable />
    <el-table-column prop="score" label="成绩" sortable />
  </el-table>
</template>
