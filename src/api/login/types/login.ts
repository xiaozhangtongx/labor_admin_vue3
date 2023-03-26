// 用户登录请求数据
export interface ILoginRequestData {
  phoneNum: string
  password: string
  code: string
}

// 用户信息
export interface IApiUserInfoData {
  id: string
  username: string
  phoneNum: string
  deptId?: string
  avatar: string
  status: number
  roles: []
}

export type LoginCodeResponseData = IApiResponseData<string>

export type LoginResponseData = IApiResponseData<any>

export type UserInfoResponseData = IApiResponseData<IApiUserInfoData>
