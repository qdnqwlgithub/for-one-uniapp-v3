<script setup lang="ts">
import { ItemAsCardType } from '@/types/enums'
import { onLoad } from '@dcloudio/uni-app'
import { pageExample } from '@/api/example'
import { ref, reactive } from 'vue'
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
  pageExample(queryWrapper).then((r) => {
    exampleList.value = r.items
    totalPage.value = r.pageInfo.page
  })
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
  <ExampleDropDown />
  <MidLayout>
    <ItemAsCard
      :id="item.id"
      :origin="ItemAsCardType.EXAMPLE"
      class="item"
      @tap="goToExampleDetailPage(item)"
      :image="item.image"
      :kvList="createItemKvListByItem(item)"
      v-model:isCollect="item.is_collect"
      v-model:isCollected="item.is_collected"
      v-for="item in exampleList"
      :key="item.id"
    />
  </MidLayout>
  <u-popup :show="show">
    <view>
      <text>出淤泥而不染，濯清涟而不妖</text>
    </view>
  </u-popup>
</template>

<style scoped lang="scss">
.item {
  margin-top: 20rpx;
}
</style>
