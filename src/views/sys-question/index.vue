<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  type VxeGridInstance,
  type VxeGridPropTypes,
  type VxeGridProps,
} from 'vxe-table'

import { getQuestionTableApi } from '@/api/question/index'
import type { GetQuestionTableResponseData, IApiQuestionInfoData, IGetQuestionTableRequestData } from '@/api/question/types/question'

defineOptions({
  name: 'VxeTable',
})

const router = useRouter()
const dialogTableVisible = ref(false)
const typeValue = ref(null)
const typeList = [
  { id: '0', value: '判断题', type: '' },
  { id: '1', value: '选择题', type: 'success' },
]
const questionInfo = ref<IApiQuestionInfoData>()

// TODO: 展示题目预览
const onShowDialog = (row?: IApiQuestionInfoData) => {
  dialogTableVisible.value = true
  questionInfo.value = row
}

// TODO: 编辑题目
const onEditQuestion = (row?: IApiQuestionInfoData) => {
  router.push({
    path: row?.type === 0 ? '/sys-question/edit/trueFalse' : '/sys-question/edit/singleChoice',
    query: {
      id: row?.id,
    },
  })
}

const xGridDom = ref<VxeGridInstance>()

const xGridOpt: VxeGridProps = reactive({
  loading: true,
  border: true,
  autoResize: true,
  showHeaderOverflow: true,
  showOverflow: true,
  keepSource: true,
  columnConfig: {
    resizable: true,
  },
  /** 分页配置项 */
  pagerConfig: {
    align: 'right',
  },
  /** 表单配置项 */
  formConfig: {
    items: [
      {
        field: 'title',
        itemRender: {
          name: '$input',
          props: { placeholder: '请输入题目', clearable: true },
        },
      },
      {
        field: 'tag',
        itemRender: {
          name: '$input',
          props: { placeholder: '请输入相关知识点', clearable: true },
        },
      },
      {
        field: 'type',
        slots: { default: 'type_item' },
      },
      {
        itemRender: {
          name: '$buttons',
          children: [
            {
              props: { type: 'submit', content: '查询', status: 'primary' },
            },
            {
              props: { type: 'reset', content: '重置' },
            },
          ],
        },
      },
    ],
  },

  /** 自定义列配置项 */
  customConfig: {
    /** 是否允许列选中  */
    checkMethod: ({ column }) => !['username'].includes(column.field),
  },
  exportConfig: {
    modes: ['current', 'selected', 'all'],
  },
  /** 列配置 */
  columns: [

    {
      type: 'seq',
      width: '50px',
      title: '序号',
    },
    {
      field: 'title',
      title: '题目',
      width: '370px',
    },
    {
      field: 'score',
      title: '分数',
    },
    {
      field: 'tag',
      title: '知识点',
    },
    {
      field: 'createTime',
      title: '创建时间',
    },
    {
      field: 'type',
      width: '80px',
      title: '题型',
      slots: { default: 'row-type' },
    },
    {
      title: '操作',
      width: '200px',
      fixed: 'right',
      showOverflow: false,
      slots: { default: 'row-operate' },
    },
  ],
  /** 数据代理配置项（基于 Promise API） */
  proxyConfig: {
    seq: true,
    form: true,
    props: {
      total: 'total',
    },
    ajax: {
      query: ({ page, form }: VxeGridPropTypes.ProxyAjaxQueryParams) => {
        xGridOpt.loading = true
        return new Promise<any>((resolve: Function) => {
          let total = 0
          let result: IApiQuestionInfoData[] = []
          /** 加载数据 */
          const callback = (res: GetQuestionTableResponseData) => {
            if (res && res.data) {
              const resData = res.data
              // 总数
              if (Number.isInteger(resData.total))
                total = resData.total
              // 分页数据
              if (Array.isArray(resData.records))
                result = resData.records
            }
            xGridOpt.loading = false
            resolve({ total, result })
          }

          /** 接口需要的参数 */
          const params: IGetQuestionTableRequestData = {
            title: form.title || '',
            type: typeValue.value || '',
            tag: form.tag || '',
            size: page.pageSize,
            current: page.currentPage,
          }
          /** 调用接口 */
          getQuestionTableApi(params).then(callback).catch(callback)
        })
      },
    },
  },
})
</script>

<template>
  <div class="app-container">
    <!-- 表格 -->
    <vxe-grid ref="xGridDom" v-bind="xGridOpt">
      <!-- 状态选择 -->
      <template #type_item>
        <el-select v-model="typeValue" clearable placeholder="请选择题型">
          <el-option
            v-for="item in typeList"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          />
        </el-select>
      </template>

      <template #row-type="{ row }">
        <MyStatus :status="parseInt(row.type)" :status-list="typeList" />
      </template>

      <!-- 操作 -->
      <template #row-operate="{ row }">
        <el-button link type="primary" @click="onShowDialog(row)">
          <span class="i-carbon-task-view mr-1" />  预览题目
        </el-button>
        <el-button link type="danger" @click="onEditQuestion(row)">
          <span class="i-ph-pencil-line-light mr-1" />  编辑题目
        </el-button>
      </template>
    </vxe-grid>

    <!-- 试题详情对话框 -->
    <el-dialog v-model="dialogTableVisible" destroy-on-close width="370px" title="题目预览">
      <h3><strong>题目：</strong> {{ questionInfo?.title }}</h3>
      <p v-for="questionItem in questionInfo?.sysQuestionItemList" :key="questionItem.id" class="m-0">
        <el-radio :label="questionItem.id" size="large">
          {{ questionItem.content }}
        </el-radio>
      </p>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>
