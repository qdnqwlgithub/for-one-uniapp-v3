import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import App from './App.vue'
import uviewPlus from 'uview-plus'
import Layout from '@/layout/index.vue'
import 'virtual:svg-icons-register'
import MidIcon from '@/components/mid-icon'
import MidButton from '@/components/mid-button'

export function createApp() {
  const app = createSSRApp(App)
  app.component('MidLayout', Layout)
  app.component('MidIcon', MidIcon)
  app.component('MidButton', MidButton)
  app.use(uviewPlus)
  uni.$u.config.unit = 'rpx'
  app.use(Pinia.createPinia())
  return {
    app,
    Pinia
  }
}
