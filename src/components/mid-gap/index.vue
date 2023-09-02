<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  bgColor: {
    type: String
  },
  height: {
    type: String,
    default: '30rpx'
  }
})
</script>

<template>
  <u-gap :height="height" :bgColor="bgColor"></u-gap>
</template>

<style lang="scss" scoped></style>
