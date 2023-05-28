import type * as User from '@/api/user/types/user'

export interface ILoginRequestData {
  phoneNum: string
  password: string
  code: string
}

export type LoginResponseData = IApiResponseData<any>

export type UserInfoResponseData = IApiResponseData<User.IApiUserInfoData>
