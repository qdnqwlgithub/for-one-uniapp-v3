<script setup lang="ts">
import { collectGood, cancelCollectGood } from '@/api/search'
import * as _ from 'lodash'
import { nextTick, ref } from 'vue'
import { defineProps } from 'vue'
defineProps(['item'])
const goToDetailPage = (item) => {
  uni.navigateTo({
    url: `/pages/detail/index?id=${item.id}&usageCategoryId=${item.usage_category_id}`
  })
}
let iconFontSize = ref('36rpx')
let loadding = ref([])
const handleTapCollect = _.debounce((item) => {
  if (loadding[item.id]) {
    return
  }
  loadding[item.id] = true
  // todo 代优化
  if (item.is_collected) {
    cancelCollectGood(item.id)
      .then((r) => {
        item.is_collected = false
      })
      .finally(() => {
        nextTick(() => {
          delete loadding[item.id]
        })
      })
  } else {
    collectGood(item.id)
      .then((r) => {
        item.is_collected = true
      })
      .finally(() => {
        nextTick(() => {
          delete loadding[item.id]
        })
      })
  }
}, 500)
</script>

<template>
  <view class="item-container" @tap="goToDetailPage(item)">
    <up-image :src="item.image" width="260rpx" height="260rpx"></up-image>
    <view class="info">
      <view class="left">
        <view class="name">名称：{{ item.name }}</view>
        <view class="code">型号：{{ item.code }}</view>
      </view>
      <view class="right">
        <MidIcon
          @tap.native.stop="handleTapCollect(item)"
          :width="iconFontSize"
          :height="iconFontSize"
          :name="item.is_collected ? 'star1' : 'star0'"
        />
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
$global-width: 120rpx;
.item-container {
  margin-top: 20rpx;
  width: 260rpx;
  border-radius: 15rpx;
  overflow: hidden;
}
.info {
  background-color: black;
  color: white;
  display: flex;
  font-size: 24rpx;
  box-sizing: border-box;
  padding: 14rpx;
  .left {
    width: 170rpx;
    .name,
    .code {
      zoom: 85%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .name {
      margin-bottom: 10rpx;
    }
  }
  .right {
    flex: 1;
    text-align: right;
  }
}
</style>
