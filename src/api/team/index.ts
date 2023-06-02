import type * as Team from './types/team'
import { request } from '@/utils/service'

/** 分页获取小组列表 */
export function getTeamTableApi(params: Team.IGetTeamTableRequestData) {
  return request<Team.GetTeamTableResponseData>({
    url: 'sys-team/list',
    method: 'get',
    params,
  })
}

/** 添加小组 */
export function addTeamApi(data: Team.IApiTeamInfoData) {
  return request({
    url: 'sys-team/add',
    method: 'post',
    data,
  })
}

/** 修改小组 */
export function updateTeamApi(data: Team.IApiTeamInfoData) {
  return request({
    url: 'sys-team/update',
    method: 'put',
    data,
  })
}

// TODO: 获取小组信息
export function getTeamInfoApi(id: string | null) {
  return request({
    url: `sys-team/info/${id}`,
    method: 'get',
  })
}

/** 添加小组成员 */
export function addTeamMemberApi(data: Team.IApiTeamMemberInfoData) {
  return request({
    url: 'sys-team/member/add',
    method: 'post',
    data,
  })
}

/** 获取成员列表 */
export function getTeamMemberListTableApi(params: Team.IGetTeamMemberTableRequestData) {
  return request<Team.GetTeamMemberTableResponseData>({
    url: 'sys-team/member/list',
    method: 'get',
    params,
  })
}

/** 批量删除成员 */
export function deleteTeamsApi(ids: string[]) {
  return request({
    url: 'sys-team/member/delete',
    method: 'post',
    data: ids,
  })
}

/** 删除单个成员 */
export function deleteTeamApi(userId: string) {
  return request({
    url: `sys-team/member/delete/${userId}`,
    method: 'delete',
  })
}
