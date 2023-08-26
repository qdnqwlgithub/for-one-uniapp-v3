<template>
  <ForOneHeader />
  <div class="index-container">
    <u-swiper
      indicator
      keyName="image"
      circular
      class="index-swiper"
      :list="bannerStore.bannerList"
      height="850rpx"
    ></u-swiper>
    <CategorySection />
    <UnionSection />
    <SpaceSection />
  </div>
</template>

<script setup lang="ts">
import CategorySection from './category-section.vue'
import UnionSection from './union-section.vue'
import SpaceSection from './space-section.vue'
import { useBannerStore } from '@/store/banner'
const bannerStore = useBannerStore()
import { ref, onBeforeMount } from 'vue'
// let loading = ref(true)
onBeforeMount(() => {
  bannerStore.initBannerListByStore()
})
</script>

<style lang="scss" scoped>
.index-container {
}
</style>
