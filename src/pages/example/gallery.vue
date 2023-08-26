<script setup lang="ts">
import Section from '@/components/Section/index.vue'
import { defineProps, ref } from 'vue'
let props = defineProps({
  arr: Array
})
</script>

<template>
  <Section icon-name="furniture" zh="实景案例" en="EXAMPLE" />
  <up-image
    mode="widthFix"
    :key="item"
    v-for="item in props.arr"
    :src="item"
    width="100%"
    height="750rpx"
    radius="15rpx"
  ></up-image>
</template>

<style scoped lang="scss"></style>
