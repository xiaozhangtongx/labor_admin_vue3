export interface IApiNoticeInfoData {
  id: string
  title: string
  creatorId: string | undefined
  deptId: string
  teamId: string
  content: string
  createTime?: string
  updateTime?: string
  type?: number
  creator?: any
  _VXE_ID?: string
}

export interface IGetNoticeTableRequestData {
  current: number
  size: number
  title?: string
  creatorId?: string
  deptId?: string
  teamId?: string
  type?: number | string
}

export type GetNoticeTableResponseData = IApiResponseData<{
  records: IApiNoticeInfoData[]
  total: number
}>
