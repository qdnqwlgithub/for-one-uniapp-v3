<script setup lang="ts">
import { ItemAsCardType } from '@/types/enums'
import { collectGood, cancelCollectGood } from '@/api/search'
import { switchStatus } from '@/api/example'
import * as _ from 'lodash'
import { nextTick, ref, defineEmits, defineProps, computed } from 'vue'
let emits = defineEmits(['update:isCollect', 'update:isCollected'])
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
  isCollected: {
    type: Boolean
  },
  id: {
    type: String
  },
  origin: {
    type: Number as () => ItemAsCardType,
    default: ItemAsCardType.PRODUCT
  }
})
let iconFontSize = ref('40rpx')
let loadding = ref([])
const handleTapCollectByProduct = _.debounce((id) => {
  if (props.isCollect) {
    cancelCollectGood(id).then(() => {
      emits('update:isCollect', true)
    })
  } else {
    collectGood(id).then(() => {
      emits('update:isCollect', true)
    })
  }
}, 500)

const handleTapCollectByExample = _.debounce((id) => {
  switchStatus(id, Number(!props.isCollected)).then(() => {
    emits('update:isCollected', !props.isCollected)
  })
}, 500)
</script>

<template>
  <view class="item-container">
    <up-image
      :class="{
        'product-img': props.origin === ItemAsCardType.PRODUCT,
        'example-img': props.origin == ItemAsCardType.EXAMPLE
      }"
      :src="props.image"
      width="100%"
      height="100%"
      mode="widthFix"
    ></up-image>
    <view class="info">
      <view class="left">
        <view class="kvItem" v-for="kvItem in props.kvList">
          {{ kvItem }}
        </view>
      </view>
      <view class="right">
        <MidIcon
          @tap.native.stop="
            props.origin === ItemAsCardType.EXAMPLE
              ? handleTapCollectByExample(props.id)
              : handleTapCollectByProduct(props.id)
          "
          :width="iconFontSize"
          :height="iconFontSize"
          :name="
            props.origin === ItemAsCardType.EXAMPLE
              ? props.isCollected
                ? 'star1'
                : 'star0-fill'
              : props.isCollect
              ? 'star1'
              : 'star0-fill'
          "
        />
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.product-img {
  aspect-ratio: 1/1;
}
.example-img {
  aspect-ratio: 16/9;
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
