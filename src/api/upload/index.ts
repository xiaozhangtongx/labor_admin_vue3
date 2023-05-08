import { request } from '@/utils/service'

/** 图片上传 */
export function uploadImgApi(data: string[]) {
  return request({
    url: 'sys-upload/images',
    method: 'post',
    data,
  })
}

/** 图片上传 */
export function uploadFileApi(data: any) {
  return request({
    url: 'sys-upload/file',
    method: 'post',
    data,
  })
}
