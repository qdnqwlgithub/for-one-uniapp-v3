<script setup lang="ts">
import { collectGood, cancelCollectGood } from '@/api/search'
import * as _ from 'lodash'
import { nextTick, ref } from 'vue'
import { defineProps } from 'vue'
let props = defineProps({
  image: {
    type: String
  },
  kvList: {
    type: Array
  },
  isCollect: {
    type: Boolean
  }
})
let iconFontSize = ref('40rpx')
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
  <view class="item-container">
    <up-image :src="props.image" width="100%" mode="widthFix"></up-image>
    <view class="info">
      <view class="left">
        <view class="kvItem" v-for="kvItem in props.kvList">
          {{ kvItem }}
        </view>
      </view>
      <view class="right">
        <MidIcon
          @tap.native.stop="handleTapCollect(item)"
          :width="iconFontSize"
          :height="iconFontSize"
          :name="isCollect ? 'star1' : 'star0-fill'"
        />
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.item-container {
  //margin-top: 20rpx;
  width: 100%;
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
    width: 80%;
    .kvItem {
      zoom: 85%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .right {
    flex: 1;
    text-align: right;
  }
}
</style>
