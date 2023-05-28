export interface IApiDeptInfoData {
  id: string
  deptName: string
  des: string
  updateTime: string
  createTime: string
  leader: any
  _VXE_ID?: string
}

export interface IApiDeptStandarInfoData{
  id:string,
  deptId: route.query.id as string,
  lon: 114.361595,
  lat: 30.6078,
  earliestTime: '09:00:00',
  latestTime: '18:00:00',
  minDuration: 9,
  des: '',
  radius: 0,
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
