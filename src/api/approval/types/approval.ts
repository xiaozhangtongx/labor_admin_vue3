export interface IGetApprovalTableRequestData {
  approverId?: string
  status: number
  applicationType: string
  current: number
  size: number
}

export interface ISetApprovalRequestData {
  id: string
  applicationId: string
  approverId: string
  approvalResult: number
  reason: string
  applicationType: string
}

export type GetApprovalTableResponseData = IApiResponseData<{
  records: any[]
  total: number
}>
