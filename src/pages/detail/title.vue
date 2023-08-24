<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  title: String
})
</script>

<template>
  <view class="detail-title-container">
    <view class="title locale-height">{{ title }}</view>
    <view class="menu locale-height">
      <MidButton text="分享" />
      <MidButton text="收藏" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.detail-title-container {
  display: flex;
  align-items: center;
  .title {
    flex: 60%;
    font-size: 32rpx;
  }
  .menu {
    flex: 40%;
    display: flex;
  }
}
</style>
