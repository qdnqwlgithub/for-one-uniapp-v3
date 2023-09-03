<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { ExampleQueryType } from '@/types/enums'
let props = defineProps({
  exampleQueryType: {
    type: Number as () => ExampleQueryType
  }
})
let emits = defineEmits(['update:exampleQueryType'])
</script>

<template>
  <u-overlay
    @tap="emits('update:exampleQueryType', undefined)"
    style="position: absolute"
    :show="props.exampleQueryType != undefined"
  ></u-overlay>
</template>

<style lang="scss" scoped></style>
