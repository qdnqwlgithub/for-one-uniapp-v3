<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  infoArray: {
    type: Array
  }
})
</script>

<template>
  <view class="info">
    <view class="row" v-for="item in infoArray">
      <view class="k">{{ item.label }}</view>
      <view class="v">{{ item.value }}</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.info {
  padding: 25rpx 0;
  border-bottom: 1rpx solid black;
  .row {
    font-size: 21rpx;
    display: flex;
    .k {
      margin-right: 16rpx;
    }
  }
}
</style>
