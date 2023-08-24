<script setup lang="ts">
import { defineProps } from 'vue'
defineProps(['item'])
const goToDetailPage = (item) => {
  uni.navigateTo({
    url: `/pages/detail/index?id=${item.id}&usageCategoryId=${item.usage_category_id}`
  })
}
</script>

<template>
  <view class="item-container" @tap="goToDetailPage(item)">
    <up-image :src="item.image" width="260rpx" height="260rpx"></up-image>
    <view class="info">
      <view class="left">
        <view class="name">名称：{{ item.name }}</view>
        <view class="code">型号：{{ item.code }}</view>
      </view>
      <view class="right">x1212</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
$global-width: 120rpx;
.item-container {
  margin-top: 20rpx;
  width: 260rpx;
  border-radius: 15rpx;
  overflow: hidden;
}
.info {
  background-color: black;
  color: white;
  display: flex;
  font-size: 8rpx;
  box-sizing: border-box;
  padding: 14rpx;
  .left {
    width: 170rpx;
    .name,
    .code {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .name {
      margin-bottom: 10rpx;
    }
  }
  .right {
    right: 1;
  }
}
</style>
