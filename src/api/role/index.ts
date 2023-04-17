import type * as Role from './types/role'
import { request } from '@/utils/service'

/** 分页获取角色列表 */
export function getRoleTableApi(params: Role.IGetRoleTableRequestData) {
  return request<Role.GetRoleTableResponseData>({
    url: 'sys-role/list',
    method: 'get',
    params,
  })
}

/** 获取所有角色列表 */
export function getRoleListApi(params: Role.IGetRoleListRequestData) {
  return request<any>({
    url: 'sys-role/allList',
    method: 'get',
    params,
  })
}

/** 删除角色 */
export function deleteRoleApi(roleId: string) {
  return request({
    url: `sys-role/delete/${roleId}`,
    method: 'delete',
  })
}

/** 添加角色 */
export function addRoleApi(data: Role.IApiRoleInfoData) {
  return request({
    url: 'sys-role/add',
    method: 'post',
    data,
  })
}

/** 添加角色 */
export function updateRoleApi(data: Role.IApiRoleInfoData) {
  return request({
    url: 'sys-role/update',
    method: 'put',
    data,
  })
}
