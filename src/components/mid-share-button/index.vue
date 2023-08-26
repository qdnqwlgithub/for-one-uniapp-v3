<script setup lang="ts">
// 我tm真是一个天才 ^o^
</script>

<template>
  <button class="but" open-type="share">
    <MidButton icon-color="black" text="分享" name="share" />
  </button>
</template>

<style scoped lang="scss">
.but {
  background-color: transparent !important;
  padding: 0 !important;
  line-height: inherit !important;
  margin: 0 !important;
  width: auto !important;
  font-weight: 500 !important;
  border-radius: none !important;
  &::after {
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
}
</style>
