import type * as Role from './types/role'
import { request } from '@/utils/service'

/** 获取角色列表 */
export function getRoleTableApi(params: Role.IGetRoleTableRequestData) {
  return request<Role.GetRuleTableResponseData>({
    url: 'sys-role/list',
    method: 'get',
    params,
  })
}
