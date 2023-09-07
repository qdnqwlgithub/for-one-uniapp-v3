<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getCategoryList } from '@/api'
let categoryList = ref([])
onLoad(() => {
  getCategoryList().then((r) => {
    categoryList.value = r
  })
})
const goToSearchPage = (item) => {
  uni.navigateTo({
    url: `/pages/search/index?c1Id=${item.path}`
  })
}
</script>

<template>
  <view class="category-container">
    <MidLayout>
      <view class="title">
        <view class="zh">四大品类产品展示</view>
        <view class="en">FOUR CATEGORIES</view>
        <view class="en">OF PRODUCT DISPLAY</view>
      </view>
      <view class="grid">
        <up-image
          @tap="goToSearchPage(item)"
          mode="widthFix"
          width="100%"
          v-for="item in categoryList"
          :key="item.id"
          :src="item.image"
        ></up-image>
      </view>
    </MidLayout>
  </view>
</template>

<style scoped lang="scss">
.category-container {
  .title {
    padding: 20rpx 0;
    .zh {
      font-size: 32rpx;
      font-weight: 700;
      margin-bottom: 8rpx;
    }
    .en {
      $locale-size: 22rpx;
      font-size: 16rpx;
      font-weight: 200;
      height: $locale-size;
      line-height: $locale-size;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10rpx;
  }
}
</style>
