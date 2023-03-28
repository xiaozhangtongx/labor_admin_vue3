import { defineStore } from 'pinia'
import { getUserNavApi } from '@/api/menu'
import store from '@/store'

export const useMenuStore = defineStore('menu', () => {
  const getUserNav = async () => {
    const { data: userNav } = await getUserNavApi()
    return userNav
  }

  return { getUserNav }
})

/** 在 setup 外使用 */
export function useMenuStoreHook() {
  return useMenuStore(store)
}
