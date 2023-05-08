export interface IApiStudyInfoData {
  id: string
  creatorId: string
  title: string
  content: string
  type: number
  fileUrl: string
  coverUrl: string
  createTime: string
  updateTime: string
  creator?: any
  _VXE_ID?: string
}

export interface IGetStudyTableRequestData {
  current: number
  size: number
  title?: string
  content?: string
  type?: number | string
}

export type GetStudyTableResponseData = IApiResponseData<{
  records: IApiStudyInfoData[]
  total: number
}>
