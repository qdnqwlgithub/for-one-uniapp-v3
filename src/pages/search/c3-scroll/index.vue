<template>
  <scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
    <view class="item" v-for="item in c3List" :key="item.id">
      {{ item.name }}
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps(['c3List', 'c3Id'])
</script>

<style lang="scss" scoped>
.scroll-view_H {
  white-space: nowrap;
  width: 100%;
  .item {
    display: inline-block;
    height: 30rpx;
    line-height: 30rpx;
    text-align: center;
    font-size: 16rpx;
  }
}
</style>
