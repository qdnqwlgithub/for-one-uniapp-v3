<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
let props = defineProps(['itemList', 'loadMoreStatus'])
let emits = defineEmits(['onLower'])
const onLower = () => {
  emits('onLower')
}
import ItemContent from '@/pages/search/items-container/item-content.vue'
</script>

<template>
  <scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="onLower">
    <ItemContent :item-list="props.itemList" />
    <uni-load-more :status="props.loadMoreStatus"></uni-load-more>
  </scroll-view>
</template>

<style scoped lang="scss">
.scroll-Y {
  width: 100%;
  height: 100%;
  padding: 0 10rpx;
  box-sizing: border-box;
}
</style>
