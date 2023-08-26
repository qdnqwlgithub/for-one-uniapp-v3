<script setup lang="ts">
import Gallery from './gallery.vue'
import { ref, defineProps, nextTick } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getExampleById } from '@/api/example.ts'
import Title from '@/pages/detail/title.vue'
import Info from '@/pages/detail/info.vue'
import Relatives from '@/pages/detail/relatives.vue'

let item = ref(undefined)
const props = defineProps({
  id: String
})
let loadding = ref(true)
onLoad(() => {
  getExampleById(props.id)
    .then((r) => {
      item.value = r
    })
    .finally(() => {
      nextTick(() => {
        loadding.value = false
      })
    })
})
</script>

<template>
  <ForOneHeader :enable-back="true" />
  <view class="detail-container" v-if="item">
    <up-image :src="item.image" width="750rpx" height="400rpx"></up-image>
    <MidLayout>
      <Title class="item" :title="item.title" />
    </MidLayout>
    <MidLayout class="info-layout">
      <Info class="info" :infoArray="[{ label: '风格', value: item.style }]" />
    </MidLayout>
    <MidLayout>
      <Relatives
        :relatives="item.include_goods"
        zh="更多花色"
        en="more"
        icon-name="more"
      />
    </MidLayout>
    <MidLayout>
      <Gallery :arr="item.gallery" />
    </MidLayout>
  </view>
  <u-loading-page></u-loading-page>
</template>

<style lang="scss" scoped>
$little-legnth: 10rpx;
.detail-container {
  background-color: #f3f4f6;
  .info-layout {
    margin-top: $little-legnth;
  }
}
</style>
