<template>
  <div class="layout-container">
    <view class="content">
      <slot></slot>
    </view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout-container {
  background-color: white;
  .content {
    width: 700rpx;
    margin: auto;
  }
}
</style>
