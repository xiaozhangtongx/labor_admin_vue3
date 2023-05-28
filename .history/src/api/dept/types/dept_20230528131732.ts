export interface IApiDeptInfoData {
  id: string
  deptName: string
  parentId: string
  des: string
  level: number
  sort: number
  updateTime: string
  createTime: string
  sysUserDeptList: any
  leader: any
  _VXE_ID?: string
}

export interface IGetDeptTableRequestData {
  current: number
  size: number
  deptName?: string
  parentId?: string
}

export type GetDeptTableResponseData = IApiResponseData<{
  records: IApiDeptInfoData[]
  total: number
}>
