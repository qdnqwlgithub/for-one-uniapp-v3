import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { getBannerList } from '@/api'

export const useBannerStore = defineStore('banner', () => {
  let initedBannerList = ref(false)
  let bannerList = ref([])
  const initBannerListByStore = () => {
    if (!initedBannerList.value) {
      getBannerList().then((r) => {
        r.forEach((item) => {
          item.type = 'image'
        })
        bannerList.value = r
      })
    }
  }
  return { bannerList, initBannerListByStore }
})
