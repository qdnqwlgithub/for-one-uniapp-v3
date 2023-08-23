<template>
  <view class="indec-container">
    <!-- <u-swiper
            :list="list1"
            @change="change"
            @click="click"
    ></u-swiper> -->
  </view>

  <u-loading-page :loading="loading" loading-text="会一欢迎你"></u-loading-page>
</template>

<script setup lang="ts">
import { useBannerStore } from '@/store/banner'
const bannerStore = useBannerStore()
import { ref, onBeforeMount } from 'vue'
let loading = ref(true)
onBeforeMount(() => {
  bannerStore.initBannerListByStore()
})
</script>

<style lang="scss" scoped></style>
