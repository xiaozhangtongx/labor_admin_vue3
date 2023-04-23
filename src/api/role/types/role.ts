export interface IApiRoleInfoData {
  id: string
  roleName: string
  roleCode: string
  des?: string
  menus: any[]
  _VXE_ID?: string
}

export interface IGetRoleTableRequestData {
  current: number
  size: number
  roleName?: string
}

export type GetRoleTableResponseData = IApiResponseData<{
  records: IApiRoleInfoData[]
  total: number
}>

export interface IGetRoleListRequestData {
  roleName?: string
}
