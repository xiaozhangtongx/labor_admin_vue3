<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Calendar from 'mpvue-calendar'
import lunar from 'mpvue-calendar/dist/lunar'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useDateFormat, useNow } from '@vueuse/core'
import { useUserStore } from '@/store/modules/user'
import { getNoticeTableApi } from '@/api/notice/index'
import type { GetNoticeTableResponseData, IApiNoticeInfoData, IGetNoticeTableRequestData } from '@/api/notice/types/notice'

const params: IGetNoticeTableRequestData = {
  title: '',
  type: '',
  size: 10,
  current: 0,
}

const typeList = [
  { id: '0', value: '安全公告', type: '' },
  { id: '1', value: '学习公告', type: 'success' },
  { id: '2', value: '考试公告', type: 'danger' },
]

const remarks = ref({ '2023-5-9': '组会' })
const formatter = ref('YYYY-MM-DD HH:mm:ss')
const noticeInfo = ref<IApiNoticeInfoData>()
const noticeInfoList = ref<IApiNoticeInfoData[]>()
const loading = ref<boolean>(false)
const formatted = useDateFormat(useNow(), formatter)
const dialogTableVisible = ref(false)
const router = useRouter()
const useUser = useUserStore()
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
  { id: '1', title: '考勤管理', imgUrl: 'https://img95.699pic.com/photo/50074/3033.jpg_wh860.jpg' },
  { id: '2', title: '考勤管理', imgUrl: 'https://tss6164458.com.tw/images/tss-a3-04.jpg' },
  { id: '1', title: '考勤管理', imgUrl: 'https://5b0988e595225.cdn.sohucs.com/images/20171116/bd2ed35ea7b84585bfc3068cf88153b3.jpeg' },
  { id: '1', title: '考勤管理', imgUrl: 'https://appimg.dzwww.com/share/2021/07/12/a99d64e-3ebcd381.JPG' },
]

// TODO: 获取通知列表
const getNoticeList = () => {
  loading.value = true
  getNoticeTableApi(params)
    .then((res: GetNoticeTableResponseData) => {
      noticeInfoList.value = res.data.records
    })
    .catch(err => ElMessage.error(err.message))
    .finally(() => {
      loading.value = false
    })
}

// TODO: 展示公告预览
const onShowDialog = (row?: IApiNoticeInfoData) => {
  dialogTableVisible.value = true
  noticeInfo.value = row
}

// TODO: 初始化通知
onMounted(() => {
  getNoticeList()
})
</script>

<template>
  <div v-loading="loading" class="app-container">
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
            <el-scrollbar height="300px">
              <div class="infinite-list">
                <el-card
                  v-for="noticeItem in noticeInfoList" :key="noticeItem.id" shadow="hover"
                  class="infinite-list-item  cursor-pointer w-370px"
                  @click="onShowDialog(noticeItem)"
                >
                  <h4 class="flex justify-between">
                    <MyStatus :status="noticeItem.type" :status-list="typeList" />
                    <span>{{ noticeItem.title }}</span>
                  </h4>
                  <h5 class="flex justify-between w-60 text-gray-500">
                    <span> {{ noticeItem.creator.username }}</span>
                    <span>{{ noticeItem.createTime }}</span>
                  </h5>
                </el-card>
                <el-divider v-if="loading" border-style="dashed">
                  Loading...
                </el-divider>
                <el-divider v-else border-style="dashed">
                  <el-button
                    type="primary"
                    link
                    @click="router.push('/sys-notice/list')"
                  >
                    查看更多
                  </el-button>
                </el-divider>
              </div>
            </el-scrollbar>
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

    <!-- 预览弹窗 -->
    <el-dialog v-model="dialogTableVisible" destroy-on-close width="70%" title="公告预览">
      <el-scrollbar height="400px">
        <h2 class="text-center">
          {{ noticeInfo?.title }}
        </h2>
        <h4 class="text-center">
          <strong>发布者：</strong> <span class="text-blue-400">{{ noticeInfo?.creator.username }}</span>
          <strong class="ml-30px">发布时间：</strong>{{ noticeInfo?.createTime }}
          <strong class="ml-30px">类型：</strong> <MyStatus :status="noticeInfo?.type" :status-list="typeList" />
        </h4>
        <el-divider border-style="dotted">
          正文
        </el-divider>
        <section
          class="flex flex-col justify-center items-center"
          v-html="noticeInfo?.content"
        />
      </el-scrollbar>
    </el-dialog>
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

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin: 10px;
  background: #fff;

  &:hover {
    background: #DBEAFE;
  }
}

.infinite-list .infinite-list-item+.list-item {
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
