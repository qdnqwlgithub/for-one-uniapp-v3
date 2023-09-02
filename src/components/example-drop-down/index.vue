<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
let show = ref(false)
let active = ref(undefined)
const handleCollpseClose = () => {
  show.value = false
}
let props = defineProps({
  spaceOptions: {
    type: Array,
    default: []
  },
  spaceSelectedIdsArray: {
    type: Array,
    default: []
  },
  styleOptions: {
    type: Array,
    default: []
  },
  styleSelectedIdsArray: {
    type: Array,
    default: []
  }
})
let emits = defineEmits([
  'update:spaceSelectedIdsArray',
  'update:styleSelectedIdsArray',
  'handleChildEmit'
])
const setActive = (value) => {
  if (active.value == value) {
    active.value = undefined
  } else {
    active.value = value
  }
}

const emitDoSearch = () => {
  active.value = undefined
  emits('handleChildEmit')
}

enum LocallyType {
  SPACE,
  STYLE
}

const reset = () => {
  emits('update:spaceSelectedIdsArray', [])
  emits('update:styleSelectedIdsArray', [])
}

const addACondition = (locallyType, id) => {
  let arr = []
  switch (locallyType) {
    case LocallyType.SPACE:
      if (props.spaceSelectedIdsArray.indexOf(id) >= 0) {
        arr = props.spaceSelectedIdsArray.filter((item) => {
          if (item == id) {
            return false
          }
          if (props.spaceSelectedIdsArray.indexOf(item) >= 0) {
            return true
          }
        })
      } else {
        arr = props.spaceSelectedIdsArray.concat(id)
      }
      emits('update:spaceSelectedIdsArray', arr)
      break
    case LocallyType.STYLE:
      if (props.styleSelectedIdsArray.indexOf(id) >= 0) {
        arr = props.styleSelectedIdsArray.filter((item) => {
          if (item == id) {
            return false
          }
          if (props.styleSelectedIdsArray.indexOf(item) >= 0) {
            return true
          }
        })
      } else {
        arr = props.styleSelectedIdsArray.concat(id)
      }
      emits('update:styleSelectedIdsArray', arr)
      break
  }
}
</script>

<template>
  <view class="button-container">
    <up-button
      :icon="active == 1 ? 'arrow-down' : 'arrow-up'"
      text="空间"
      @tap="setActive(1)"
    ></up-button>
    <up-button
      :icon="active == 2 ? 'arrow-down' : 'arrow-up'"
      text="风格"
      @tap="setActive(2)"
    ></up-button>
  </view>
  <view class="space-option-container" v-show="active == 1">
    <up-button
      class="locally-button"
      v-for="spaceItem in spaceOptions"
      :key="spaceItem.id"
      size="mini"
      :class="{ yes: spaceSelectedIdsArray.indexOf(spaceItem.id) >= 0 }"
      :text="spaceItem.name"
      @tap="addACondition(LocallyType.SPACE, spaceItem.id)"
    ></up-button>
  </view>
  <view class="style-option-container" v-show="active == 2">
    <up-button
      class="locally-button"
      v-for="styleItem in styleOptions"
      :key="styleItem.id"
      :class="{ yes: styleSelectedIdsArray.indexOf(styleItem.id) >= 0 }"
      size="mini"
      :text="styleItem.name"
      @tap="addACondition(LocallyType.STYLE, styleItem.id)"
    ></up-button>
  </view>
  <view class="button-container" v-show="active > 0">
    <up-button @tap="reset" text="重置"></up-button>
    <up-button @tap="emitDoSearch" class="yes" text="确定"></up-button>
  </view>
</template>

<style scoped lang="scss">
.yes {
  background-color: $u-warning;
  color: white;
}
.button-container {
  display: flex;
}
.space-option-container,
.style-option-container {
  padding: 15rpx;
  display: flex;
  flex-wrap: wrap;
  .locally-button {
    width: auto !important;
  }
}
</style>
