<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { useDateFormat } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { getUuid, uniqueFun } from '@/utils/utils'
import { getQuestionTableApi } from '@/api/question/index'
import type { IGetQuestionTableRequestData } from '@/api/question/types/question'
import type { IApiExamInfoData, QuestionInfoData } from '@/api/exam/types/exam'
import { addExamApi, editExamApi, getExamInfoApi } from '@/api/exam/index'
import { useUserStore } from '@/store/modules/user'

const router = useRoute()
const user = useUserStore()
const formSize = ref('default')
const examFormRef = ref<FormInstance>()
const dialogTableVisible = ref<boolean>(false)
const questionDialogTableVisible = ref<boolean>(false)
const loading = ref<boolean>(false)
const isFinish = ref<boolean>(false)
const questionInfo = ref<QuestionInfoData>()
const uuid = getUuid()
const createTime = useDateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').value
const disabled = computed(() => loading.value || isFinish.value)

const questionList = ref<QuestionInfoData[]>(
  [],
)
const examForm = reactive<IApiExamInfoData>({
  id: uuid,
  startTime: '',
  endTime: '',
  duration: 2,
  title: '',
  creator: user.userInfo?.username || '',
  status: 0,
  createTime,
  des: '',
  questions: [],
})
const getQuParams = reactive <IGetQuestionTableRequestData >({
  title: '',
  size: 2,
  current: 0,
})

const rules = reactive<FormRules>({
  title: [
    { required: true, message: '请输入试卷名称', trigger: 'blur' },
    { min: 2, max: 30, message: '字数在2-30内', trigger: 'blur' },
  ],
  questions: [
    {
      type: 'array',
      required: true,
      message: '请添加相关题目',
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
  des: [
    { required: true, message: '给出试卷描述', trigger: 'blur' },
  ],
  createTime: [
    {
      message: '请选择开始时间',
      trigger: 'change',
    },
  ],
  endTime: [
    {
      message: '请选择结束时间',
      trigger: 'change',
    },
  ],
  duration: [
    { required: true, message: '给出题目分数', trigger: 'blur' },
  ],
})

// TODO: 移除某个元素
const remove = (index: number, list: any[]) => {
  list.splice(index, 1)
}

// TODO: 获取题目列表
const getQuestionList = () => {
  loading.value = true
  getQuestionTableApi(getQuParams).then((res) => {
    const arr3 = [...questionList.value, ...res.data.records]
    questionList.value = [...uniqueFun(arr3)]
    loading.value = false
    getQuParams.current++
    if (res.data.total <= questionList.value.length)
      isFinish.value = true
  })
}

// TODO: 初始化表单
const initFormData = () => {
  if (router.query.id !== undefined)
    getExamInfoApi(router.query.id as string).then((res: any) => Object.assign(examForm, res.data))
}

// TODO: 提交表单
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid) => {
    loading.value = true
    if (valid) {
      if (router.query.id !== undefined) {
        editExamApi(examForm)
          .then((res: any) => ElMessage.success(res.msg))
          .catch((err: any) => ElMessage.error(err.msg))
          .finally(() => {
            loading.value = false
            examFormRef.value!.resetFields()
          })
      }
      else {
        addExamApi(examForm)
          .then((res: any) => ElMessage.success(res.msg))
          .catch((err: any) => ElMessage.error(err.msg))
          .finally(() => {
            loading.value = false
            examFormRef.value!.resetFields()
          })
      }
    }
    else { ElMessage.error('提交失败，请把数据补充完整') }
    loading.value = false
  })
}

// TODO: 预览题目
const onPreview = (question: QuestionInfoData) => {
  questionDialogTableVisible.value = true
  questionInfo.value = question
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
  getQuestionList()
})

// TODO: 下拉刷新数据
const load = () => {
  getQuestionList()
}

const searchQuestion = () => {
  loading.value = true
  getQuParams.size = 20
  getQuParams.current = 0

  getQuestionTableApi(getQuParams).then((res) => {
    const arr3 = [...res.data.records]
    questionList.value = [...uniqueFun(arr3)]
    loading.value = false
    if (res.data.total <= questionList.value.length)
      isFinish.value = true
  })
}
</script>

