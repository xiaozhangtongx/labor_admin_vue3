<script lang="ts" setup>
import { reactive, ref } from 'vue'
import {
  type VxeGridInstance,
  type VxeGridPropTypes,
  type VxeGridProps,
} from 'vxe-table'
import { getApprovalTableApi } from '@/api/approval/index'
import { type GetApprovalTableResponseData, type IGetApprovalTableRequestData } from '@/api/approval/types/approval'
import MyStatus from '@/components/MyStatus/index.vue'
import { useUserStore } from '@/store/modules/user'

const user = useUserStore()

const resStatusList = [
  { id: 0, type: 'success', value: '同意' },
  { id: 1, type: 'danger', value: '拒绝' },
]

defineOptions({
  name: 'VxeTable',
})

const sysFlowInfo = ref()
const centerDialogVisible = ref(false)
const onShowModal = (row: any) => {
  sysFlowInfo.value = row
  centerDialogVisible.value = true
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

  /** 列配置 */
  columns: [
    {
      type: 'seq',
      width: '50px',
      title: '序号',
    },
    {
      field: 'flowWorkTimeInfo.proposer.username',
      title: '申请人',
    },
    {
      field: 'approvalResult',
      title: '审批结果',
      slots: { default: 'approval-result' },
    },
    {
      field: 'flowWorkTimeInfo.workDate',
      title: '申请补充日期',
    },
    {
      field: 'flowWorkTimeInfo.workDuration',
      title: '申请时长',
    },
    {
      field: 'flowWorkTimeInfo.createTime',
      title: '申请时间',
    },
    {
      field: 'updateTime',
      title: '处理时间',
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
    /** 启用动态序号代理 */
    seq: true,
    /** 是否代理表单 */
    form: true,
    props: {
      total: 'total',
    },
    ajax: {
      query: ({ page }: VxeGridPropTypes.ProxyAjaxQueryParams) => {
        xGridOpt.loading = true
        return new Promise<any>((resolve: Function) => {
          let total = 0
          let result: IGetApprovalTableRequestData[] = []
          /** 加载数据 */
          const callback = (res: GetApprovalTableResponseData) => {
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
          const params = {
            approverId: user.userInfo?.id,
            status: 0,
            applicationType: '3',
            size: page.pageSize,
            current: page.currentPage,
          }
          /** 调用接口 */
          getApprovalTableApi(params).then(callback).catch(callback)
        })
      },
    },
  },
})
</script>

<template>
  <div>
    <!-- 表格 -->
    <vxe-grid ref="xGridDom" v-bind="xGridOpt">
      <!-- 审批结果 -->
      <template #approval-result="{ row }">
        <MyStatus :status="parseInt(row.approvalResult) " :status-list="resStatusList" />
      </template>
      <!-- 操作 -->
      <template #row-operate="{ row }">
        <el-button link type="primary" @click="onShowModal(row)">
          <span class="i-carbon-task-view mr-1" />  查看详情
        </el-button>
      </template>
    </vxe-grid>

    <!-- 申请表单详情信息 -->
    <el-dialog
      v-model="centerDialogVisible"
      title="申请详情"
      width="40%"
      draggable
      destroy-on-close
    >
      <el-scrollbar>
        <div class="flow-leave">
          <el-descriptions title="申请人信息" :column="2" label-align="right">
            <el-descriptions-item label="姓名">
              {{ sysFlowInfo.flowWorkTimeInfo.proposer.username }}
            </el-descriptions-item>
            <el-descriptions-item label="手机号码">
              {{ sysFlowInfo.flowWorkTimeInfo.proposer.phoneNum }}
            </el-descriptions-item>
            <el-descriptions-item label="部门">
              Suzhou
            </el-descriptions-item>
            <el-descriptions-item label="职位">
              <el-tag size="small">
                School
              </el-tag>
            </el-descriptions-item>
          </el-descriptions>

          <el-descriptions title="申请表单" :column="2" border>
            <el-descriptions-item label="补充日期">
              {{ sysFlowInfo.flowWorkTimeInfo.workDate }}
            </el-descriptions-item>
            <el-descriptions-item label="申请时长">
              {{ sysFlowInfo.flowWorkTimeInfo.workDuration }} 小时
            </el-descriptions-item>
            <el-descriptions-item label="申请原因">
              {{ sysFlowInfo.flowWorkTimeInfo.reason }}
            </el-descriptions-item>
          </el-descriptions>

          <el-descriptions title="审批详情" :column="2" class="mt-3">
            <el-descriptions-item label="审批结果">
              <MyStatus :status="parseInt(sysFlowInfo.approvalResult) " :status-list="resStatusList" />
            </el-descriptions-item>
            <el-descriptions-item label="审批时间">
              {{ sysFlowInfo.updateTime }}
            </el-descriptions-item>
            <el-descriptions-item label="审批意见">
              {{ sysFlowInfo.reason }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>
