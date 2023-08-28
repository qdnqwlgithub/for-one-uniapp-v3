<script setup lang="ts">
import { collectGood, cancelCollectGood } from '@/api/search'
import * as _ from 'lodash'
import { nextTick, ref,defineEmits,defineProps } from 'vue'
let emits=defineEmits(['update:isCollect'])
let props = defineProps({
  image: {
    type: String
  },
  kvList: {
    type: Array
  },
  isCollect: {
    type: Boolean
  },
  id: {
    type: String
  }
})
let iconFontSize = ref('40rpx')
let loadding = ref([])
const handleTapCollect = _.debounce((id) => {
  if (props.isCollect) {
    cancelCollectGood(id)
      .then((r) => {
        emits('update:isCollect',false)
      })
      .finally(() => {
        nextTick(() => {
        })
      })
  } else {
    collectGood(id)
      .then((r) => {
        emits('update:isCollect',true)
      })
      .finally(() => {
        nextTick(() => {
        })
      })
  }
}, 500)
</script>

<template>
  <view class="item-container">
    <up-image class="mid-img" :src="props.image" width="100%" height="100%" mode="widthFix"></up-image>
    <view class="info">
      <view class="left">
        <view class="kvItem" v-for="kvItem in props.kvList">
          {{ kvItem }}
        </view>
      </view>
      <view class="right">
        <MidIcon
          @tap.native.stop="handleTapCollect(props.id)"
          :width="iconFontSize"
          :height="iconFontSize"
          :name="isCollect ? 'star1' : 'star0-fill'"
        />
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.mid-img{
  aspect-ratio: 1/1;
}
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
