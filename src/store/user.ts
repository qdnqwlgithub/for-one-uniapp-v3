import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  let token = ref(undefined)
  let userInfo = reactive(undefined)
  return { token, userInfo }
})
