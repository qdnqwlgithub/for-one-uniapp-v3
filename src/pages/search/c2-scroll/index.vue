<template>
  <u-scroll-list>
    <view v-for="(item, index) in c2List" :key="index">
      <image :src="item.thumb"></image>
    </view>
  </u-scroll-list>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps(['c2List'])
</script>

<style lang="scss" scoped></style>
