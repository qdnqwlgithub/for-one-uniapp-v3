<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
let props = defineProps(['itemList', 'status'])
let emits = defineEmits(['onLower'])
const onLower = () => {
  emits('onLower')
}
import ItemContent from '@/pages/search/items-container/item-content.vue'
</script>

<template>
  <scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="onLower">
    <ItemContent :item-list="itemList" />
    <u-loadmore :status="props.status" />
  </scroll-view>
</template>

<style scoped lang="scss">
.scroll-Y {
  width: 100%;
  height: 100%;
}
</style>
