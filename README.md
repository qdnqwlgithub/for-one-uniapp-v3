# WebStorm

WebStorm是全世界最好的前端开发工具之一

# uView plus

# common queryWrapper

```shell
let queryWrapper=reactive({
  pageSize: 5,
  pageNumber: 1,
  // other parameter
})
let totalPage=ref(0)
let dataList=ref([])
```

# 防抖和节流

```
https://www.bilibili.com/video/BV1HP4y1174b/?spm_id_from=333.337.search-card.all.click&vd_source=215de1e77e8db71d1aa6a68e7c48b7aa
```

# 获取页面参数

```
// vue2(before)
onLoad(options)...

// vue3(now)
const props = defineProps({
  id: String,
  usageCategoryId: String
})

```

# format these code

```
https://juejin.cn/post/7118294114734440455#heading-11
```

# uView plus

```
https://uiadmin.net/uview-plus/components/picker.html
```

# todo

- array用ref还是rective？
- 页面生命周期钩子函数review
- loadding动画的review
- sometime, chrome会报异常或者错误
- search.page 动画应该分为全屏过度、部分过渡，一直全屏过度好像很卡的样子，虽然后台真的卡
- 部分代码待优化，全局搜索todo逐个解决
- 更多花色布局space-between不生效
- search.page input
- example dropdown
- sticky
- empty内容为空
- color in uView in component
- image click detail
- v-model原理
- the code of response校验
- the r of foroneheader

# code template

```
<script setup lang="ts"></script>

<template></template>

<style lang="scss" scoped></style>
```
