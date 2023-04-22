<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, type FormInstance } from 'element-plus'
import { Refresh, Search } from '@element-plus/icons-vue'

defineOptions({
  name: 'ElementPlus',
})

const activeName = ref('todo')
const loading = ref<boolean>(false)
const searchFormRef = ref<FormInstance | null>(null)
const searchData = reactive({
  approverId: '',
})
const count = ref(0)
const load = () => {
  count.value += 2
}

const handleSearch = () => {}
const getFlowInfo = (num: number) => {
  ElMessage.success(`测试${num}`)
}
const resetSearch = () => {
  searchFormRef.value?.resetFields()
}
</script>

<template>
  <div class="app-container">
    <el-card v-loading="loading" class="search-wrapper">
      <el-form ref="searchFormRef" :inline="true" :model="searchData">
        <el-form-item prop="username" label="审批编号">
          <el-input v-model="searchData.approverId" placeholder="请输入审批id" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleSearch">
            查询
          </el-button>
          <el-button :icon="Refresh" @click="resetSearch">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="待审批" name="todo">
          <div class="common-layout">
            <el-container>
              <el-aside width="437px">
                <el-scrollbar height="400px">
                  <ul v-infinite-scroll="load" class="infinite-list">
                    <li v-for="i in count" :key="i" class="infinite-list-item  cursor-pointer " @click="getFlowInfo(i)">
                      {{ i }}
                    </li>
                  </ul>
                </el-scrollbar>
              </el-aside>
              <el-main>
                <div>
                  <Screenfull element=".flow-leave" open-tips="审批表全屏" class="absolute right-0" />

                  <el-scrollbar height="360px">
                    <div class="flow-leave">
                      <h2 class="flex justify-center items-center">
                        审批表
                      </h2>
                      <el-descriptions
                        title="申请人信息" column="2" label-align="right"
                      >
                        <el-descriptions-item label="姓名">
                          kooriookami
                        </el-descriptions-item>
                        <el-descriptions-item label="手机号码">
                          18100000000
                        </el-descriptions-item>
                        <el-descriptions-item label="部门">
                          Suzhou
                        </el-descriptions-item>
                        <el-descriptions-item label="角色">
                          <el-tag size="small">
                            School
                          </el-tag>
                        </el-descriptions-item>
                      </el-descriptions>
                      <el-descriptions title="申请表单" column="2" border>
                        <el-descriptions-item label="申请时间">
                          2023-04-11
                        </el-descriptions-item>
                        <el-descriptions-item label="请假时长">
                          7
                        </el-descriptions-item>
                        <el-descriptions-item label="请假开始时间">
                          2023-04-11
                        </el-descriptions-item>
                        <el-descriptions-item label="请假结束时间">
                          2023-04-18
                        </el-descriptions-item>

                        <el-descriptions-item
                          label="申请原因"
                        >
                          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, JiangsuProvinceNo.1188, Wuzhong Avenue, Wuzhong District, Suzhou, JiangsuProvinceNo.1188, Wuzhong Avenue, Wuzhong District, Suzhou, JiangsuProvinceNo.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                        </el-descriptions-item>
                      </el-descriptions>
                      <h4 class="mt-2">
                        审批意见
                      </h4>
                      <el-input
                        :rows="5"
                        type="textarea"
                        placeholder="请输入审批意见"
                      />
                      <div class="mt-5">
                        <el-button type="success">
                          通过
                        </el-button>
                        <el-button type="danger">
                          拒绝
                        </el-button>
                      </div>
                    </div>
                  </el-scrollbar>
                </div>
              </el-main>
            </el-container>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已审批" name="done">
          暂无记录
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.search-wrapper {
  margin-bottom: 20px;
  :deep(.el-card__body) {
    padding-bottom: 2px;
  }
}

.toolbar-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.table-wrapper {
  margin-bottom: 20px;
}

.pager-wrapper {
  display: flex;
  justify-content: flex-end;
}

.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}

.flow-leave{
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
}
</style>
