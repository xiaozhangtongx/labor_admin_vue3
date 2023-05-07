import { request } from '@/utils/service'

/** 图片上传 */
export function uploadImgApi(data: string[]) {
  return request({
    url: 'sys-upload/images',
    method: 'post',
    data,
  })
}
