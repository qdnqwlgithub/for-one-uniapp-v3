<template>
  <scroll-view croll-y="true" scroll-y="true" class="scroll-Y">
    <div
      @tap="$emit('emitC2Id', item.id)"
      :class="{ active: c2Id == item.id }"
      v-for="item in c2List"
      :key="item"
      class="item"
    >
      {{ item.name }}
    </div>
  </scroll-view>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps(['c2List', 'c2Id'])
</script>

<style lang="scss" scoped>
$theSizeOfFont: 26rpx;
.scroll-Y {
  height: 100%;
  width: 100%;
  background-color: $mini-gray;
  overflow: hidden;
  .item {
    padding: 16rpx;
    font-size: $theSizeOfFont;
    color: gray;
    text-align: center;
  }
  .active {
    background-color: white;
    color: black;
    font-weight: 600;
  }
}
</style>
