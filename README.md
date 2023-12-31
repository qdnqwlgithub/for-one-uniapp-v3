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

# about query

**_可以参考src/pages/example/index/index.vue_**

0. 判断loading，return/set true
1. 判断status是否nomore(如果不能继续，把loading也false)
2. lodaing=true
3. 是否reset（可跳过）

```
queryWrapper.pageNumber = 1
totalPage.value = 0
exampleList.value = []
```

4. 如果下一页则page number++（可跳过）
5. post request...
6. 如果是3来的，catch，pageNumber--（可跳过）
7. nextTick

```
nextTick(() => {
  if (totalPage.value <= queryWrapper.pageNumber) {
    status.value = MoreStatus.NOMORE
  } else {
    status.value = MoreStatus.LOADMORE
  }
  loading.value=false
})
```

# todo

- array用ref还是rective？
- 页面生命周期钩子函数review(done)
- loadding动画的review(abort)
- sometime, chrome会报异常或者错误(done)
- search.page 动画应该分为全屏过度、部分过渡，一直全屏过度好像很卡的样子，虽然后台真的卡
- 部分代码待优化，全局搜索todo逐个解决
- 更多花色布局space-between不生效（done）
- search.page input(done)
- example dropdown(done)
- sticky
- empty内容为空(done)
- color in uView in component
- image click detail
- v-model原理(done)
- the code of response校验
- the r of foroneheader

# code template

```
<script setup lang="ts"></script>

<template></template>

<style lang="scss" scoped></style>
```
