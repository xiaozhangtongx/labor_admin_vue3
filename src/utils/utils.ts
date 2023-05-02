import { v4 as uuidv4 } from 'uuid'

/** 去除对象数组中重复的元素 */
export const uniqueFun = (arr: any[]) => {
  const map = new Map()
  return arr.filter((item) => {
    return !map.has(item.id) && map.set(item.id, 1)
  })
}

export const getUuid = () => {
  return uuidv4().split('-').join('')
}
