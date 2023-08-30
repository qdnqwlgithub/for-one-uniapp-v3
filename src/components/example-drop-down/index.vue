<script setup lang="ts">
import { ref } from 'vue'
let show = ref(false)
const handleCollpseClose = () => {
  show.value = false
}
</script>

<template>
  <u-dropdown>
    <u-dropdown-item title="标题1">
      <view class="" style="height: 300px;">
        123
      </view>
    </u-dropdown-item>
    <u-dropdown-item title="标题2">
      456
    </u-dropdown-item>
    <u-dropdown-item title="标题3">
      789
    </u-dropdown-item>
    <u-dropdown-item title="标题4">
      abc
    </u-dropdown-item>
  </u-dropdown>

</template>

<style scoped lang="scss">
</style>
