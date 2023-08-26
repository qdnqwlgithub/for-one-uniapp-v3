<script setup lang="ts">
import { defineProps } from 'vue'
let proprs = defineProps({
  autoBack: {
    type: Boolean,
    default: true
  },
  enableBack: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <u-navbar
    title="FORONE"
    :autoBack="proprs.autoBack"
    :leftIconSize="enableBack ? '40rpx' : '0'"
    :placeholder="true"
    :border="true"
  >
  </u-navbar>
</template>

<style scoped lang="scss"></style>
