<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { ElMessage, genFileId } from 'element-plus'
import type { FormInstance, FormRules, UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import { useRoute } from 'vue-router'
import type { IApiStudyInfoData } from '@/api/study/types/study'
import { useUserStore } from '@/store/modules/user'
import { addStudyApi, editStudyApi, getStudyInfoApi } from '@/api/study/index'
import { client, options, random_name } from '@/utils/oss'

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
const file = ref<any>([])
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

// TODO: 上传封面
const multipartUploadCover = (file: any) => {
  const list: any = []
  const fileName = `/laboradmin/${random_name}.${file.name.split('.')[1]}`
  if (beforeUploadCover(file.raw)) {
    // 请求oss接口上传
    client
      .multipartUpload(fileName, file.raw,
        {
          progress(percentage: number) { // 获取进度条的值
            uploadPercentageCover.value = Math.floor(percentage * 100)
          },
        },
        { ...options },
      )
      .then((response: any) => {
        if (response.res.statusCode === 200) {
          list.push({
            fileUrl: response.res.requestUrls[0].split('?')[0],
          })
          studyDataForm.coverUrl = response.res.requestUrls[0].split('?')[0]
          uploadStatusCover.value = '上传完成'
          uploadingCover.value = false
          uploadPercentageCover.value = 100
        }
      })
      .catch((error: any) => {
        ElMessage.error(error.message) // 错误返回
        studyDataForm.coverUrl = ''
        uploadStatusCover.value = '上传失败'
        uploadingCover.value = false
      })
  }
}

// TODO: 上传封面修改回调
const handleChangeCover: UploadProps['onChange'] = (uploadFile) => {
  multipartUploadCover(uploadFile)
}

// TODO: 封面上传处理替换处理上传
const handleExceedCover: UploadProps['onExceed'] = (files) => {
  uploadCover.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  uploadCover.value!.handleStart(file)
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

// TODO: 文件上传
const multipartUpload = (file: any) => {
  const list: any = []
  const fileName = `/laboradmin/${random_name}.${file.name.split('.')[1]}`
  if (beforeUpload(file.raw)) {
    // 请求oss接口上传
    client
      .multipartUpload(fileName, file.raw,
        {
          progress(percentage: number) { // 获取进度条的值
            uploadPercentage.value = Math.floor(percentage * 100)
          },
        },
        { ...options },
      )
      .then((response: any) => {
        if (response.res.statusCode === 200) {
          list.push({
            fileUrl: response.res.requestUrls[0].split('?')[0],
          })
          studyDataForm.fileUrl = response.res.requestUrls[0].split('?')[0]
          uploadStatus.value = '上传完成'
          uploading.value = false
          uploadPercentage.value = 100
        }
      })
      .catch((error: any) => {
        ElMessage.error(error.message) // 错误返回
        studyDataForm.fileUrl = ''
        uploadStatus.value = '上传失败'
        uploading.value = false
      })
  }
}

// TODO: 处理上传
const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

// TODO: 变化回调
const handleChange: UploadProps['onChange'] = (uploadFile) => {
  multipartUpload(uploadFile)
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
            action
            multiple
            :auto-upload="false"
            accept=".jpg,.jpeg,.png,JPG,.PNG"
            :data="formDataCover"
            :show-file-list="false"
            :on-exceed="handleExceedCover"
            :on-change="handleChangeCover"
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
            action
            accept=".jpg,.jpeg,.png,JPG,.PNG,.pdf,.mp4"
            :data="formData"
            multiple
            :show-file-list="false"
            :on-exceed="handleExceed"
            :on-change="handleChange"
            :limit="1"
            :auto-upload="false"
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
                v-if="studyDataForm.type === 2 && studyDataForm.fileUrl" class="w-226px h-173px" :src="studyDataForm.fileUrl" lazy :preview-src-list="[`${studyDataForm.fileUrl}`]"
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
