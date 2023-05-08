<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox, type ElMessageBoxOptions } from 'element-plus'
import {
  type VxeGridInstance,
  type VxeGridPropTypes,
  type VxeGridProps,
} from 'vxe-table'

import { deleteStudyInfoApi, getStudyTableApi } from '@/api/study/index'
import type { GetStudyTableResponseData, IApiStudyInfoData, IGetStudyTableRequestData } from '@/api/study/types/study'

defineOptions({
  name: 'VxeTable',
})

const router = useRouter()
const dialogTableVisible = ref(false)
const typeValue = ref(null)
const srcList = ref([])
const typeList = [
  { id: '0', value: '文档', type: '' },
  { id: '1', value: '视频', type: 'success' },
  { id: '2', value: '图片', type: 'danger' },
]
const studyInfo = ref<IApiStudyInfoData>()

// TODO: 展示资料预览
const onShowDialog = (row?: IApiStudyInfoData) => {
  dialogTableVisible.value = true
  studyInfo.value = row
}

// TODO: 编辑资料
const onEditStudy = (row?: IApiStudyInfoData) => {
  router.push({
    path: '/sys-study/edit',
    query: {
      id: row?.id,
    },
  })
}

const onDelStudy = (row: IApiStudyInfoData) => {
  const tip = `确定 <strong style='color:red;'>删除</strong> 资料 <strong style='color:#409eff;'>${row.title}</strong> ？`
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
      deleteStudyInfoApi(row.id)
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
          props: { placeholder: '请输入资料名称', clearable: true },
        },
      },
      {
        field: 'content',
        itemRender: {
          name: '$input',
          props: { placeholder: '请输入资料描述', clearable: true },
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
      title: '资料标题',
      width: '370px',
    },
    {
      field: 'content',
      title: '资料描述',
    },
    {
      title: '资料封面',
      slots: { default: 'row-cover' },
    },
    {
      field: 'creator.username',
      title: '发布者',
    },
    {
      field: 'createTime',
      title: '发布时间',
    },

    {
      width: '80px',
      title: '资料类型',
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
          let result: IApiStudyInfoData[] = []
          /** 加载数据 */
          const callback = (res: GetStudyTableResponseData) => {
            if (res && res.data) {
              const resData = res.data
              // 总数
              if (Number.isInteger(resData.total))
                total = resData.total
              // 分页数据
              if (Array.isArray(resData.records)) {
                result = resData.records
                result.map(studyInfo => Object.assign(studyInfo, { srcList: [studyInfo.coverUrl] }))
              }
            }
            xGridOpt.loading = false
            resolve({ total, result })
          }

          /** 接口需要的参数 */
          const params: IGetStudyTableRequestData = {
            title: form.title || '',
            type: typeValue.value || '',
            size: page.pageSize,
            current: page.currentPage,
            content: form.content || '',
          }
          /** 调用接口 */
          getStudyTableApi(params).then(callback).catch(callback)
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
        <el-select v-model="typeValue" clearable placeholder="请选择资料类型">
          <el-option
            v-for="item in typeList"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          />
        </el-select>
      </template>

      <template #row-cover="{ row }">
        <el-image
          style="width: 60px; height: 40px"
          :src="row.coverUrl"
          :zoom-rate="1.2"
          fit="contain"
          lazy
          :preview-src-list="row.srcList"
          :initial-index="0"
        />
      </template>

      <template #row-type="{ row }">
        <MyStatus :status="row.type" :status-list="typeList" />
      </template>

      <!-- 操作 -->
      <template #row-operate="{ row }">
        <el-button link type="primary" @click="onShowDialog(row)">
          <span class="i-carbon-task-view mr-1" />  预览
        </el-button>
        <el-button link type="warning" @click="onEditStudy(row)">
          <span class="i-ph-pencil-line-light mr-1" />  编辑
        </el-button>
        <el-button link type="danger" @click="onDelStudy(row)">
          <span class="i-material-symbols-delete-outline-rounded" />  删除
        </el-button>
      </template>
    </vxe-grid>

    <!-- 预览弹窗 -->
    <el-dialog v-model="dialogTableVisible" destroy-on-close width="70%" title="资料预览">
      <el-scrollbar height="400px">
        <h2 class="text-center">
          {{ studyInfo?.title }}
        </h2>
        <h4 class="text-center">
          <strong>发布者：</strong> <span class="text-blue-400">{{ studyInfo?.creator.username }}</span>
          <strong class="ml-30px">发布时间：</strong>{{ studyInfo?.createTime }}
          <strong class="ml-30px">类型：</strong> <MyStatus :status="studyInfo?.type" :status-list="typeList" />
        </h4>
        <el-divider border-style="dotted">
          正文
        </el-divider>
        <section
          class="flex flex-col justify-center items-center"
          v-html="studyInfo?.content"
        />
        <section class="flex flex-col justify-center items-center w-full h-full">
          <div v-if="studyInfo?.type === 0 && studyInfo?.fileUrl" class="w-226px h-173px">
            <!-- <PDFView :pdf-url="studyInfo?.fileUrl.replace('https://laboradmin.oss-cn-beijing.aliyuncs.com', '/oss')" /> -->
            <div v-if="studyInfo.type === 0 && studyInfo?.fileUrl" class="w-226px h-173px flex flex-col justify-center items-center ">
              pdf文件暂时无法展示，请直接下载
              <a target="_blank" :href="`${studyInfo?.fileUrl}`">
                <el-button
                  type="primary"
                  link
                >
                  下载
                </el-button>
              </a>
            </div>
          </div>
          <video v-if="studyInfo?.type === 1 && studyInfo?.fileUrl" class="w-60 h-40" :src="studyInfo?.fileUrl" controls />
          <el-image
            v-if="studyInfo?.type === 2 && studyInfo?.fileUrl" class="w-226px h-173px" :src="studyInfo?.fileUrl" lazy preview-src-list="[studyInfo?.fileUrl]"
            :initial-index="0"
            fit="contain"
          />
        </section>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>
