<script setup lang="ts">
import { defineProps, ref } from 'vue'
const props = defineProps({
  prefix: {
    type: String,
    default: '#icon-'
  },
  name: String,
  // sometime work, sometime not work
  color: {
    type: String,
    default: 'green'
  },
  width: {
    type: String,
    default: '24rpx'
  },
  height: {
    type: String,
    default: '24rpx'
  }
})
const prefix = ref('#icon-')
</script>

<template>
  <svg :style="{ width, height }">
    <use :xlink:href="props.prefix + props.name" :fill="color"></use>
  </svg>
</template>

<style lang="scss" scoped>
.button-container {
  display: inline-block;
}
</style>
