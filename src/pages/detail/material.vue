<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  support: {
    type: Object
  }
})
</script>

<template>
  <view class="title">
    <MidIcon height="36rpx" width="36rpx" name="material"></MidIcon>
    <span class="zh">支持基材</span>
    <span class="en">MATERIAL</span>
  </view>
  <view class="content">
    <view class="item" v-for="item in support.content" :key="item">
      <MidIcon class="mid-icon" name="done" />
      <text>{{ item }}</text>
    </view>
  </view>
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
.content {
    display: flex;
    flex-wrap: wrap;
  .item {
    margin-right: 20rpx;
    height: 50rpx;
    display: flex;
    align-items: center;
    font-size: 22rpx;
    .mid-icon{
        margin-right: 6rpx;
    }
  }
}
</style>
