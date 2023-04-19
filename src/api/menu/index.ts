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

/** 添加菜单 */
export function addMenuApi(data: Menu.IMenuRequestData) {
  return request({
    url: 'sys-menu/add',
    method: 'post',
    data,
  })
}

/** 更新菜单信息 */
export function updateMenuInfoApi(data: Menu.IMenuRequestData) {
  return request({
    url: 'sys-menu/update',
    method: 'put',
    data,
  })
}

/** 删除菜单 */
export function deleteMenuApi(menuId: string) {
  return request({
    url: `sys-menu/delete/${menuId}`,
    method: 'delete',
  })
}
