<script setup lang="ts">
import { MoreStatus, ExampleQueryType } from '@/types/enums'
import ExampleContainer from './example-container.vue'
import { onLoad, onReachBottom } from '@dcloudio/uni-app'
import {
  pageExample,
  listSpaceOptions,
  listStyleOptions,
  pageCollectExample
} from '@/api/example'
import { ref, reactive, defineProps, nextTick } from 'vue'
enum QueryType {
  SPACE,
  STYLE
}
let exampleQueryType = ref(undefined)
let loading = ref(true)
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
const doPageQuery = () => {
  let p = undefined
  if (props.isComponent) {
    p = pageCollectExample(queryWrapper, task)
  } else {
    p = pageExample(queryWrapper, task)
  }
  return p
}

const thenDoPageQuery = (r) => {
  exampleList.value = exampleList.value.concat(r.items)
  totalPage.value = r.pageInfo.totalPage
}

const finallyDoPageQuery = () => {
  nextTick(() => {
    if (totalPage.value <= queryWrapper.pageNumber) {
      status.value = MoreStatus.NOMORE
    } else {
      status.value = MoreStatus.LOADMORE
    }
    loading.value = false
  })
}

onLoad(() => {
  Promise.all([
    pageExample(queryWrapper),
    listSpaceOptions(),
    listStyleOptions()
  ])
    .then((r) => {
      // 0
      thenDoPageQuery(r[0])
      // 1
      spaceOptions.value = r[1]
      // 2
      styleOptions.value = r[2]
    })
    .finally(() => {
      finallyDoPageQuery()
    })
})

const goToExampleDetailPage = (item) => {
  uni.navigateTo({
    url: `/pages/example/detail/index?id=${item.id}`
  })
}
let status = ref(MoreStatus.LOADMORE)
onReachBottom(() => {
  if (loading.value) return
  if (status.value == MoreStatus.NOMORE) {
    loading.value = false
    return
  }
  loading.value = true
  queryWrapper.pageNumber++
  doPageQuery()
    .then((r) => {
      thenDoPageQuery(r)
    })
    .catch(() => {
      queryWrapper.pageNumber--
    })
    .finally(() => {
      finallyDoPageQuery()
    })
})

const doSearchByDropdown = () => {
  if (loading.value) return
  loading.value = true
  status.value = MoreStatus.LOADING
  queryWrapper.pageNumber = 1
  totalPage.value = 0
  exampleList.value = []
  doPageQuery()
    .then((r) => {
      thenDoPageQuery(r)
    })
    .finally(() => {
      finallyDoPageQuery()
    })
}

const handleAboutShow = (showFromChild) => {
  show.value = showFromChild
}
</script>

<template>
  <ForOneHeader />
  <u-search
    height="65rpx"
    :clearabled="true"
    :showAction="false"
    v-model="queryWrapper.keyword"
  ></u-search>
  <ExampleDropDown
    :spaceOptions="spaceOptions"
    v-model:spaceSelectedIdsArray="queryWrapper.spaceSelectedIdsArray"
    :styleOptions="styleOptions"
    v-model:styleSelectedIdsArray="queryWrapper.styleSelectedIdsArray"
    @search="doSearchByDropdown"
    v-model:exampleQueryType="exampleQueryType"
  />
  <view class="example-container-c">
    <MidGap />
    <MidLayout>
      <ExampleContainer :data="exampleList" />
    </MidLayout>
    <MidOverlay v-model:exampleQueryType="exampleQueryType" />
  </view>
  <u-loadmore :status="status" />
  <u-loading-page :loading="loading"></u-loading-page>
</template>

<style scoped lang="scss">
.example-container-c {
  position: relative;
}
</style>
