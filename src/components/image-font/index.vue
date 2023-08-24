<script setup lang="ts">
defineProps({
  imagePath: {
    type: String
  }
})
</script>

<template>
  <view class="item-container">
    <up-image :src="imagePath" width="100%" height="400rpx"></up-image>
    <view class="info">
      <view class="left">
        <slot name="left"></slot>
      </view>
      <view class="right">
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.item-container {
  position: relative;
  border-radius: 20rpx;
  overflow: hidden;
  .info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 16rpx;
    font-size: 22rpx;
  }
}
</style>
