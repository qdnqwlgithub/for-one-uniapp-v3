<template>
  <MidLayout>
    <IndexTitle
      left-text="SPACE CASE"
      mid-text="空间案例"
      right-text="更多"
      @tapRight="switchToExample"
    ></IndexTitle>
    <view v-for="indexCase in indexCaseList" :key="indexCase.id">
      <ImageAndFont :image-path="indexCase.image">
        <template #left>{{ indexCase.title }}</template>
      </ImageAndFont>
      <MidGap />
    </view>
  </MidLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IndexTitle from './index-title.vue'
import { getCaseListOfIndex } from '@/api/index'
import { onBeforeMount } from 'vue'
let indexCaseList = ref([])
onBeforeMount(() => {
  getCaseListOfIndex().then((r) => {
    indexCaseList.value = r
  })
})
const switchToExample = () => {
  uni.switchTab({ url: '/pages/example/index/index' })
}
</script>

<style lang="scss" scoped>
.mid-image-font {
  margin-bottom: 15rpx;
}
// .item {
//   position: relative;
//   margin-bottom: 20rpx;
//   > .mid-title {
//     position: absolute;
//     background-color: rgba(0, 0, 0, 0.5);
//     left: 0;
//     right: 0;
//     bottom: 0;
//     color: white;
//     padding: 20rpx 30rpx;
//   }
// }
</style>
