<script setup lang="ts">
import { ItemAsCardType } from '@/types/enums'
import { onLoad } from '@dcloudio/uni-app'
import { pageCollectExample } from '@/api/mine'
import { pageExample } from '@/api/example'
import { ref, reactive, defineProps } from 'vue'
let props = defineProps({
  status: {
    type: Number,
    default: 0
  }
})
let exampleList = ref([])
let queryWrapper = reactive({
  pageNumber: 1,
  pageSize: 5,
  keyword: '',
  styleCategoryIdList: [],
  spaceCategoryIdList: []
})
let totalPage = ref(0)
let styleCategoryList = ref([])
let spaceCategoryList = ref([])
const doPageQuery = () => {
  if (props.status == 0) {
    pageExample(queryWrapper).then((r) => {
      exampleList.value = r.items
      totalPage.value = r.pageInfo.page
    })
  } else {
    pageCollectExample(queryWrapper).then((r) => {
      exampleList.value = r.items
      totalPage.value = r.pageInfo.page
    })
  }
}
onLoad(() => {
  doPageQuery()
})

const goToExampleDetailPage = (item) => {
  uni.navigateTo({
    url: `/pages/example/detail?id=${item.id}`
  })
}

const createItemKvListByItem = (item) => {
  let kvList = []
  kvList.push(item.title)
  return kvList
}

let show = ref(false)
</script>

<template>
<!--  <ExampleDropDown />-->

  <MidLayout>
    <ItemAsCard
      :id="item.id"
      :origin="ItemAsCardType.EXAMPLE"
      class="item"
      @tap="goToExampleDetailPage(item)"
      :image="item.image"
      :kvList="createItemKvListByItem(item)"
      v-model:isCollected="item.is_collected"
      v-for="item in exampleList"
      :key="item.id"
    />
  </MidLayout>
</template>

<style scoped lang="scss">
.item {
  margin-top: 20rpx;
}
</style>
