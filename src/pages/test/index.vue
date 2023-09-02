<script setup lang="ts">
import { ref, reactive } from 'vue'

let show = ref(true)
const open = () => {
  show.value = true
}

const checkboxValue1 = reactive([])

// 基本案列数据
const checkboxList1 = reactive([
  {
    name: '苹果',
    disabled: false
  },
  {
    name: '香蕉',
    disabled: false
  },
  {
    name: '橙子',
    disabled: false
  }
])

const checkboxChange = (n) => {
  console.log('change', n)
}
</script>

<template>
  <view>example drop down</view>
</template>
