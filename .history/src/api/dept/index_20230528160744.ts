import type * as Dept from './types/dept'
import { request } from '@/utils/service'

/** 分页获取部门列表 */
export function getDeptTableApi(params: Dept.IGetDeptTableRequestData) {
  return request<Dept.GetDeptTableResponseData>({
    url: 'sys-dept/list',
    method: 'get',
    params,
  })
}

/** 添加部门 */
export function addDeptApi(data: Dept.IApiDeptInfoData) {
  return request({
    url: 'sys-dept/add',
    method: 'post',
    data,
  })
}

/** 添加部门 */
export function updateDeptApi(data: Dept.IApiDeptInfoData) {
  return request({
    url: 'sys-dept/update',
    method: 'put',
    data,
  })
}

// TODO: 获取部门信息
export function getDeptInfoApi(id: string | null) {
  return request({
    url: `sys-dept/info/${id}`,
    method: 'get',
  })
}

// TODO: 获取部门考勤标准
export function getDeptStandardApi(id: string | null) {
  return request({
    url: `sys-dept/standard/info/${id}`,
    method: 'get',
  })
}

// TODO: 添加部门考勤标准
export function addDeptStandardApi(data: Dept.IApiDeptInfoData) {
  return request({
    url: 'sys-dept/standard/add',
    method: 'post',
    data,
  })
}

// TODO: 修改部门考勤标准
export function updateDeptStandardApi(data: Dept.IApiDeptInfoData) {
  return request({
    url: 'sys-dept/standard/update',
    method: 'put',
    data,
  })
}
