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
