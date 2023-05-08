import type * as Study from './types/study'
import { request } from '@/utils/service'

/** 分页获取学习资料列表 */
export function getStudyTableApi(params: Study.IGetStudyTableRequestData) {
  return request<Study.GetStudyTableResponseData>({
    url: 'sys-study/list',
    method: 'get',
    params,
  })
}

/** 发布学习资料 */
export function addStudyApi(data: Study.IApiStudyInfoData) {
  return request({
    url: 'sys-study/add',
    method: 'post',
    data,
  })
}

/** 编辑学习资料 */
export function editStudyApi(data: Study.IApiStudyInfoData) {
  return request({
    url: 'sys-study/update',
    method: 'put',
    data,
  })
}

/** 删除学习资料 */
export function deleteStudyInfoApi(id: string | null) {
  return request({
    url: `sys-study/delete/${id}`,
    method: 'delete',
  })
}

/** 获取学习资料信息 */
export function getStudyInfoApi(id: string | null) {
  return request({
    url: `sys-study/info/${id}`,
    method: 'get',
  })
}
