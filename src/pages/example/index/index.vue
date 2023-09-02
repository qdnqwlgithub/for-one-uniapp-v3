<script setup lang="ts">
import { MoreStatus } from '@/types/enums'
import ExampleContainer from './example-container.vue'
import { onLoad,onPullDownRefresh,onReachBottom } from '@dcloudio/uni-app'
import { pageExample, listSpaceOptions, listStyleOptions } from '@/api/example'
import { ref, reactive } from 'vue'
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
const doPageQuery = () => {
  if(status.value==MoreStatus.NOMORE||status.value==MoreStatus.LOADING){
    return;
  }
  pageExample(queryWrapper).then((r) => {
    exampleList.value = exampleList.value.concat(r.items)
    totalPage.value = r.pageInfo.totalPage
  }).finally(()=>{
    if(totalPage.value >= queryWrapper.pageNumber){
      status.value=MoreStatus.NOMORE
    }
  })
}
onLoad(() => {
  Promise.all([
    pageExample(queryWrapper),
    listSpaceOptions(),
    listStyleOptions()
  ]).then((r) => {
    // 0
    exampleList.value = r[0].items
    totalPage.value = r[0].pageInfo.totalPage
    // 1
    spaceOptions.value = r[1]
    // 2
    styleOptions.value = r[2]
  })
})

const goToExampleDetailPage = (item) => {
  uni.navigateTo({
    url: `/pages/example/detail/index?id=${item.id}`
  })
}

let show = ref(false)
let status = ref('loadmore')
onReachBottom(()=>{
  doPageQuery()
})

const handleChildEmit=()=>{
  queryWrapper.pageNumber=1;
  status.value=MoreStatus.LOADMORE
  exampleList.value=[]
  doPageQuery()
}
</script>

<template>
  <ForOneHeader />
  <ExampleDropDown
    :spaceOptions="spaceOptions"
    v-model:spaceSelectedIdsArray="queryWrapper.spaceSelectedIdsArray"
    :styleOptions="styleOptions"
    v-model:styleSelectedIdsArray="queryWrapper.styleSelectedIdsArray"
    @handleChildEmit="handleChildEmit"
  />
  <view class="example-container-c">
    <MidGap />
    <MidLayout>
      <ExampleContainer :data="exampleList" />
    </MidLayout>
    <MidOverlay :show="show" />
  </view>
  <u-loadmore :status="status" />
</template>

<style scoped lang="scss"></style>
