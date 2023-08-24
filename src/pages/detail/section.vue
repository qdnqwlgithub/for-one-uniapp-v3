<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  iconName: {
    type: String
  },
  zh: {
    type: String
  },
  en: {
    type: String
  }
})
</script>

<template>
  <view class="title">
    <MidIcon height="36rpx" width="36rpx" :name="iconName"></MidIcon>
    <span class="zh">{{ zh }}</span>
    <span class="en">{{ en }}</span>
  </view>
  <slot></slot>
</template>

<style scoped lang="scss">
.title {
  height: 100rpx;
  display: flex;
  align-items: center;
  .zh {
    font-size: 20rpx;
  }
  .en {
    font-size: 8rpx;
  }
  * {
    margin-right: 5rpx;
  }
}
</style>
