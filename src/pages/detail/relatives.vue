<script setup lang="ts">
import Section from '@/components/Section/index.vue'
import { defineProps, ref } from 'vue'
import ItemAsCard from '@/components/item-as-card/index.vue'
let props = defineProps({
  relatives: {
    type: Object
  },
  en: {
    type: String
  },
  zh: {
    type: String
  },
  iconName: {
    type: String
  }
})
let imageSize = ref('320rpx')
</script>

<template>
  <Section :icon-name="iconName" :zh="zh" :en="en">
    <view class="content">
      <ItemAsCard v-for="item in relatives" :item="item" />
    </view>
  </Section>
</template>

<style scoped lang="scss">
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  // todo 不生效
  justify-items: space-between;
  // .item {
  //   position: relative;
  //   margin-bottom: 20rpx;
  //   .info {
  //     position: absolute;
  //     bottom: 0;
  //     left: 0;
  //     right: 0;
  //     background-color: rgba(0, 0, 0, 0.5);
  //     color: white;
  //     font-size: 14rpx;
  //     padding: 12rpx;
  //     box-sizing: border-box;
  //   }
  // }
}
</style>
