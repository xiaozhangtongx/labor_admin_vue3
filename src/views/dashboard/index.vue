<script lang="ts" setup>
import { computed, ref } from 'vue'
import Calendar from 'mpvue-calendar'
import lunar from 'mpvue-calendar/dist/lunar'
import { useRouter } from 'vue-router'
import { useDateFormat, useNow } from '@vueuse/core'
import { useUserStore } from '@/store/modules/user'

const remarks = ref({ '2023-5-9': '组会' })
const formatter = ref('YYYY-MM-DD HH:mm:ss')
const formatted = useDateFormat(useNow(), formatter)
const router = useRouter()
const useUser = useUserStore()
const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const quickAppList = ref([
  { id: '1', title: '考勤管理', router: '/sys/check/index', icon: 'i-material-symbols-event-available-outline-rounded' },
  { id: '2', title: '请假审批', router: '/sys/flow/leave', icon: 'i-ic-outline-leave-bags-at-home' },
  { id: '3', title: '加班审批', router: '/sys/flow/overtime', icon: 'i-material-symbols-more-time' },
  { id: '4', title: '题库管理', router: '/sys-question/list', icon: 'i-mdi-file-document' },
  { id: '5', title: '学习资料', router: '/sys-study/list', icon: 'i-material-symbols-folder' },
  { id: '6', title: '通知中心', router: '/sys-notice/list', icon: 'i-mdi-bell-badge' },
  { id: '7', title: '卷库管理', router: '/sys-question/list', icon: 'i-fluent-book-question-mark-24-filled' },
  { id: '8', title: '数据中心', router: '/sys/data/analysis', icon: 'i-mdi-database' },
  { id: '9', title: '个人中心', router: '/sys/account/index', icon: 'i-material-symbols-account-box' },
])
const imgList = [
  { id: '1', title: '考勤管理', imgUrl: 'http://laboradmin.oss-cn-beijing.aliyuncs.com/img/2023/05/0512f145b8cae5480190dedb6e301ddae8image_1683293746981.png' },
  { id: '2', title: '考勤管理', imgUrl: 'http://laboradmin.oss-cn-beijing.aliyuncs.com/img/2023/05/051fa210dfe2b143419e5ce45b38fd2ce3image_1683293702354.png' },
  { id: '1', title: '考勤管理', imgUrl: 'http://laboradmin.oss-cn-beijing.aliyuncs.com/img/2023/05/0531a5a2dae1fe46798445aec325a91daaimage_1683293813882.png' },
  { id: '1', title: '考勤管理', imgUrl: 'http://laboradmin.oss-cn-beijing.aliyuncs.com/img/2023/05/0533ca72846af94b09a0ef168deec5e0c0image_1683271712678.png' },
]
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div class="app-container">
    <el-container>
      <el-aside width="73%" class="p-2">
        <el-carousel height="400px" trigger="click">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <el-image class="h-400px w-full cursor-pointer" :src="item.imgUrl" fit="fill" />
          </el-carousel-item>
        </el-carousel>
      </el-aside>
      <el-aside width="27%" class="pl-5 py-2">
        <el-card shadow="never" class="max-h-400px min-w-320px">
          <div class="flex flex-col items-center justify-center max-h-400px overflow-hidden">
            <el-avatar
              :size="130"
              :src="useUser.userInfo?.avatar"
            />
            <h3 class="my-6">
              {{ useUser.userInfo?.username }}
            </h3>
            <h3 class="my-2">
              <el-tag class="mr-2">
                管理部门
              </el-tag>
              <el-divider direction="vertical" />
              <el-tag class="ml-2" type="success">
                超级管理员
              </el-tag>
            </h3>
            <h4 class="my-6">
              联系方式： {{ useUser.userInfo?.phoneNum }}
            </h4>
            <h4 class="my-4">
              今天又是心情很好的一天！
            </h4>
          </div>
        </el-card>
      </el-aside>
    </el-container>

    <el-container class="flex justify-between mt-4">
      <el-aside width="37%" class="pl-2 py-2">
        <el-card shadow="never" class="max-h-400px min-w-450px">
          <template #header>
            <div class="card-header">
              <span>部门通知</span>
            </div>
          </template>
          <div class="infinite-list-wrapper" style="overflow: auto">
            <ul
              v-infinite-scroll="load"
              class="list"
              :infinite-scroll-disabled="disabled"
            >
              <li v-for="i in count" :key="i" class="list-item">
                通知 {{ i }}
              </li>
            </ul>
            <p v-if="loading">
              Loading...
            </p>
            <p v-if="noMore">
              No more
            </p>
          </div>
        </el-card>
      </el-aside>

      <el-aside width="34%" class="pl-5 py-2 ">
        <el-card shadow="never" class="h-400px min-w-400px">
          <template #header>
            <div class="card-header">
              <span>今日安排 {{ formatted }}
              </span>
            </div>
          </template>

          <div class="  flex justify-center">
            <Calendar
              background-text
              class-name="select-mode"
              :remarks="remarks"
              :lunar="lunar"
            />
          </div>
        </el-card>
      </el-aside>

      <el-aside width="27%" class="pl-5 py-2">
        <el-card shadow="never" class="max-h-400px min-w-320px">
          <template #header>
            <div class="card-header">
              <span>快速通道</span>
            </div>
          </template>
          <div class="h-77 grid grid-rows-3 grid-flow-col gap-4 quickApp">
            <div v-for="quickApp in quickAppList" :key="quickApp.id" class=" rounded-lg hover:text-blue-500 hover:bg-blue-100   transition duration-500 ease-in-out transform hover:-translate-y-1" :title="quickApp.title" @click="router.push(quickApp.router)">
              <span :class="quickApp.icon" class="text-3xl text-indigo-300" />
              <span class="text-current mt-2 hover:text-blue-400">{{ quickApp.title }}</span>
            </div>
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.infinite-list-wrapper {
  height: 330px;
  text-align: center;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}

.quickApp{
  >div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor:pointer;
  }
}
</style>
