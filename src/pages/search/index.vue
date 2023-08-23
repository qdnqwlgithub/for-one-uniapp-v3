<template>
  <view class="search-container">
    <u-search
      height="70rpx"
      :showAction="false"
      :clearabled="true"
      placeholder="请输入产品名称/型号"
      v-model="queryWrapper.keyword"
    ></u-search>
  </view>

  <C2Scroll class="mid-c2-scroll" :c2List="c2List" />
</template>

<script setup lang="ts">
import C2Scroll from './c2-scroll'
import { onLoad } from '@dcloudio/uni-app'
import { getC2ListByC1Id } from '../../api/search'
import { ref, reactive } from 'vue'
let queryWrapper = reactive({
  c1Id: undefined,
  c2Id: undefined,
  c3Id: undefined,
  pageSize: 10,
  pageNumber: 1,
  keyword: ''
})
let c2List = ref([])
let c3List = ref([])
onLoad((options) => {
  queryWrapper.c1Id = '墙板'
  initC2List()
})
const initC2List = () => {
  getC2ListByC1Id(queryWrapper.c1Id).then((r) => {
    c2List.value = r
  })
}
const initC3List = () => {}
</script>

<style lang="scss" scoped>
.search-container {
  padding: 10rpx;
  box-shadow: 0 0 10rpx #333;
  margin-bottom: 15rpx;
}
.mid-c2-scroll {
  width: 180rpx;
}
</style>
