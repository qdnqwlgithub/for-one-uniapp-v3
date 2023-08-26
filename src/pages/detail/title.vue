<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  title: String
})
</script>

<template>
  <view class="detail-title-container">
    <view class="title">{{ title }}</view>
    <view class="menu">
      <MidShareButton />
      <MidButton icon-color="red" text="收藏" name="star0" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.detail-title-container {
  display: flex;
  align-items: center;
  height: 110rpx;
  .title {
    flex: 80%;
    font-size: 32rpx;
  }
  .menu {
    flex: 20%;
    display: flex;
    justify-content: space-around;
  }
}
</style>
