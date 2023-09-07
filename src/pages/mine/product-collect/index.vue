<script setup lang="ts">
import ItemsContainer from '@/pages/search/items-container/index.vue'
import { LoadMoreStatus } from '@/types/enums'
import { ref, reactive, onBeforeMount } from 'vue'
import { onReachBottom } from '@dcloudio/uni-app'
import { pageCollectGood } from '@/api/mine'
let queryWrapper = reactive({
  pageSize: 10,
  pageNumber: 0
})
let loadMoreStatus=ref(LoadMoreStatus.MORE)
let totalPage = ref(0)
let goodList = ref([])
onBeforeMount(() => {
  runPageCollectGood()
})
const runPageCollectGood = async () => {
  if (loadMoreStatus.value == LoadMoreStatus.NOMORE) return
  loadMoreStatus.value = LoadMoreStatus.LOADING
  queryWrapper.pageNumber++
  let { pageInfo, items } = await pageCollectGood(queryWrapper)
  goodList.value = goodList.value.concat(items.map(item=>item.good_info))
  totalPage.value = pageInfo.totalPage
  if (totalPage.value <= queryWrapper.pageNumber) {
    loadMoreStatus.value = LoadMoreStatus.NOMORE
  } else {
    loadMoreStatus.value = LoadMoreStatus.MORE
  }
}

onReachBottom( () => {
  runPageCollectGood()
})
</script>

<template>
  <view class="product-collect-container">
    <ForOneHeader :enable-back="true" />
    <MidGap height="10rpx" />
    <ItemsContainer
      :loadMoreStatus="loadMoreStatus"
      @on-lower="runPageCollectGood"
      class="items-container"
      :itemList="goodList"
    />
  </view>
</template>

<style scoped lang="scss"></style>
