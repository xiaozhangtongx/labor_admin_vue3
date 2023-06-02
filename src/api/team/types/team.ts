import type { LocationQueryValue } from 'vue-router'
import type { IApiUserInfoData } from '../../user/types/user'

export interface IApiTeamInfoData {
  id: string
  deptId: string
  teamLeaderId: string
  createTime: string
  updateTime: string
  des: string
  teamName: string
  status: number | string
  teamLeader: IApiUserInfoData
  _VXE_ID?: string
}

export interface IApiTeamMemberInfoData {
  id: string
  usertId: string
  teamId: string
  createTime?: string
  updateTime?: string
  status?: number | string
  teamMember: IApiUserInfoData
  _VXE_ID?: string
}

export interface IGetTeamTableRequestData {
  current: number
  size: number
  deptId?: string | LocationQueryValue[]
  teamName?: string
}

export type GetTeamTableResponseData = IApiResponseData<{
  records: IApiTeamInfoData[]
  total: number
}>

export interface IGetTeamMemberTableRequestData {
  current: number
  size: number
  teamId?: string | LocationQueryValue | LocationQueryValue[]
  userId?: string
}

export type GetTeamMemberTableResponseData = IApiResponseData<{
  records: IApiTeamMemberInfoData[]
  total: number
}>
