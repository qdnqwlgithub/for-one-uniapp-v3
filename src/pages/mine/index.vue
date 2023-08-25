<script setup lang="ts"></script>

<template>
  <u-cell-group>
    <u-cell title="产品收藏" arrow-direction="down">
      <template #icon>
        <u-icon size="32" name="star"></u-icon>
      </template>
      <!-- <u-badge count="99" :absolute="false" slot="right-icon"></u-badge> -->
      <template #right-icon>
        <u-icon size="32" name="arrow-up"></u-icon>
      </template>
    </u-cell>
    <u-cell title="案例收藏" arrow-direction="down">
      <template #icon>
        <u-icon size="32" name="star-fill"></u-icon>
      </template>
      <!-- <u-badge count="99" :absolute="false" slot="right-icon"></u-badge> -->
      <template #right-icon>
        <u-icon size="32" name="arrow-up"></u-icon>
      </template>
    </u-cell>
  </u-cell-group>
</template>

<style scoped lang="scss"></style>
