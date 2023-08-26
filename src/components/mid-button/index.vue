<script setup lang="ts">
import { defineProps, ref } from 'vue'
let props = defineProps({
  text: {
    type: String
  },
  name: {
    type: String,
    default: 'mi'
  },
  iconColor: {
    type: String
  }
})
let iconSize = ref('40rpx')
</script>

<template>
  <view class="button-container">
    <view class="content">
      <MidIcon
        :width="iconSize"
        :height="iconSize"
        :name="name"
        :color="iconColor"
      />
      <view class="text">{{ props.text }}</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.button-container {
  display: inline-block;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      font-size: 20rpx;
      color: rgb(171, 166, 166);
    }
  }
}
</style>