<template>
  <div class="app-container ">
    <el-card shadow="never">
      <el-container>
        <el-aside width="60%">
          <el-form
            ref="examFormRef"
            :model="examForm"
            :rules="rules"
            class="mt-4 pr-10"
            :size="formSize"
            status-icon
          >
            <el-form-item label="试卷名称" prop="title">
              <el-input v-model="examForm!.title" minlength="2" maxlength="30" show-word-limit />
            </el-form-item>

            <el-form-item label="试卷题目" prop="questions">
              <VueDraggable
                v-model="examForm!.questions"
                class="flex flex-col gap-2 p-4 w-400px h-500px m-auto mb-20px bg-gray-500/5 rounded overflow-auto"
                animation="150"
                ghost-class="ghost"
                group="question"
              >
                <el-empty v-if="examForm!.questions.length === 0" class="m-auto" description="暂时还没有题目哦！请将右边的题目拖到这里来试试！" />
                <div
                  v-for="(item, index) in examForm!.questions"
                  :key="item.id"
                  class="cursor-move h-87px bg-blue-100 rounded p-3 "
                >
                  <h3 class="m-0 truncate">
                    {{ item.title }}
                  </h3>
                  <p class="m-0">
                    <el-button link type="danger" @click="remove(index, examForm!.questions)">
                      删除
                    </el-button>
                    <el-button link type="primary" @click="onPreview(item)">
                      预览
                    </el-button>
                  </p>
                </div>
              </VueDraggable>
            </el-form-item>
            <el-form-item label="试卷描述" prop="des">
              <el-input
                v-model="examForm!.des" :rows="3"
                type="textarea"
                maxlength="200"
                show-word-limit
              />
            </el-form-item>

            <el-form-item label="建议时长" prop="duration">
              <el-input-number v-model="examForm!.duration" :precision="2" :step="0.1" :max="24" :min="0" /> 小时
            </el-form-item>

            <el-form-item label="考试时间" required>
              <el-col :span="11">
                <el-date-picker
                  v-model="examForm!.startTime"
                  type="date"
                  placeholder="开始时间"
                  value-format="YYYY-MM-DD HH:mm:ss"
                  format="YYYY-MM-DD HH:mm:ss"
                  style="width: 100%"
                />
              </el-col>
              <el-col :span="1" class="text-center">
                <span class="text-gray-500">-</span>
              </el-col>
              <el-col :span="11">
                <el-date-picker
                  v-model="examForm!.endTime"
                  type="date"
                  placeholder="结束时间"
                  value-format="YYYY-MM-DD HH:mm:ss"
                  format="YYYY-MM-DD HH:mm:ss"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(examFormRef)">
                提交
              </el-button>
              <el-button @click="resetForm(examFormRef)">
                重置
              </el-button>
              <el-button type="success" @click="dialogTableVisible = true">
                预览
              </el-button>
            </el-form-item>
          </el-form>
        </el-aside>
        <el-aside>
          <p class="flex flex-row">
            <el-input v-model="getQuParams.title" placeholder="请输入要查询的题目" style="width: 260px;" clearable />
            <el-button type="primary" class="ml-2" @click="searchQuestion()">
              查询
            </el-button>
          </p>

          <VueDraggable
            v-model="questionList"
            v-infinite-scroll="load"
            :infinite-scroll-disabled="disabled"
            class="flex flex-col gap-2 p-4 w-300px h-500px m-auto bg-gray-500/5 rounded overflow-auto"
            animation="150"
            group="question"
            ghost-class="ghost"
          >
            <div
              v-for="(item, index) in questionList"
              :key="item.id"
              class="cursor-move h-73px bg-blue-100 rounded p-3 "
            >
              <h4 class="m-0 truncate">
                {{ item.title }}
              </h4>
              <p>
                <el-button link size="small" type="danger" @click="remove(index, questionList)">
                  删除
                </el-button>
                <el-button link size="small" type="primary" @click="onPreview(item)">
                  预览
                </el-button>
              </p>
            </div>
            <el-divider v-if="loading" border-style="dashed">
              Loading...
            </el-divider>
            <el-divider v-if="isFinish" border-style="dashed">
              加载完毕
            </el-divider>
          </VueDraggable>
        </el-aside>
      </el-container>
    </el-card>

    <!-- 预览弹窗 -->
    <el-dialog v-model="dialogTableVisible" destroy-on-close width="70%" title="试卷预览">
      <el-scrollbar height="400px">
        <h1 class="text-center">
          {{ examForm?.title }}
        </h1>
        <h3 class="text-center">
          <strong>注意事项：</strong>  {{ examForm?.des }}
        </h3>
        <h3 class="text-center">
          <strong>开始时间：</strong>  {{ examForm?.startTime }}
          <strong>结束时间：</strong>  {{ examForm?.endTime }}
        </h3>
        <h4 v-for="(question, index) in examForm?.questions" :key="question.id" class="m-0">
          <h3><strong>题目{{ index + 1 }}：</strong> {{ question?.title }}</h3>
          <p v-for="questionItem in question.sysQuestionItemList" :key="questionItem.id" class="m-0">
            <el-radio :label="questionItem.id" size="large">
              {{ questionItem.content }}
            </el-radio>
          </p>
        </h4>
      </el-scrollbar>
    </el-dialog>

    <!-- 试题详情对话框 -->
    <el-dialog v-model="questionDialogTableVisible" destroy-on-close width="370px" title="题目预览">
      <h3><strong>题目：</strong> {{ questionInfo?.title }}</h3>
      <p v-for="questionItem in questionInfo?.sysQuestionItemList" :key="questionItem.id" class="m-0">
        <el-radio :label="questionItem.id" size="large">
          {{ questionItem.content }}
        </el-radio>
      </p>
    </el-dialog>
  </div>
</template>

<style>
.infinite-list-wrapper {
  height: 100%;
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
</style>
