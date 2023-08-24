<script setup lang="ts">
import Relatives from './relatives.vue'
import Material from './material.vue'
import Title from './title.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref, reactive, defineProps } from 'vue'
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
</script>

<template>
  <u-loading-page :loading="loading"></u-loading-page>
  <view v-if="item">
    <up-image :src="item.image" width="750rpx" height="750rpx"></up-image>
    <MidLayout>
      <Title :title="item.title" />
      <Info :info-array="item.features" />
      <Material :support="item.support" />
      <Relatives :relatives="item.relatives" />
    </MidLayout>
  </view>
</template>

<style scoped lang="scss"></style>
