<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
let props = defineProps({
  item: Object
})
let emits = defineEmits('doCollect')
</script>

<template>
  <view class="detail-title-container">
    <view class="title">{{ props.item.title }}</view>
    <view class="menu">
      <MidShareButton :item="item" />
      <MidButton
        @tap="emits('doCollect', item.id)"
        icon-color="red"
        text="收藏"
        :name="
          item.good
            ? props.item.good.is_collected
              ? 'star0'
              : 'star1'
            : props.item.is_collected
            ? 'star0'
            : 'star1'
        "
      />
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
