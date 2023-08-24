<script setup lang="ts">
import Item from './item.vue'
import { onLoad } from '@dcloudio/uni-app'
import { pageExample } from '../../api/example'
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
</script>

<template>
  <MidLayout>
    <Item
      class="item"
      v-for="item in exampleList"
      :key="item.id"
      :item="item"
    ></Item>
  </MidLayout>
</template>

<style scoped lang="scss">
.item {
  margin-bottom: 20rpx;
}
</style>
