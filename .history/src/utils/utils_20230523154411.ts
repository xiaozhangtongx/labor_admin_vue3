import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'

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

/** blob 转base64 */
export const blob2Base64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })
}

/** 获取最近n天的天气 */
export const getDays = (number: number) => {
  const dates = []
  for (let i = 0; i < number; i++)
    dates.unshift(dayjs().subtract(i, 'day').format('YYYY-MM-DD'))

  return dates
}
