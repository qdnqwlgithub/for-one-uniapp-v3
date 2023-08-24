<template>
  <view class="search-container">
    <view class="input-container">
      <u-search
        height="70rpx"
        :showAction="false"
        :clearabled="true"
        placeholder="请输入产品名称/型号"
        v-model="queryWrapper.keyword"
      ></u-search>
    </view>
    <view class="mid-row">
      <C2Scroll class="c2-scroll" :c2List="c2List" :c2Id="queryWrapper.c2Id" />
      <view class="right">
        <C3Scroll
          class="c3-scroll"
          :c3List="c3List"
          :c3Id="queryWrapper.c3Id"
        />
        <ItemContainer :itemList="goodList" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import C2Scroll from './c2-scroll'
import C3Scroll from './c3-scroll'
import ItemContainer from './item-container'
import { onLoad } from '@dcloudio/uni-app'
import {
  getC2ListByC1Id,
  getC3ListByC1IdAndC2Id,
  pageGood
} from '../../api/search'
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
let goodList = ref([])
let totalPage = ref(0)
onLoad((options) => {
  queryWrapper.c1Id = '墙板'
  initC2List()
})
const initC2List = () => {
  getC2ListByC1Id(queryWrapper.c1Id)
    .then((r) => {
      c2List.value = r
      if (c2List.value && c2List.value[0]) {
        queryWrapper.c2Id = c2List.value[0].id
      }
      return Promise.resolve
    })
    .then(() => {
      if (queryWrapper.c2Id) {
        initC3List()
      }
      return Promise.resolve
    })
    .then(() => {
      pageGood(queryWrapper).then((r) => {
        goodList.value = r.items
        totalPage.value = r.pageInfo.totalPage
      })
    })
}
const handleC3IdFromChildren = (c3Id) => {
  queryWrapper.c3Id = c3Id
}
const initC3List = () => {
  getC3ListByC1IdAndC2Id(queryWrapper.c1Id, queryWrapper.c2Id).then((r) => {
    c3List.value = r
  })
}
const handleC2IdFromChildren = (c2Id) => {
  queryWrapper.c2Id = c2Id
}
</script>

<style lang="scss" scoped>
// $container-height: cala(100vh - )

.search-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .input-container {
    padding: 10rpx;
    box-shadow: 0 0 10rpx #333;
    margin-bottom: 15rpx;
  }

  .mid-row {
    flex: 1;
    display: flex;
    overflow: hidden;
    .c2-scroll {
      width: 150rpx;
    }
    .right {
      flex: 1;
      overflow: hidden;
    }
  }
}
.mid-c2-scroll {
  width: 180rpx;
}
</style>
