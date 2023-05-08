<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import Editor from '@tinymce/tinymce-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRoute } from 'vue-router'
import { useDateFormat } from '@vueuse/core'
import { checkPermission } from '@/utils/permission'
import type { IApiNoticeInfoData } from '@/api/notice/types/notice'
import { addNoticeApi, editNoticeApi, getNoticeInfoApi } from '@/api/notice/index'
import { uploadImgApi } from '@/api/upload/index'
import { useUserStore } from '@/store/modules/user'
import { blob2Base64 } from '@/utils/utils'

// TODO: 图片上传
const image_upload_handler = (blobInfo: any) => new Promise((resolve, reject) => {
  const file_type = blobInfo.blob().type
  const isAccept = file_type === 'image/jpeg' || file_type === 'image/png' || file_type === 'image/GIF' || file_type === 'image/jpg' || file_type === 'image/BMP'
  if (blobInfo.blob().size / 1024 / 1024 > 5) {
    ElMessage.warning('上传失败，图片大小请控制在 5M 以内')
  }
  else if (!isAccept) {
    ElMessage.warning('图片格式错误')
  }
  else {
    blob2Base64(blobInfo.blob()).then((res) => {
      uploadImgApi([res]).then((result: any) => {
        resolve(result.data[0])
      }).catch((e) => {
        reject(e)
      })
    })
  }
})

const router = useRoute()
const noticeFormRef = ref<FormInstance>()
const formSize = ref('default')
const loading = ref<boolean>(false)
const dialogTableVisible = ref(false)
const userUser = useUserStore()
const typeList = [
  { id: 0, value: '安全公告', type: '' },
  { id: 1, value: '学习公告', type: 'success' },
  { id: 2, value: '考试公告', type: 'danger' },
]
const init = ref({
  plugins: 'lists link image table code help wordcount a11ychecker',
  language_url: 'tinymce/langs/zh-Hans.js',
  language: 'zh-Hans',
  toolbar: 'undo redo | styleselect | bold italic | link image a11ycheck | formatselect |  alignleft aligncenter alignright | bullist numlist outdent indent | help',
  branding: false,
  elementpath: false,
  automatic_uploads: true,
  images_reuse_filename: true,
  plugin_preview_width: 375,
  paste_data_images: true,
  images_upload_handler: image_upload_handler,
  placeholder: '请输入公告内容',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',

})
const rules = reactive<FormRules>({
  title: [
    { required: true, message: '请输入公告信息', trigger: 'blur' },
    { min: 3, max: 50, message: '字数在3-50内', trigger: 'blur' },
  ],
  content: [{ required: true, message: '请输入公告内容', trigger: 'blur' }],
  type: [
    {
      required: true,
      message: '请选择公告类型',
      trigger: 'change',
    },
  ],
})
const noticeForm = reactive<IApiNoticeInfoData>({
  id: '',
  title: '',
  creatorId: userUser.userInfo?.id,
  deptId: '',
  teamId: '',
  type: 0,
  content: '',
})

// TODO: 初始化表单
const initFormData = () => {
  if (router.query.id !== undefined)
    getNoticeInfoApi(router.query.id as string).then((res: any) => Object.assign(noticeForm, res.data))
}

// TODO: 提交表单
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid) => {
    loading.value = true
    if (valid) {
      if (router.query.id !== undefined) {
        editNoticeApi(noticeForm)
          .then((res: any) => ElMessage.success(res.msg))
          .catch((err: any) => ElMessage.error(err.msg))
          .finally(() => {
            loading.value = false
            initFormData()
          })
      }
      else {
        addNoticeApi(noticeForm)
          .then((res: any) => ElMessage.success(res.msg))
          .catch((err: any) => ElMessage.error(err.msg))
          .finally(() => {
            loading.value = false
            noticeFormRef.value!.resetFields()
          })
      }
    }
    else { ElMessage.error('提交失败，请把数据补充完整') }
    loading.value = false
  })
}

// TODO: 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.resetFields()
}

// TODO: 初始化
onMounted(() => {
  initFormData()
})
</script>

<template>
  <div class="app-container">
    <el-card v-loading="loading">
      <el-form
        ref="noticeFormRef"
        label-position="left"
        :model="noticeForm"
        :rules="rules"
        label-width="130px"
        class="demo-noticeForm"
        :size="formSize"
        status-icon
      >
        <el-form-item label="公告标题" prop="title">
          <el-input v-model="noticeForm!.title" />
        </el-form-item>

        <el-form-item label="公告内容" prop="content">
          <div class="w-1920px">
            <Editor
              v-model="noticeForm!.content"
              api-key="u7329yvue4st3dqwrb26xf5pcbw9oma45cp1p9lzev0b4oal"
              :init="init"
            />
          </div>
        </el-form-item>

        <el-form-item v-if="checkPermission(['admin', 'pm', 'safety'])" label="接收部门">
          <el-input v-model="noticeForm!.deptId" />
        </el-form-item>

        <el-form-item v-if="checkPermission(['admin', 'pm', 'leader', 'safety'])" label="接收小组">
          <el-input v-model="noticeForm!.teamId" />
        </el-form-item>

        <el-form-item label="公告类型" prop="type">
          <el-select v-model="noticeForm!.type" clearable placeholder="请选择公告类型">
            <el-option
              v-for="item in typeList"
              :key="item.id"
              :label="item.value"
              :value="item.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(noticeFormRef)">
            提交
          </el-button>
          <el-button @click="resetForm(noticeFormRef)">
            重置
          </el-button>
          <el-button type="success" @click="dialogTableVisible = true">
            预览
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 预览弹窗 -->
    <el-dialog v-model="dialogTableVisible" destroy-on-close width="70%" title="公告预览">
      <el-scrollbar height="400px">
        <h2 class="text-center">
          {{ noticeForm?.title }}
        </h2>
        <h4 class="text-center">
          <strong>发布者：</strong> <span class="text-blue-400">{{ userUser.userInfo?.username }}</span>
          <strong class="ml-30px">发布时间：</strong>{{ useDateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').value }}
          <strong class="ml-30px">类型：</strong> <MyStatus :status="noticeForm.type" :status-list="typeList" />
        </h4>
        <el-divider border-style="dotted">
          正文
        </el-divider>
        <section
          class="flex flex-col justify-center items-center"
          v-html="noticeForm?.content"
        />
      </el-scrollbar>
    </el-dialog>
  </div>
</template>

<style scoped>

</style>
