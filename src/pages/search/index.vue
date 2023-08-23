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

  <up-row>
    <up-col span="3">
      <C2Scroll
        @emit-c2-id="handleC2IdFromChildren"
        :c2Id="queryWrapper.c2Id"
        class="mid-c2-scroll"
        :c2List="c2List"
      />
    </up-col>
    <up-col span="9">
      <C3Scroll
        :c3List="c3List"
        :c3Id="queryWrapper.c3Id"
        @emit-c2-id="handleC3IdFromChildren"
      />
    </up-col>
  </up-row>
</template>

<script setup lang="ts">
import C2Scroll from './c2-scroll'
import C3Scroll from './c3-scroll'
import { onLoad } from '@dcloudio/uni-app'
import { getC2ListByC1Id, getC3ListByC1IdAndC2Id } from '../../api/search'
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
    })
}
const handleC3IdFromChildren = () => {}
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
.search-container {
  padding: 10rpx;
  box-shadow: 0 0 10rpx #333;
  margin-bottom: 15rpx;
}
.mid-c2-scroll {
  width: 180rpx;
}
</style>
