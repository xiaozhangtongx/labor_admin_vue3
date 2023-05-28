import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type RouteRecordRaw } from 'vue-router'
import store from '@/store'
import { constantRoutes } from '@/router/constantRoutes'
import asyncRouteSettings from '@/config/async-route'
import { getUserNavApi } from '@/api/menu'
import type { IMenuResponseData } from '@/api/menu/types/menu'

const modules = import.meta.glob('../../views/**/*.vue')
const layout = import.meta.glob('../../layout/*.vue')

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => {
      if (route.meta?.roles !== undefined)
        return route.meta.roles.includes(role)
      else
        return false
    })
  }
  else {
    return true
  }
}
const menuChildren2Route = (menu: IMenuResponseData): RouteRecordRaw => {
  const url = `../../views/${menu.component}/index.vue`
  const route = {
    path: menu.menuPath,
    name: menu.menuName,
    meta: {
      title: menu.menuTitle,
      svgIcon: menu.menuIcon,
      roles: menu.menuPerms.split(','),
      hidden: menu.hidden === 0,
    },
    component: modules[url],
  }

  if (menu.children)
    Object.assign(route, route, { redirect: `${menu.redirect}`, children: menu.children?.map(child => menuChildren2Route(child)) })

  return route
}

const menu2Route = (menu: IMenuResponseData): RouteRecordRaw => {
  const route = {
    path: menu.menuPath,
    component: layout['../../layout/index.vue'],
    redirect: `${menu.redirect}`,
    meta: {
      title: menu.menuTitle,
      svgIcon: menu.menuIcon,
      roles: menu.menuPerms.split(','),
    },
    children: menu.children?.map(child => menuChildren2Route(child)),
  }

  return route
}

const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children)
        r.children = filterAsyncRoutes(r.children, roles)

      res.push(r)
    }
  })
  return res
}

export const usePermissionStore = defineStore('permission', () => {
  const routes = ref<RouteRecordRaw[]>([])
  const dynamicRoutes = ref<RouteRecordRaw[]>([])

  const setRoutes = async (roles: string[]) => {
    const { data: asyncRoutesMenu } = await getUserNavApi()
    const asyncRoutes = asyncRoutesMenu.map((menu: IMenuResponseData): RouteRecordRaw => menu2Route(menu))

    let accessedRoutes
    if (!asyncRouteSettings.open)
      accessedRoutes = asyncRoutes
    else
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)

    routes.value = constantRoutes.concat(accessedRoutes)

    dynamicRoutes.value = accessedRoutes
    return accessedRoutes
  }

  return { routes, dynamicRoutes, setRoutes }
})

/** 在 setup 外使用 */
export function usePermissionStoreHook() {
  return usePermissionStore(store)
}
