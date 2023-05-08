<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { ElMessage, genFileId } from 'element-plus'
import type { FormInstance, FormRules, UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import { useRoute } from 'vue-router'
import { getToken } from '@/utils/cache/cookies'
import type { IApiStudyInfoData } from '@/api/study/types/study'
import { useUserStore } from '@/store/modules/user'
import { addStudyApi, editStudyApi, getStudyInfoApi } from '@/api/study/index'

const router = useRoute()
const useUser = useUserStore()
const upload = ref<UploadInstance>()
const uploadCover = ref<UploadInstance>()
const formSize = ref('default')
const uploading = ref(false)
const uploadingCover = ref(false)
const uploadStatus = ref('')
const uploadStatusCover = ref('')
const studyDataFormRef = ref<FormInstance>()
const uploadPercentage = ref<number>(0)
const uploadPercentageCover = ref<number>(0)
const uploadTask = ref<UploadRawFile>()
const uploadTaskCover = ref<UploadRawFile>()
const formData = reactive<any>({
  fileName: '',
  type: '',
  size: 0,
  url: '',
})
const formDataCover = reactive<any>({
  fileName: '',
  type: '',
  size: 0,
  url: '',
})
const studyDataForm = reactive<IApiStudyInfoData>({
  id: '',
  creatorId: useUser.userInfo?.id || '',
  title: '',
  content: '',
  type: 0,
  fileUrl: '',
  coverUrl: '',
  createTime: '',
  updateTime: '',
})

const rules = reactive<FormRules>({
  title: [
    { required: true, message: '请输入题干信息', trigger: 'blur' },
    { min: 3, max: 50, message: '字数在3-50内', trigger: 'blur' },
  ],
  content: [
    { required: true, message: '请输入资料描述', trigger: 'blur' },
    { min: 3, max: 100, message: '字数在3-50内', trigger: 'blur' },
  ],
  coverUrl: [
    {
      required: true,
      message: '请上传封面',
      trigger: 'change',
    },
  ],
  fileUrl: [
    {
      required: true,
      message: '上传资料',
      trigger: 'change',
    },
  ],
})

// TODO: 初始化表单
const initFormData = () => {
  if (router.query.id !== undefined)
    getStudyInfoApi(router.query.id as string).then((res: any) => Object.assign(studyDataForm, res.data))
}

// TODO: 上传前回调
const beforeUploadCover = (file: UploadRawFile) => {
  if (uploading.value) {
    ElMessage.warning('当前有文件正在上传，请稍后再试')
    return false
  }

  uploadingCover.value = true
  uploadPercentageCover.value = 0
  uploadStatusCover.value = '正在上传...'
  uploadTaskCover.value = file

  formDataCover.fileName = file.name
  formDataCover.type = file.type
  formDataCover.size = file.size

  return true
}

// TODO: 封面上传处理成功回调
const handleSuccessCover: UploadProps['onSuccess'] = (res) => {
  studyDataForm.coverUrl = res.data
  uploadStatusCover.value = '上传完成'
  uploadingCover.value = false
  uploadPercentageCover.value = 100
}

// TODO: 封面上传处理失败回调
const handleErrorCover: UploadProps['onError'] = (error) => {
  studyDataForm.coverUrl = ''
  uploadStatusCover.value = '上传失败'
  uploadingCover.value = false
  console.error(error)
}

// TODO: 封面上传处理上传
const handleExceedCover: UploadProps['onExceed'] = (files) => {
  uploadCover.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  uploadCover.value!.submit()
}

// TODO: 封面上传进度处理
const onUploadProgressCover: UploadProps['onProgress'] = (event) => {
  uploadPercentageCover.value = Math.floor((event.loaded / event.total) * 100)
}

// TODO: 上传前回调
const beforeUpload = (file: UploadRawFile) => {
  if (uploading.value) {
    ElMessage.warning('当前有文件正在上传，请稍后再试')
    return false
  }
  const isPDF = file.type === 'application/pdf'
  const isVideo = file.type.includes('video/')
  const isImage = file.type.includes('image/')
  const isLt30M = file.size / 1024 / 1024 < 30

  if (isPDF) {
    formData.type = 0
  }
  else if (isVideo) {
    formData.type = 1
  }
  else if (isImage) {
    formData.type = 2
  }
  else {
    ElMessage.error('只能上传PDF、视频和图片文件')
    return false
  }

  if (isVideo && !isLt30M) {
    ElMessage.error('上传视频文件不能超过30MB')
    return false
  }

  uploading.value = true
  uploadPercentage.value = 0
  uploadStatus.value = '正在上传...'
  uploadTask.value = file

  formData.fileName = file.name
  formData.size = file.size
  studyDataForm.type = formData.type

  return true
}

// TODO: 处理成功回调
const handleSuccess: UploadProps['onSuccess'] = (res) => {
  studyDataForm.fileUrl = res.data
  uploadStatus.value = '上传完成'
  uploading.value = false
  uploadPercentage.value = 100
}

// TODO: 处理失败回调
const handleError: UploadProps['onError'] = (error) => {
  studyDataForm.fileUrl = ''
  uploadStatus.value = '上传失败'
  uploading.value = false
  console.error(error)
}

// TODO: 处理上传
const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.submit()
}

