<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { useDateFormat } from '@vueuse/core'
import type { IApiQuestionInfoData } from '@/api/question/types/question'
import { getUuid } from '@/utils/utils'
import { addQuestionApi } from '@/api/question/index'

const formSize = ref('default')
const singleChoiceFormRef = ref<FormInstance>()
const dialogTableVisible = ref<boolean>(false)
const loading = ref<boolean>(false)
const uuid = getUuid()
const createTime = useDateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').value

const singleChoiceForm = reactive<IApiQuestionInfoData>({
  id: uuid,
  title: '您的学校是',
  type: 1,
  score: 10,
  answerId: '',
  sort: 0,
  tag: '测试',
  answerContent: '测试',
  sysQuestionItemList: [
    {
      id: getUuid(),
      content: '武汉大学',
      questionId: uuid,
      sort: '1',
      des: '',
      createTime,
    },
    {
      id: getUuid(),
      content: '武汉理工大学',
      questionId: uuid,
      sort: '2',
      des: '',
      createTime,
    },
    {
      id: getUuid(),
      content: '华中科技大学',
      questionId: uuid,
      sort: '3',
      des: '',
      createTime,
    },
    {
      id: getUuid(),
      content: '华中师范大学',
      questionId: uuid,
      sort: '4',
      des: '',
      createTime,
    },
  ],
})

const rules = reactive<FormRules>({
  title: [
    { required: true, message: '请输入题干信息', trigger: 'blur' },
    { min: 3, max: 50, message: '字数在3-50内', trigger: 'blur' },
  ],
  sysQuestionItemList: [
    {
      type: 'array',
      required: true,
      message: '请添加相关选项',
      trigger: 'change',
    },
  ],
  answerId: [
    {
      required: true,
      message: '请给出标准答案',
      trigger: 'change',
    },
  ],
  answerContent: [
    { required: true, message: '给出题目解析', trigger: 'blur' },
  ],
  tag: [
    { required: true, message: '给出题目知识点', trigger: 'blur' },
  ],
  score: [
    { required: true, message: '给出题目分数', trigger: 'blur' },
  ],
})

// TODO: 提交表单
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid, fields) => {
    loading.value = true
    if (valid) {
      addQuestionApi(singleChoiceForm)
        .then((res: any) => ElMessage.success(res.msg))
        .catch((err: any) => ElMessage.error(err.msg))
        .finally(() => {
          loading.value = false
          singleChoiceFormRef.value!.resetFields()
        })
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

// TODO: 添加题目选项
const addQuestionItem = () => {
  const questionItem = {
    id: getUuid() as string,
    content: '',
    questionId: uuid,
    sort: `${singleChoiceForm.sysQuestionItemList.length + 1}`,
    des: '',
    createTime,
  }
  singleChoiceForm.sysQuestionItemList.push(questionItem)
}

// TODO:移除问题选项
const removeQuestionItem = (id: string) => {
  singleChoiceForm.sysQuestionItemList = singleChoiceForm.sysQuestionItemList.filter(item => item.id !== id)
}
</script>

<template>
  <div>
    <el-card v-loading="loading" class="app-container m-5">
      <el-form
        ref="singleChoiceFormRef"
        :model="singleChoiceForm"
        :rules="rules"
        label-width="130px"
        class="demo-singleChoiceForm"
        :size="formSize"
        status-icon
      >
        <el-form-item label="题干" prop="title">
          <el-input v-model="singleChoiceForm!.title" />
        </el-form-item>
        <el-form-item label="题目选项" prop="sysQuestionItemList">
          <el-radio-group v-model="singleChoiceForm.sysQuestionItemList" class="flex flex-col">
            <li v-for="(questionItem, index) in singleChoiceForm?.sysQuestionItemList" :key="questionItem.id" class="m-0 flex ">
              <el-radio :label="index" size="large" disabled />
              <el-input v-model="questionItem.content" class="w-100 m-2" size="small" />
              <el-button type="danger" class="ml-3 mt-2" size="small" @click="removeQuestionItem(questionItem.id)">
                删除
              </el-button>
            </li>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="标准答案" prop="answerId">
          <el-radio-group v-model="singleChoiceForm!.answerId">
            <el-radio v-for="questionItem in singleChoiceForm?.sysQuestionItemList" :key="questionItem.id" :label="questionItem.id" size="large">
              {{ questionItem.content }}
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="分数" prop="score">
          <el-input-number v-model="singleChoiceForm!.score" :precision="2" :step="0.1" :max="20" :min="0" />
        </el-form-item>

        <el-form-item label="题目解析" prop="answerContent">
          <el-input
            v-model="singleChoiceForm!.answerContent" :rows="3"
            type="textarea"
          />
        </el-form-item>

        <el-form-item label="知识点" prop="tag">
          <el-input v-model="singleChoiceForm!.tag" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(singleChoiceFormRef)">
            提交
          </el-button>
          <el-button @click="resetForm(singleChoiceFormRef)">
            重置
          </el-button>
          <el-button type="success" @click="addQuestionItem()">
            添加选项
          </el-button>
          <el-button type="success" @click="dialogTableVisible = true">
            预览
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 试题详情对话框 -->
    <el-dialog v-model="dialogTableVisible" destroy-on-close width="370px" title="题目预览">
      <h3><strong>题目：</strong> {{ singleChoiceForm?.title }}</h3>
      <p v-for="questionItem in singleChoiceForm?.sysQuestionItemList" :key="questionItem.id" class="m-0">
        <el-radio :label="questionItem.id" size="large">
          {{ questionItem.content }}
        </el-radio>
      </p>
    </el-dialog>
  </div>
</template>
