<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { reactive, defineProps } from 'vue'
import { getGoodsDetailByIdAndUsageCategoryId } from '@/api/detail'
let item = reactive(undefined)
const props = defineProps({
  id: String,
  usageCategoryId: String
})

onLoad((options) => {
  console.log(props)

  //     this.$route.query.console.log();

  //   let { id, usageCategoryId } = options
  //   getGoodsDetailByIdAndUsageCategoryId(id, usageCategoryId).then((r) => {
  //     item = reactive(r)
  //   })
})
</script>

<template>
  <u-loading-page :loading="true"></u-loading-page>
  <!-- <view v-if=""></view> -->
  <up-image :src="item.image" width="750rpx" height="750rpx"></up-image>
</template>

<style scoped lang="scss"></style>
