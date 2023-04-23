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

/** 配置权限 */
export function updatePerm(roleId: string, menuIds: String[]) {
  return request({
    url: `sys-role/perm/${roleId}`,
    method: 'post',
    data: menuIds,
  })
}

/** 批量删除角色 */
export function deleteRolesApi(ids: string[]) {
  return request({
    url: 'sys-role/delete',
    method: 'post',
    data: ids,
  })
}
