<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
let props = defineProps(['itemList', 'status'])
let emits = defineEmits(['onLower'])
const onLower = () => {
  emits('onLower')
}
const createItemKvListByItem = (item) => {
  let kvList = []
  kvList.push(`名称：${item.name}`)
  kvList.push(`型号：${item.code}`)
  return kvList
}
const goToProductDetailPage=(item)=>{
  uni.navigateTo({
    url: `/pages/detail/index?id=${item.id}&usageCategoryId=${item.usage_category_id}`
  })
}
</script>

<template>
  <scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="onLower">
    <view class="container">
      <ItemAsCard
        @tap="goToProductDetailPage(item)"
        :key="item.id"
        class="item"
        v-for="item in itemList"
        :image="item.image"
        :kv-list="createItemKvListByItem(item)"
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
    //align-items: center;
    //justify-items: center;
    row-gap: 20rpx;
    column-gap: 20rpx;
  }
}
</style>
