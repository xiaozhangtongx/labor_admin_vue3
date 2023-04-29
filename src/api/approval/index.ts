import type * as Approval from './types/approval'
import { request } from '@/utils/service'

export function getApprovalTableApi(params: Approval.IGetApprovalTableRequestData) {
  return request<Approval.GetApprovalTableResponseData>({
    url: 'sys-flow/approval/list',
    method: 'get',
    params,
  })
}

export function setApprovalApi(data: Approval.ISetApprovalRequestData) {
  return request({
    url: 'sys-flow/approval/update',
    method: 'put',
    data,
  })
}
