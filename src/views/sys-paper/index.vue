<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox, type ElMessageBoxOptions } from 'element-plus'
import {
  type VxeGridInstance,
  type VxeGridPropTypes,
  type VxeGridProps,
} from 'vxe-table'

import { deleteExamInfoApi, getExamTableApi } from '@/api/exam/index'
import type { GetExamResponseData, IApiExamInfoData, IGetExamTableRequestData } from '@/api/exam/types/exam'

defineOptions({
  name: 'VxeTable',
})

const router = useRouter()
const dialogTableVisible = ref(false)
const typeValue = ref(null)
const typeList = [
  { id: '0', value: '未开始', type: '' },
  { id: '1', value: '正在进行', type: 'success' },
  { id: '2', value: '已过期', type: 'info' },
]
const examInfo = ref<IApiExamInfoData>()

// TODO: 展示试卷预览
const onShowDialog = (row?: IApiExamInfoData) => {
  dialogTableVisible.value = true
  examInfo.value = row
}

// TODO: 编辑试卷
const onEditExam = (row?: IApiExamInfoData) => {
  router.push({
    path: '/sys-exam/edit',
    query: {
      id: row?.id,
    },
  })
}

const onDelExam = (row: IApiExamInfoData) => {
  const tip = `确定 <strong style='color:red;'>删除</strong> 试卷 <strong style='color:#409eff;'>${row.title}</strong> ？`
  const config: ElMessageBoxOptions = {
    type: 'error',
    showClose: true,
    closeOnClickModal: true,
    closeOnPressEscape: true,
    cancelButtonText: '取消',
    confirmButtonText: '确定',
    dangerouslyUseHTMLString: true,
  }
  ElMessageBox.confirm(tip, '提示', config)
    .then(() => {
      deleteExamInfoApi(row.id)
        .then(() => {
          ElMessage.success('删除成功')
          afterDelete()
        })
        .catch(() => 1)
    })
    .catch(() => 1)
}

/** 删除后是否返回上一页 */
const afterDelete = () => {
  const tableData: IApiExamInfoData[] = xGridDom.value!.getData()
  const pager: VxeGridPropTypes.ProxyAjaxQueryPageParams = xGridDom.value?.getProxyInfo()?.pager
  if (pager && pager.currentPage > 1 && tableData.length === 1)
    --pager.currentPage
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
          props: { placeholder: '请输入试卷标题', clearable: true },
        },
      },
      {
        field: 'creator',
        itemRender: {
          name: '$input',
          props: { placeholder: '请输入相关组卷人', clearable: true },
        },
      },
      {
        field: 'status',
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
      title: '试卷名称',
      width: '370px',
    },
    {
      field: 'duration',
      title: '考试时长（h）',
    },
    {
      field: 'creator',
      title: '组卷人',
    },
    {
      field: 'createTime',
      title: '创建时间',
    },
    {
      width: '80px',
      title: '状态',
      slots: { default: 'row-type' },
    },
    {
      title: '操作',
      width: '210px',
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
          let result: IApiExamInfoData[] = []
          /** 加载数据 */
          const callback = (res: GetExamResponseData) => {
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
          const params: IGetExamTableRequestData = {
            title: form.title || '',
            status: typeValue.value || '',
            creator: form.creator || '',
            size: page.pageSize,
            current: page.currentPage,
          }
          /** 调用接口 */
          getExamTableApi(params).then(callback).catch(callback)
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
        <el-select v-model="typeValue" clearable placeholder="请选择试卷状态">
          <el-option
            v-for="item in typeList"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          />
        </el-select>
      </template>

      <template #row-type="{ row }">
        <MyStatus :status="parseInt(row.status || '0')" :status-list="typeList" />
      </template>

      <!-- 操作 -->
      <template #row-operate="{ row }">
        <el-button link type="primary" @click="onShowDialog(row)">
          <span class="i-carbon-task-view mr-1" />  预览
        </el-button>
        <el-button link type="warning" @click="onEditExam(row)">
          <span class="i-ph-pencil-line-light mr-1" />  编辑
        </el-button>
        <el-button link type="danger" @click="onDelExam(row)">
          <span class="i-material-symbols-delete-outline-rounded" />  删除
        </el-button>
      </template>
    </vxe-grid>
  </div>
</template>

<style lang="scss" scoped>

</style>
