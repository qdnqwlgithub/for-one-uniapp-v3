<template>
  <up-row class="mid-row">
    <up-col span="4">
      <view class="left">{{ leftText }}</view>
    </up-col>
    <up-col span="4">
      <view class="mid">{{ midText }}</view>
    </up-col>
    <up-col span="4">
      <view v-if="rightText" @tap="emitTapRight" class="right">{{
        rightText
      }}</view>
    </up-col>
  </up-row>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
defineProps(['leftText', 'midText', 'rightText'])
let emits = defineEmits(['tapRight'])
const emitTapRight = () => {
  emits('tapRight')
}
</script>

<style lang="scss" scoped>
$midHeight: 120rpx;

.mid-row {
  > view {
    height: $midHeight;
    line-height: $midHeight;
  }
}
.left {
  font-size: 14rpx;
  text-align: left;
}
.mid {
  font-size: 30rpx;
  font-weight: 500;
  text-align: center;
}
.right {
  font-size: 14rpx;
  text-align: right;
}
</style>