// TODO: 进度处理
const onUploadProgress: UploadProps['onProgress'] = (event) => {
  uploadPercentage.value = Math.floor((event.loaded / event.total) * 100)
}

// TODO: 提交表单
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid) => {
    if (valid) {
      if (router.query.id !== undefined) {
        editStudyApi(studyDataForm)
          .then((res: any) => ElMessage.success(res.msg))
          .catch((err: any) => ElMessage.error(err.msg))
          .finally(() => {
            initFormData()
          })
      }
      else {
        addStudyApi(studyDataForm)
          .then((res: any) => ElMessage.success(res.msg))
          .catch((err: any) => ElMessage.error(err.msg))
          .finally(() => {
            studyDataFormRef.value!.resetFields()
          })
      }
    }
    else { ElMessage.error('提交失败，请把数据补充完整') }
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
    <el-card>
      <el-form
        ref="studyDataFormRef"
        :model="studyDataForm"
        :rules="rules"
        label-width="130px"
        class="demo-studyDataForm"
        :size="formSize"
        status-icon
      >
        <el-form-item label="资料名称" prop="title">
          <el-input v-model="studyDataForm!.title" show-word-limit maxlength="50" minlength="3" />
        </el-form-item>
        <el-form-item label="资料描述" prop="content">
          <el-input v-model="studyDataForm!.content" show-word-limit maxlength="100" minlength="3" />
        </el-form-item>
        <el-form-item label="封面" class="h-173px" prop="coverUrl">
          <el-upload
            ref="uploadCover"
            class="upload-Cover"
            action="api/v1/sys-upload/file"
            accept=".jpg,.jpeg,.png,JPG,.PNG"
            :data="formDataCover"
            :before-upload="beforeUploadCover"
            :on-success="handleSuccessCover"
            :on-error="handleErrorCover"
            :on-progress="onUploadProgressCover"
            :show-file-list="false"
            :on-exceed="handleExceedCover"
            :headers="{ Authorization: `${getToken()}` }"
          >
            <el-button type="primary">
              {{ uploadingCover ? '上传中...' : '点击上传封面' }}
            </el-button>
            <div v-if="uploadingCover" class="ml-4">
              <div class="upload-progress">
                <el-progress :percentage="uploadPercentageCover" />
              </div>
              <div>{{ uploadStatusCover }}</div>
            </div>
            <div v-else class="ml-10">
              <img v-if="studyDataForm.coverUrl" class="w-226px h-173px" :src="studyDataForm.coverUrl" controls>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="资料" class="h-173px" prop="fileUrl">
          <el-upload
            ref="upload"
            class="upload-demo"
            action="api/v1/sys-upload/file"
            accept=".jpg,.jpeg,.png,JPG,.PNG,.pdf,.mp4"
            :data="formData"
            :before-upload="beforeUpload"
            :on-success="handleSuccess"
            :on-error="handleError"
            :on-progress="onUploadProgress"
            :show-file-list="false"
            :on-exceed="handleExceed"
            :headers="{ Authorization: `${getToken()}` }"
          >
            <el-button type="primary">
              {{ uploading ? '上传中...' : '点击上传材料' }}
            </el-button>
            <div v-if="uploading" class="ml-4">
              <div class="upload-progress">
                <el-progress :percentage="uploadPercentage" />
              </div>
              <div>{{ uploadStatus }}</div>
            </div>
            <div v-else class="ml-4">
              <div v-if="studyDataForm.type === 0 && studyDataForm.fileUrl" class="w-226px h-173px flex flex-col justify-center items-center ">
                pdf文件暂时无法展示，请直接下载
                <a target="_blank" :href="`${studyDataForm.fileUrl}`">
                  <el-button
                    type="primary"
                    link
                  >
                    下载
                  </el-button>
                </a>
              </div>
              <video v-if="studyDataForm.type === 1 && studyDataForm.fileUrl" class="w-226px h-173px" :src="studyDataForm.fileUrl" controls />
              <el-image
                v-if="studyDataForm.type === 2 && studyDataForm.fileUrl" class="w-226px h-173px" :src="studyDataForm.fileUrl" lazy preview-src-list="[studyDataForm.fileUrl]"
                :initial-index="0"
                fit="contain"
              />
            </div>
          </el-upload>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" :disabled="uploading || uploadingCover " @click="submitForm(studyDataFormRef)">
            {{ uploading || uploadingCover ? '上传中...' : '提交' }}
          </el-button>
          <el-button @click="resetForm(studyDataFormRef)">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
