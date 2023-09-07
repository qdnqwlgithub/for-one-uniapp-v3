<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

import { getBannerList } from '@/api'
let bannerList = ref([])
onBeforeMount(async () => {
  bannerList.value = await getBannerList()
})
</script>

<template>
  <u-swiper
    indicator
    keyName="image"
    circular
    :list="bannerList"
    height="850rpx"
  ></u-swiper>
</template>

<style lang="scss" scoped></style>
