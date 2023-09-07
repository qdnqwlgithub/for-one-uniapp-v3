<script setup lang="ts">
import { defineProps } from 'vue'
let props = defineProps({
  itemList: Array
})

const goToProductDetailPage = (item) => {
  uni.navigateTo({
    url: `/pages/detail/index?id=${item.id}&usageCategoryId=${item.usage_category_id}`
  })
}
const createItemKvListByItem = (item) => {
  let kvList = []
  kvList.push(`名称：${item.name}`)
  kvList.push(`型号：${item.code}`)
  return kvList
}
</script>

<template>
  <view class="container">
    <ItemAsCard
      @tap="goToProductDetailPage(item)"
      v-model:isCollect="item.is_collected"
      :id="item.id"
      :key="item.id"
      class="item"
      v-for="item in props.itemList"
      :image="item.image"
      :kv-list="createItemKvListByItem(item)"
    ></ItemAsCard>
  </view>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10rpx;
  column-gap: 10rpx;
}
</style>
