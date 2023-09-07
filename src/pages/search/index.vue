<script setup lang="ts">
import { ref, reactive, nextTick, defineProps, onBeforeMount } from 'vue'
import { LoadMoreStatus } from '@/types/enums'
import C2Scroll from './c2-scroll'
import C3Scroll from './c3-scroll'
import ItemsContainer from './items-container'
import { getC2ListByC1Id, getC3ListByC1IdAndC2Id, pageGood } from '@/api/search'
let loadMoreStatus = ref(LoadMoreStatus.MORE)
let props = defineProps({
  c1Id: {
    type: String,
    requreid: true
  }
})
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
onBeforeMount(async () => {
  loadMoreStatus.value = LoadMoreStatus.LOADING
  queryWrapper.c1Id = props.c1Id
  c2List.value = await getC2ListByC1Id(queryWrapper.c1Id)
  if (c2List.value.length > 0) {
    queryWrapper.c2Id = c2List.value[0].id
    c3List.value = await getC3ListByC1IdAndC2Id(
      queryWrapper.c1Id,
      queryWrapper.c2Id
    )
  }
  let { pageInfo, items } = await pageGood(queryWrapper)
  goodList.value = items
  totalPage.value = pageInfo.totalPage
  if (totalPage.value <= queryWrapper.pageNumber) {
    loadMoreStatus.value = LoadMoreStatus.NOMORE
  } else {
    loadMoreStatus.value = LoadMoreStatus.MORE
  }
})

const handleC2Tap = async (c2Id) => {
  // 一些初始化的操作
  c3List.value = []
  goodList.value = []
  totalPage.value = 0
  queryWrapper.c2Id = c2Id
  queryWrapper.c3Id = undefined
  queryWrapper.pageNumber = 1
  loadMoreStatus.value = LoadMoreStatus.LOADING
  c3List.value = await getC3ListByC1IdAndC2Id(
    queryWrapper.c1Id,
    queryWrapper.c2Id
  )
  let { pageInfo, items } = await pageGood(queryWrapper)
  goodList.value = items
  totalPage.value = pageInfo.totalPage
  if (totalPage.value <= queryWrapper.pageNumber) {
    loadMoreStatus.value = LoadMoreStatus.NOMORE
  } else {
    loadMoreStatus.value = LoadMoreStatus.MORE
  }
}

const handleC3Tap = async (c3Id) => {
  goodList.value = []
  totalPage.value = 0
  queryWrapper.c3Id = c3Id
  queryWrapper.pageNumber = 1
  loadMoreStatus.value = LoadMoreStatus.LOADING
  let { pageInfo, items } = await pageGood(queryWrapper)
  goodList.value = items
  totalPage.value = pageInfo.totalPage
  if (totalPage.value <= queryWrapper.pageNumber) {
    loadMoreStatus.value = LoadMoreStatus.NOMORE
  } else {
    loadMoreStatus.value = LoadMoreStatus.MORE
  }
}

const handleOnLower = async () => {
  if (loadMoreStatus.value == LoadMoreStatus.NOMORE) {
    return
  }
  queryWrapper.pageNumber++
  let { pageInfo, items } = await pageGood(queryWrapper)
  goodList.value = goodList.value.concat(items)
  totalPage.value = pageInfo.totalPage
  if (totalPage.value <= queryWrapper.pageNumber) {
    loadMoreStatus.value = LoadMoreStatus.NOMORE
  } else {
    loadMoreStatus.value = LoadMoreStatus.MORE
  }
}

const handleInputSearch = async () => {
  goodList.value = []
  totalPage.value = 0
  queryWrapper.pageNumber = 1
  loadMoreStatus.value = LoadMoreStatus.MORE
  let { pageInfo, items } = await pageGood(queryWrapper)
  goodList.value = items
  totalPage.value = pageInfo.totalPage
  if (totalPage.value <= queryWrapper.pageNumber) {
    loadMoreStatus.value = LoadMoreStatus.NOMORE
  } else {
    loadMoreStatus.value = LoadMoreStatus.MORE
  }
}
</script>

<template>
  <view class="flex-container">
    <ForOneHeader :enable-back="true" />
    <view class="search-container">
      <view class="input-container">
        <u-search
          @search="handleInputSearch"
          @clear="handleInputSearch"
          height="70rpx"
          :showAction="false"
          :clearabled="true"
          placeholder="请输入产品名称/型号"
          v-model="queryWrapper.keyword"
        ></u-search>
      </view>
      <view class="mid-row">
        <C2Scroll
          class="c2-scroll"
          :c2List="c2List"
          :c2Id="queryWrapper.c2Id"
          @do="handleC2Tap"
        />
        <view class="right">
          <C3Scroll
            class="c3-scroll"
            :c3List="c3List"
            :c3Id="queryWrapper.c3Id"
            @do="handleC3Tap"
          />
            <ItemsContainer
              :loadMoreStatus="loadMoreStatus"
              @on-lower="handleOnLower"
              class="items-container"
              :itemList="goodList"
            />
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.flex-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.search-container {
  flex: 1;
  overflow: hidden;
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
      display: flex;
      flex-direction: column;
      .items-container {
        flex: 1;
        overflow: hidden;
      }
    }
  }
}
.mid-c2-scroll {
  width: 180rpx;
}
</style>
