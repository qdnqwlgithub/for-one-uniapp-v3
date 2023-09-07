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
    <MidGap />
    <MidLayout>
      <view class="content">
        <ItemsContainer
          :status="status"
          @on-lower="runPageCollectGood"
          class="items-container"
          :itemList="goodList"
        />
      </view>
    </MidLayout>
    <MidGap />
  </view>
</template>

<style scoped lang="scss">
// .product-collect-container {
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   .content {
//     flex: 1;
//     overflow: hidden;
//   }
// }
</style>
