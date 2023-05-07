<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Watermark } from '@pansy/watermark'
import { useTagsViewStore } from '@/store/modules/tags-view'
import { useUserStore } from '@/store/modules/user'
const watermark = ref<Watermark>()

const appMinRef = ref<HTMLElement | null | undefined | string>(null)
const useUser = useUserStore()

// watermark.value = new Watermark({
//   text: [useUser.userInfo?.username || '', useUser.userInfo?.phoneNum || ''],
//   width: 120,
//   height: 64,
//   gapX: 150,
//   gapY: 150,
//   container: appMinRef.value,
// })

const route = useRoute()
const tagsViewStore = useTagsViewStore()

const key = computed(() => {
  return route.path
})
</script>

<template>
  <section id="app-main1" ref="appMinRef" class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="tagsViewStore.cachedViews">
          <component :is="Component" :key="key" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - var(--v3-navigationbar-height));
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: var(--v3-body-bg-color);
}

.fixed-header + .app-main {
  padding-top: var(--v3-navigationbar-height);
  height: 100vh;
  overflow: auto;
}

.hasTagsView {
  .app-main {
    min-height: calc(100vh - var(--v3-header-height));
  }
  .fixed-header + .app-main {
    padding-top: var(--v3-header-height);
  }
}
</style>
