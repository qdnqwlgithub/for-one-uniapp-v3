<script setup lang="ts">
import { collectGood, cancelCollectGood } from '@/api/search'
import * as _ from 'lodash'
import Relatives from './relatives.vue'
import Material from './material.vue'
import Title from './title.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref, reactive, defineProps, nextTick } from 'vue'
import { getGoodsDetailByIdAndUsageCategoryId } from '@/api/detail'
let item = reactive(undefined)
import Info from './info.vue'
const props = defineProps({
  id: String,
  usageCategoryId: String
})
let loading = ref(true)

onLoad(() => {
  getGoodsDetailByIdAndUsageCategoryId(props.id, props.usageCategoryId).then(
    (r) => {
      item = reactive(r)
      loading.value = false
    }
  )
})

const handleDoCollectFromChild = _.debounce((item) => {
  // todo 代优化
  if (item.is_collected) {
    cancelCollectGood(item.id).then((r) => {
      item.is_collected = false
    })
  } else {
    collectGood(item.id).then((r) => {
      item.is_collected = true
    })
  }
}, 500)
</script>

<template>
  <ForOneHeader :enable-back="true" />
  <u-loading-page :loading="loading"></u-loading-page>
  <view v-if="item">
    <up-image :src="item.image" width="750rpx" height="750rpx"></up-image>
    <MidLayout>
      <Title :item="item" @do-collect="handleDoCollectFromChild(item.good)" />
      <Info :info-array="item.features" />
      <Material :support="item.support" />
      <Relatives
        icon-name="more"
        en="RELATIVES"
        :zh="item.relatives.title"
        :relatives="item.relatives.items"
      />
    </MidLayout>
  </view>
</template>

<style scoped lang="scss"></style>
