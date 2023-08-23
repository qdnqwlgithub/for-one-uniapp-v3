<template>
  <MidLayout>
    <IndexTitle
      left-text="SPACE CASE"
      mid-text="空间案例"
      right-text="更多"
    ></IndexTitle>
    <div class="item" v-for="indexCase in indexCaseList" :key="indexCase.id">
      <up-image
        mode="scaleToFill"
        :src="indexCase.image"
        width="700rpx"
        height="400rpx"
      ></up-image>
      <div class="mid-title">
        <span>{{ indexCase.title }}</span>
        <span style="margin: 0 12rpx">|</span>
        <span>{{ indexCase.space }}</span>
      </div>
    </div>
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
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  margin-bottom: 20rpx;
  > .mid-title {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    right: 0;
    bottom: 0;
    color: white;
    padding: 20rpx 30rpx;
  }
}
</style>
