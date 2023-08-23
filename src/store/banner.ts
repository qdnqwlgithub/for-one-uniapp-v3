import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { getBannerList } from '@/api'

export const useBannerStore = defineStore('banner', () => {
  let initedBannerList = ref(false)
  let bannerList = reactive([])
  const initBannerListByStore = () => {
    if (!initedBannerList.value) {
      getBannerList().then((r) => {
        debugger
        console.log(r)
      })
    }
  }
  return { bannerList, initBannerListByStore }
})
