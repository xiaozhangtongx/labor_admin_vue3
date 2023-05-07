import type * as Notice from './types/notice'
import { request } from '@/utils/service'

/** 分页获取公告列表 */
export function getNoticeTableApi(params: Notice.IGetNoticeTableRequestData) {
  return request<Notice.GetNoticeTableResponseData>({
    url: 'sys-notice/list',
    method: 'get',
    params,
  })
}

/** 发布公告 */
export function addNoticeApi(data: Notice.IApiNoticeInfoData) {
  return request({
    url: 'sys-notice/add',
    method: 'post',
    data,
  })
}

/** 编辑公告 */
export function editNoticeApi(data: Notice.IApiNoticeInfoData) {
  return request({
    url: 'sys-notice/update',
    method: 'put',
    data,
  })
}

/** 删除公告 */
export function deleteNoticeInfoApi(id: string | null) {
  return request({
    url: `sys-notice/delete/${id}`,
    method: 'delete',
  })
}

/** 获取公告信息 */
export function getNoticeInfoApi(id: string | null) {
  return request({
    url: `sys-notice/info/${id}`,
    method: 'get',
  })
}
