import type * as Menu from './types/menu'
import { request } from '@/utils/service'

/** 获取用户列表 */
export function getUserNavApi() {
  return request<Menu.UserNavResponseData>({
    url: 'sys-menu/nav',
    method: 'get',
  })
}

/** 获取树形状列表 */
export function getMenuTree() {
  return request<any>({
    url: 'sys-menu/tree',
    method: 'get',
  })
}
