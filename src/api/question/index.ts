import type * as Question from './types/question'
import { request } from '@/utils/service'

/** 分页获取题目列表 */
export function getQuestionTableApi(params: Question.IGetQuestionTableRequestData) {
  return request<Question.GetQuestionTableResponseData>({
    url: 'sys-question/list',
    method: 'get',
    params,
  })
}

/** 新建题目 */
export function addQuestionApi(data: Question.IApiQuestionInfoData) {
  return request({
    url: 'sys-question/add',
    method: 'post',
    data,
  })
}

/** 获取题目信息 */
export function getQuestionInfoApi(id: string | null) {
  return request({
    url: `sys-question/info/${id}`,
    method: 'get',
  })
}

/** 获取题目信息 */
export function editQuestionApi(data: Question.IApiQuestionInfoData) {
  return request({
    url: 'sys-question/update',
    method: 'put',
    data,
  })
}
