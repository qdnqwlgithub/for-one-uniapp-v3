<script setup lang="ts">
import Section from './section.vue'
import { defineProps, ref } from 'vue'
defineProps({
  relatives: {
    type: Object
  }
})
let imageSize = ref('320rpx')
</script>

<template>
  <Section icon-name="more" :zh="relatives.title" en="RELATIVES">
    <view class="content">
      <view class="item" v-for="item in relatives.items" :key="item">
        <up-image
          mode="scaleToFill"
          :src="item.image"
          :width="imageSize"
          :height="imageSize"
        ></up-image>
        <view class="info" :style="{ width: imageSize }">
          <view class="name">名称：{{ item.name }}</view>
          <view class="usageCategoryId"
            >型号：{{ item.usage_category_id }}</view
          >
        </view>
      </view>
    </view>
  </Section>
</template>

<style scoped lang="scss">
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  // todo 不生效
  justify-items: space-between;
  .item {
    position: relative;
    margin-bottom: 20rpx;
    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      font-size: 14rpx;
      padding: 12rpx;
      box-sizing: border-box;
    }
  }
}
</style>
