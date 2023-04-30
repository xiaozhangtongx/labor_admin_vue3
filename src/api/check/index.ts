import type * as Check from './types/check'
import { request } from '@/utils/service'

// TODO: 获取考勤数据列表
export function getCheckTableApi(params: Check.IGetCheckTableRequestData) {
  return request<Check.GetCheckTableResponseData>({
    url: 'sys-check/list',
    method: 'get',
    params,
  })
}

// TODO: 管理人员修改考勤信息
export function editCheckInfoApi(data: Check.IEditCheckInfoRequestData) {
  return request({
    url: 'sys-check/admin/edit',
    method: 'put',
    data,
  })
}
