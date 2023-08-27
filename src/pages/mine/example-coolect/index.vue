<script setup lang="ts">
import { reactive, ref } from 'vue'
let loading = ref(true)
import { pageCollectExample } from '@/@api/mine.ts'
import { onLoad } from '@dcloudio/uni-app'
let queryWrapper = reactive({
  pageSize: 5,
  pageNumber: 1,
  // other parameter
  styleCategoryId: [],
  styleCategoryId: [],
  keyword: ''
})
let totalPage = ref(0)
</script>

<template>
  <view class="example-coolect-container" v-if="">
    <Item v-for=""></Item>
  </view>
  <u-loading-page :loading="true"></u-loading-page>
</template>

<style scoped lang="scss">
.collect-container {
  display: grid;
  grid-template-rows: 1ft 1ft;
}
</style>
