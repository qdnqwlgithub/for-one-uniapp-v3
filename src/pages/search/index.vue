<template>
  <u-search
    height="70rpx"
    :showAction="false"
    :clearabled="true"
    placeholder="请输入产品名称/型号"
    v-model="queryWrapper.keyword"
  ></u-search>
</template>

<script setup lang="ts">
import { getC2ListByC1Id } from '../../api/search';
import { ref, reactive } from 'vue'
let queryWrapper = reactive({
  c1Id: undefined,
  c2Id: undefined,
  c3Id: undefined,
  pageSize: 10,
  pageNumber: 1,
  keyword: ''
})
</script>

<style lang="scss" scoped></style>
