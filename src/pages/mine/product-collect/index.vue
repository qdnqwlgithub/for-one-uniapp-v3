<script setup lang="ts">
import ItemsContainer from '@/pages/search/items-container/index.vue'
import { ref, reactive } from 'vue'
import { pageCollectGood } from '@/api/mine'
import { onLoad } from '@dcloudio/uni-app'
let queryWrapper = reactive({
  pageSize: 5,
  pageNumber: 0
  // other parameter
})
let totalPage = ref(0)
let goodList = ref([])
onLoad(() => {
  runPageCollectGood()
})
const runPageCollectGood = () => {
  queryWrapper.pageNumber++
  pageCollectGood(queryWrapper)
    .then((r) => {
      let { items, pageInfo } = r
      goodList.value = goodList.value.concat(
        items.map((item) => item['good_info'])
      )
      totalPage.value = pageInfo.totalPage
    })
    .catch(() => {
      queryWrapper.pageNumber--
    })
    .finally(() => {})
}
</script>

<template>
  <view class="product-collect-container">
    <ForOneHeader :enable-back="true" />
    <MidGap height="10rpx" />
    <ItemsContainer
      :status="status"
      @on-lower="runPageCollectGood"
      class="items-container"
      :itemList="goodList"
    />
  </view>
</template>

<style scoped lang="scss"></style>
