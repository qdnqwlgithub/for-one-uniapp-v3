<script setup lang="ts">
import { LoadMoreStatus, ExampleQueryType } from '@/types/enums'
import { onReachBottom } from '@dcloudio/uni-app'
import ExampleContainer from './example-container.vue'
import {
  pageExample,
  listSpaceOptions,
  listStyleOptions,
  pageCollectExample
} from '@/api/example'
import { ref, reactive, defineProps, onBeforeMount } from 'vue'
enum QueryType {
  SPACE,
  STYLE
}
onBeforeMount(async () => {
  doPageQuery()
  spaceOptions.value = await listSpaceOptions()
  styleOptions.value = await listStyleOptions()
})
let loadMoreStatus = ref(LoadMoreStatus.NOMORE)
let exampleQueryType = ref(undefined)
let props = defineProps({
  isComponent: {
    type: Boolean,
    default: false
  }
})
let exampleList = ref([])
let queryWrapper = reactive({
  pageNumber: 1,
  pageSize: 5,
  keyword: '',
  styleSelectedIdsArray: [],
  spaceSelectedIdsArray: []
})
let totalPage = ref(0)
let styleOptions = ref([])
let spaceOptions = ref([])
const doPageQuery = async () => {
  loadMoreStatus.value = LoadMoreStatus.LOADING
  let r = undefined
  if (props.isComponent) {
    r = await pageCollectExample(queryWrapper)
  } else {
    r = await pageExample(queryWrapper)
  }
  let { pageInfo, items } = r
  exampleList.value.push(...items)
  totalPage.value = pageInfo.totalPage
  if (totalPage.value <= queryWrapper.pageNumber) {
    loadMoreStatus.value = LoadMoreStatus.NOMORE
  } else {
    loadMoreStatus.value = LoadMoreStatus.MORE
  }
}
onReachBottom(() => {
  if (loadMoreStatus.value == LoadMoreStatus.NOMORE) {
    return
  }
  queryWrapper.pageNumber++
  doPageQuery()
})

const doSearchByDropdown = () => {
  queryWrapper.pageNumber = 1
  totalPage.value = 0
  exampleList.value = []
  doPageQuery()
}

const handleInputSearch = async () => {
  queryWrapper.pageNumber = 1
  totalPage.value = 0
  exampleList.value = []
  doPageQuery()
}
</script>

<template>
  <view class="example-index-container">
    <ForOneHeader v-if="!isComponent" />
    <view class="input-container">
      <u-search
        @search="handleInputSearch"
        @clear="handleInputSearch"
        height="70rpx"
        :clearabled="true"
        :showAction="false"
        v-model="queryWrapper.keyword"
      ></u-search>
    </view>
    <ExampleDropDown
      :spaceOptions="spaceOptions"
      v-model:spaceSelectedIdsArray="queryWrapper.spaceSelectedIdsArray"
      :styleOptions="styleOptions"
      v-model:styleSelectedIdsArray="queryWrapper.styleSelectedIdsArray"
      @search="doSearchByDropdown"
      v-model:exampleQueryType="exampleQueryType"
    />
    <view class="example-container-c">
      <MidGap height="10rpx" />
      <MidLayout>
        <ExampleContainer :data="exampleList" />
        <uni-load-more :status="loadMoreStatus"></uni-load-more>
      </MidLayout>
      <MidOverlay v-model:exampleQueryType="exampleQueryType" />
    </view>
  </view>
</template>

<style scoped lang="scss">
.example-index-container {
  .input-container {
    padding: 0 10rpx;
  }
}
.example-container-c {
  position: relative;
}
</style>
