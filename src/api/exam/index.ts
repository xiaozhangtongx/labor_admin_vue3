import type * as Exam from './types/exam'
import { request } from '@/utils/service'

/** 分页获取试卷列表 */
export function getExamTableApi(params: Exam.IGetExamTableRequestData) {
  return request<Exam.GetExamResponseData>({
    url: 'sys-exam/list',
    method: 'get',
    params,
  })
}

/** 新建试卷 */
export function addExamApi(data: Exam.IApiExamInfoData) {
  return request({
    url: 'sys-exam/add',
    method: 'post',
    data,
  })
}

/** 更新试卷 */
export function editExamApi(data: Exam.IApiExamInfoData) {
  return request({
    url: 'sys-exam/update',
    method: 'put',
    data,
  })
}

/** 获取试卷信息 */
export function getExamInfoApi(id: string | null) {
  return request({
    url: `sys-exam/info/${id}`,
    method: 'get',
  })
}

/** 删除试卷 */
export function deleteExamInfoApi(id: string | null) {
  return request({
    url: `sys-exam/delete/${id}`,
    method: 'delete',
  })
}
