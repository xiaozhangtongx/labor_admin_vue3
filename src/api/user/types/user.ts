export interface IApiUserInfoData {
  id: string
  username: string
  phoneNum: string
  deptId?: string
  avatar: string
  status: number
  score?: number
  roles: []
  _VXE_ID?: string
}

export interface IGetUserTableRequestData {
  current: number
  size: number
  username?: string
}

export interface IAddUserResponseData {
  username: string
  phoneNum: string
  password: string
  avatar?: string
}

export type GetTableResponseData = IApiResponseData<{
  records: IApiUserInfoData[]
  total: number
}>
