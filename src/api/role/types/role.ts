export interface IApiRoleInfoData {
  id: string
  roleName: string
  roleCode: string
  des?: string
  menus?: []
  _VXE_ID?: string
}

export interface IGetRoleTableRequestData {
  current: number
  size: number
  roleName?: string
}

export type GetRuleTableResponseData = IApiResponseData<{
  records: IApiRoleInfoData[]
  total: number
}>
