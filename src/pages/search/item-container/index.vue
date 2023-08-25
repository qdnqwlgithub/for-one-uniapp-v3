<script setup lang="ts">
import Item from './item.vue'
import { defineProps } from 'vue'
defineProps(['itemList'])
</script>

<template>
  <scroll-view scroll-y="true" class="scroll-Y">
    <view class="container">
      <Item
        :key="item.id"
        class="item"
        v-for="item in itemList"
        :item="item"
      ></Item>
    </view>
  </scroll-view>
</template>

<style scoped lang="scss">
.scroll-Y {
  width: 100%;
  height: 100%;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
  }
}
</style>
