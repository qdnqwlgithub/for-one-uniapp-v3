<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
let props = defineProps(['itemList', 'status'])
let emits = defineEmits(['onLower'])
const onLower = () => {
  emits('onLower')
}
</script>

<template>
  <scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="onLower">
    <view class="container">
      <ItemAsCard
        :key="item.id"
        class="item"
        v-for="item in itemList"
        :image="item.image"
      ></ItemAsCard>
    </view>
    <u-loadmore :status="props.status" />
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
