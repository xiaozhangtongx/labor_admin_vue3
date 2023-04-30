import type { IApiUserInfoData } from '@/api/user/types/user'

export interface IApiCheckInfoData {
  id: string
  userId: string
  createTime: Date
  updateTime: Date
  lon: number
  lat: number
  workTime: number
  des: string
  signInTime: Date
  signOutTime: string
  overTime: number
  addTime: number
  status: number
  user: IApiUserInfoData
  _VXE_ID?: string
}

export interface IGetCheckTableRequestData {
  current: number
  size: number
  userId: string
  status: number | null
  startTime: string
  endTime: string
}

export type GetCheckTableResponseData = IApiResponseData<{
  records: IApiCheckInfoData[]
  total: number
}>

export interface IEditCheckInfoRequestData {
  id: string
  username: string
  userId: string
  createTime: string
  addTime: number
  overTime: number
  des: string
  status: number
}
