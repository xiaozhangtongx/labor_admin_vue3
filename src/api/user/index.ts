import type * as User from './types/user'
import { request } from '@/utils/service'

/** 获取用户列表 */
export function getUserTableApi(params: User.IGetUserTableRequestData) {
  return request<User.GetTableResponseData>({
    url: 'sys-user/list',
    method: 'get',
    params,
  })
}

/** 批量删除用户 */
export function deleteUsersApi(ids: string[]) {
  return request({
    url: 'sys-user/delete',
    method: 'post',
    data: ids,
  })
}

/** 删除单个用户 */
export function deleteUserApi(userId: string) {
  return request({
    url: `sys-user/delete/${userId}`,
    method: 'delete',
  })
}

/** 更新用户信息 */
export function updateUserInfoApi(data: User.IApiUserInfoData) {
  return request({
    url: 'sys-user/update/info',
    method: 'put',
    data,
  })
}

/** 添加用户 */
export function addUserApi(data: User.IApiUserInfoData) {
  return request({
    url: 'sys-user/add',
    method: 'post',
    data,
  })
}

/** 配置角色 */
export function updateUserRoleApi(userId: string, roleIds: String[]) {
  return request({
    url: `sys-user/role/${userId}`,
    method: 'post',
    data: roleIds,
  })
}

/** 重置用户密码 */
export function repassUserApi(data: User.IApiUserInfoData) {
  return request({
    url: 'sys-user/repass',
    method: 'put',
    data,
  })
}
