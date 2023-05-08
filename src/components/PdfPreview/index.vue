<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed'
// import * as pdfjsLib from 'pdfjs-dist'

import { computed, reactive } from 'vue'

const props = defineProps({
  pdfUrl: {
    type: String,
    required: true,
  },
})
const state = reactive({
  source: props.pdfUrl,
  pageNum: 1,
  scale: 1, // 缩放比例
  numPages: 0, // 总页数
})

const scale = computed(() => `transform:scale(${state.scale})`)

function lastPage() {
  if (state.pageNum > 1)
    state.pageNum -= 1
}
function nextPage() {
  if (state.pageNum < state.numPages)
    state.pageNum += 1
}
function pageZoomOut() {
  if (state.scale < 2)
    state.scale += 0.1
}
function pageZoomIn() {
  if (state.scale > 1)
    state.scale -= 0.1
}
// function getPdfUrl(data) {
//   state.source = data
//   pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.js'
//   const loadingTask = pdfjsLib.getDocument(data)
//   loadingTask.promise.then((pdf) => {
//     state.numPages = pdf.numPages
//   })
// }

// onMounted(() => {
//   getPdfUrl(props.pdfUrl)
// })
</script>

<template>
  <div class="pdf-preview">
    <VuePdfEmbed :source="state.source" :style="scale" class="vue-pdf-embed" />
  </div>
</template>

<style lang="css" scoped>
.pdf-preview {
  position: relative;
  height: 120px;
  width: 160px;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: e9e9e9;
}

.vue-pdf-embed {
  text-align: center;
  height: 120px;
  width: 160px;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
