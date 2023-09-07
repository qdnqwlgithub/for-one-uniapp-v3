<template>
  <MidLayout>
    <IndexTitle left-text="UNION" mid-text="专店加盟"></IndexTitle>
    <view v-for="union in unionList" :key="union.id">
      <ImageAndFont :image-path="union.image">
        <template #left>{{ union.title }}</template>
      </ImageAndFont>
      <MidGap />
    </view>
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
.mid-image-font {
  margin-bottom: 15rpx;
}
</style>
