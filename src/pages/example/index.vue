<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { pageExample } from '../../api/example'
import { ref, reactive } from 'vue'
let exampleList = ref([])
let queryWrapper = reactive({
  pageNumber: 1,
  pageSize: 5,
  keyword: '',
  styleCategoryIdList: [],
  spaceCategoryIdList: []
})
let styleCategoryList = ref([])
let spaceCategoryList = ref([])
onLoad(()=>{
    
})
</script>

<template></template>

<style scoped lang="scss"></style>
