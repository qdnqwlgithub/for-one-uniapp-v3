<script setup lang="ts">
import { defineProps } from 'vue'
import { ItemAsCardType } from '@/types/enums'
defineProps({
  data: {
    type: Array,
    default: []
  }
})

const createItemKvListByItem = (item) => {
  let kvList = []
  kvList.push(item.title)
  return kvList
}

const goToExampleDetailPage = (item) => {
  uni.navigateTo({
    url: `/pages/example/detail/index?id=${item.id}`
  })
}
</script>

<template>
  <view v-for="item in data" :key="item.id">
    <ItemAsCard
      :id="item.id"
      :origin="ItemAsCardType.EXAMPLE"
      class="item"
      @tap="goToExampleDetailPage(item)"
      :image="item.image"
      :kvList="createItemKvListByItem(item)"
      v-model:isCollect="item.is_collect"
      v-model:isCollected="item.is_collected"
    />
    <MidGap />
  </view>
</template>

<style lang="scss" scoped></style>
