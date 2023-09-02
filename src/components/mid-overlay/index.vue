<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <u-overlay class="mid-style"></u-overlay>
</template>

<style lang="scss" scoped>
.mid-style {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
