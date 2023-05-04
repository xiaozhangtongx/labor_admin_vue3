<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
import { ref } from 'vue'

const content = ref<string>('')
const init = ref({
  plugins: 'lists link image table code help wordcount a11ychecker',
  language_url: 'tinymce/langs/zh-Hans.js',
  language: 'zh-Hans',
  toolbar: 'undo redo | styleselect | bold italic | link image a11ycheck | formatselect |  alignleft aligncenter alignright | bullist numlist outdent indent | help',
  branding: false,
  a11y_advanced_options: true,
  elementpath: false,
  /* enable automatic uploads of images represented by blob or data URIs */
  automatic_uploads: true,
  file_picker_types: 'image',
  // file_picker_callback: (callback, value, meta) => {
  //   callback(value, meta)
  // },
  // images_upload_handler(blobInfo, success, failure) {
  //   // 默认插入base64方式
  //   const img = `data:image/jpeg;base64,${blobInfo.base64()}`
  //   success(img)
  //   // console.log(blobInfo, 'blobInfo')
  //   // const file_type = blobInfo.blob().type
  //   // const name = blobInfo.filename && blobInfo.filename() || blobInfo.blob().name
  //   // // 格式校验
  //   // const isAccept = file_type === 'image/jpeg' || file_type === 'image/png' || file_type === 'image/GIF' || file_type === 'image/jpg' || file_type === 'image/BMP'
  //   // // 大小校验
  //   // if (blobInfo.blob().size / 1024 / 1024 > 2) {
  //   //   failure('上传失败，图片大小请控制在 2M 以内')
  //   //   _this.$message.warning('上传失败，图片大小请控制在 2M 以内')
  //   // }
  //   // else if (!isAccept) {
  //   //   _this.$message.warning('图片格式错误')
  //   //   failure('图片格式错误')
  //   // }
  //   // else {
  //   //   // 上传
  //   //   const formData = new FormData()
  //   //   // 服务端接收文件的参数名，文件数据，文件名
  //   //   formData.append('文件参数', blobInfo.blob(), name)
  //   //   (formData).then((result) => {
  //   //     // 这里返回的是你图片的地址
  //   //     success(result.url)
  //   //   }).catch(() => {
  //   //     failure('上传失败')
  //   //   })
  //   // }
  // },

})
</script>

<template>
  <main>
    <Editor
      v-model="content"
      api-key="u7329yvue4st3dqwrb26xf5pcbw9oma45cp1p9lzev0b4oal"
      :init="init"
    />
    {{ content }}
  </main>
</template>

<style scoped>

</style>
