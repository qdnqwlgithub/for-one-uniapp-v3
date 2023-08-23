<template>
  <MidLayout>
    <IndexTitle
      left-text="UNION"
      mid-text="专店加盟"
      right-text="更多"
    ></IndexTitle>
    <div class="item" v-for="union in unionList" :key="union.id">
      <up-image
        mode="scaleToFill"
        :src="union.image"
        width="700rpx"
        height="400rpx"
      ></up-image>
      <div class="mid-title">
        <span>{{ union.title }}</span>
        <span style="margin: 0 12rpx">|</span>
        <span>{{ union.space }}</span>
      </div>
    </div>
  </MidLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IndexTitle from './index-title.vue'
import { getUnionListOfIndex } from '@/api/index'
import { onBeforeMount } from 'vue'
let unionList = ref([])
onBeforeMount(() => {
  getUnionListOfIndex().then((r) => {
    unionList.value = r
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
