<script setup lang="ts">
import { ref } from 'vue'
let show = ref(false)
const handleCollpseClose = () => {
  show.value = false
}
</script>

<template>
  <view class="example-drop-down-container">
    <u-collapse class="locale-collapse" :border="false" @open="show = true">
      <u-collapse-item title="空间" name="Docs guide">
        <text class="u-collapse-content"
          >涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text
        >
      </u-collapse-item>
      <u-collapse-item title="文档指南" name="Docs guide">
        <text class="u-collapse-content"
          >涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text
        >
      </u-collapse-item>
    </u-collapse>
  </view>
  <!-- todo 遮罩层不能遮住选择器 -->
  <u-overlay :show="show" @click="show = false"></u-overlay>
  <u-overlay zIndex="50" :show="show" @click="show = false"></u-overlay>
</template>

<style scoped lang="scss">
.example-drop-down-container {
  position: relative;
  z-index: 10075;
  .locale-collapse {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
