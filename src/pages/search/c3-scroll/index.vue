<template>
  <scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
    <view
      class="item"
      :class="{ active: c3Id == item.id }"
      v-for="item in c3List"
      :key="item.id"
      @tap="$emit('emitC3Id', item.id)"
    >
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
  // overflow: hidden;
  white-space: nowrap;
  width: 100%;
  border-bottom: 1rpx solid #dedada;
  height: 60rpx;
  line-height: 60rpx;
  .item {
    display: inline-block;
    text-align: center;
    font-size: 16rpx;
    color: #bfb6b6;
    margin-right: 15rpx;
  }
  .active {
    color: black;
    font-weight: 600;
  }
}
</style>
