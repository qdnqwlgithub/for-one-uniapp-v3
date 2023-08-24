<script setup lang="ts">
import Section from './section.vue'
import { defineProps } from 'vue'
defineProps({
  support: {
    type: Object
  }
})
</script>

<template>
  <Section icon-name="material" zh="支持基材" en="MATERIAL">
    <view class="content">
      <view class="item" v-for="item in support.content" :key="item">
        <MidIcon class="mid-icon" name="done" />
        <text>{{ item }}</text>
      </view>
    </view>
  </Section>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 20rpx;
    height: 50rpx;
    display: flex;
    align-items: center;
    font-size: 22rpx;
    .mid-icon {
      margin-right: 6rpx;
    }
  }
}
</style>
