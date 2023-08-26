<script setup lang="ts">
/**
 * 暂时设计成这个页面即是产品收藏，也是案例收藏
 */
import Item from '@/search/item-container/item.vue'
</script>

<template>
  <view class="collect-container">
    <Item v-for=""></Item>
  </view>
</template>

<style scoped lang="scss">
.collect-container {
  display: grid;
  grid-template-rows: 1ft 1ft;
}
</style>
