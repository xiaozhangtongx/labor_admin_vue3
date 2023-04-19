export interface IMenuResponseData {
  children: IMenuResponseData[]
  component: Promise<any>
  id: string
  menuIcon?: string
  menuName: string
  menuPath: string
  menuPerms: string
  orderNum: number
  parentId: string
  menuTitle: string
  redirect?: string
}

export type UserNavResponseData = IApiResponseData<IMenuResponseData[]>
