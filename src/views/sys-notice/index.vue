<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox, type ElMessageBoxOptions } from 'element-plus'
import {
  type VxeGridInstance,
  type VxeGridPropTypes,
  type VxeGridProps,
} from 'vxe-table'

import { deleteNoticeInfoApi, getNoticeTableApi } from '@/api/notice/index'
import type { GetNoticeTableResponseData, IApiNoticeInfoData, IGetNoticeTableRequestData } from '@/api/notice/types/notice'

defineOptions({
  name: 'VxeTable',
})

const router = useRouter()
const dialogTableVisible = ref(false)
const typeValue = ref(null)
const typeList = [
  { id: '0', value: '安全公告', type: '' },
  { id: '1', value: '学习公告', type: 'success' },
  { id: '2', value: '考试公告', type: 'danger' },
]
const noticeInfo = ref<IApiNoticeInfoData>()

// TODO: 展示公告预览
const onShowDialog = (row?: IApiNoticeInfoData) => {
  dialogTableVisible.value = true
  noticeInfo.value = row
}

// TODO: 编辑公告
const onEditNotice = (row?: IApiNoticeInfoData) => {
  router.push({
    path: '/sys-notice/edit',
    query: {
      id: row?.id,
    },
  })
}

const onDelNotice = (row: IApiNoticeInfoData) => {
  const tip = `确定 <strong style='color:red;'>删除</strong> 公告 <strong style='color:#409eff;'>${row.title}</strong> ？`
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
      deleteNoticeInfoApi(row.id)
        .then(() => {
          ElMessage.success('删除成功')
          router.go(0)
        })
        .catch(() => 1)
    })
    .catch(() => 1)
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
          props: { placeholder: '请输入公告标题', clearable: true },
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
      title: '公告标题',
      width: '370px',
    },
    {
      field: 'creator.username',
      title: '发布者',
    },
    {
      field: 'createTime',
      title: '创建时间',
    },
    {
      field: 'updateTime',
      title: '最后更新时间',
    },
    {
      width: '80px',
      title: '公告类型',
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
          let result: IApiNoticeInfoData[] = []
          /** 加载数据 */
          const callback = (res: GetNoticeTableResponseData) => {
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
          const params: IGetNoticeTableRequestData = {
            title: form.title || '',
            type: typeValue.value || '',
            size: page.pageSize,
            current: page.currentPage,
          }
          /** 调用接口 */
          getNoticeTableApi(params).then(callback).catch(callback)
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
        <el-select v-model="typeValue" clearable placeholder="请选择公告类型">
          <el-option
            v-for="item in typeList"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          />
        </el-select>
      </template>

      <template #row-type="{ row }">
        <MyStatus :status="row.type" :status-list="typeList" />
      </template>

      <!-- 操作 -->
      <template #row-operate="{ row }">
        <el-button link type="primary" @click="onShowDialog(row)">
          <span class="i-carbon-task-view mr-1" />  预览
        </el-button>
        <el-button link type="warning" @click="onEditNotice(row)">
          <span class="i-ph-pencil-line-light mr-1" />  编辑
        </el-button>
        <el-button link type="danger" @click="onDelNotice(row)">
          <span class="i-material-symbols-delete-outline-rounded" />  删除
        </el-button>
      </template>
    </vxe-grid>

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

</style>
