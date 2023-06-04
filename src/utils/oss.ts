// 封装oss方法
import OSS from 'ali-oss'

// 实例化OSS，并配置OSS信息
export const client = new OSS({
  region: 'oss-cn-beijing', // 根据那你的Bucket地点来填写
  accessKeyId: 'LTAI5tAbTLy4w2ZqdgjwzL5f', // 自己账户的accessKeyId
  accessKeySecret: 'hxLBkHmA3muwhj00JXNuWqXRQC2uPZ', // 自己账户的accessKeySecret
  bucket: 'laboradmin', // bucket名字
})

// 分片配置项
export const options = {
  // 设置并发上传的分片数量。
  parallel: 4,
  // 设置分片大小。默认值为1 MB，最小值为100 KB。
  partSize: 2 * 1024 * 1024,
  // 设置请求头
  headers: {
    // 指定该Object被下载时的内容编码格式。
    'Content-Encoding': 'utf-8',
    // 指定过期时间，单位为毫秒。
    'Expires': '1000',
    // 指定Object标签，可同时设置多个标签。
    'x-oss-tagging': 'Tag1=1&Tag2=2',
    // 指定初始化分片上传时是否覆盖同名Object。此处设置为true，表示禁止覆盖同名Object。
    'x-oss-forbid-overwrite': 'false',
  },
}

export const random_name = `${random_string(6)}_${new Date().getTime()}`
// export default OSS

function random_string(len: number) {
  len = len || 32
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = chars.length
  let pwd = ''
  for (let i = 0; i < len; i++)
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))

  return pwd
}
