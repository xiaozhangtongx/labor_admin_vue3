import type * as Login from './types/login'
import { request } from '@/utils/service'

/** 获取登录验证码 */
export function getLoginCodeApi() {
  return request<Login.LoginCodeResponseData>({
    url: 'login/code',
    method: 'get',
  })
}

/** 登录并返回 Token */
export function loginApi(data: Login.ILoginRequestData) {
  return request<Login.LoginResponseData>({
    url: '/login',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  })
}

/** 获取用户详情 */
export function getUserInfoApi() {
  return request<Login.UserInfoResponseData>({
    url: 'sys-user/userInfo',
    method: 'get',
  })
}
