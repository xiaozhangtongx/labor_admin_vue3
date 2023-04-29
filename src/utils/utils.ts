/** 去除对象数组中重复的元素 */
export const uniqueFun = (arr: any[]) => {
  const map = new Map()
  return arr.filter((item) => {
    return !map.has(item.id) && map.set(item.id, 1)
  })
}
