<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'
let active = ref(undefined)
import { ExampleQueryType } from '@/types/enums'
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
  },
  show: {
    type: Boolean
  },
  exampleQueryType: {
    type: Number as () => ExampleQueryType
  }
})
let emits = defineEmits([
  'update:spaceSelectedIdsArray',
  'update:styleSelectedIdsArray',
  'search',
  'update:exampleQueryType'
])
const handleTapButton = (exampleQueryType) => {
  if (props.exampleQueryType == exampleQueryType) {
    emits('update:exampleQueryType', undefined)
  } else {
    emits('update:exampleQueryType', exampleQueryType)
  }
}

const emitDoSearch = () => {
  emits('update:exampleQueryType', undefined)
  emits('search')
}

const reset = () => {
  emits('update:spaceSelectedIdsArray', [])
  emits('update:styleSelectedIdsArray', [])
}

const addACondition = (locallyType, id) => {
  let arr = []
  switch (props.exampleQueryType) {
    case ExampleQueryType.SPACE:
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
    case ExampleQueryType.STYLE:
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
      :icon="
        props.exampleQueryType == ExampleQueryType.SPACE
          ? 'arrow-down'
          : 'arrow-up'
      "
      text="空间"
      @tap="handleTapButton(ExampleQueryType.SPACE)"
    ></up-button>
    <up-button
      :icon="
        props.exampleQueryType == ExampleQueryType.STYLE
          ? 'arrow-down'
          : 'arrow-up'
      "
      text="风格"
      @tap="handleTapButton(ExampleQueryType.STYLE)"
    ></up-button>
  </view>
  <view
    class="space-option-container"
    v-show="props.exampleQueryType == ExampleQueryType.SPACE"
  >
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
  <view
    class="style-option-container"
    v-show="props.exampleQueryType == ExampleQueryType.STYLE"
  >
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
  <view class="button-container" v-show="props.exampleQueryType != undefined">
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
