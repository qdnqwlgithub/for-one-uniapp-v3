import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import App from './App.vue'
import uviewPlus from 'uview-plus'
import Layout from '@/layout/index.vue'
import 'virtual:svg-icons-register'
import MidIcon from '@/components/mid-icon'
import MidButton from '@/components/mid-button'
import ImageFont from '@/components/image-font'
import ForOneHeader from '@/components/for-one-header'
import MidShareButton from '@/components/mid-share-button'
import ExampleDropDown from '@/components/example-drop-down'
import ItemAsCard from '@/components/item-as-card'

export function createApp() {
  const app = createSSRApp(App)
  app.component('MidLayout', Layout)
  app.component('MidIcon', MidIcon)
  app.component('MidButton', MidButton)
  app.component('ImageFont', ImageFont)
  app.component('ForOneHeader', ForOneHeader)
  app.component('MidShareButton', MidShareButton)
  app.component('ItemAsCard', ItemAsCard)
  app.component('ExampleDropDown', ExampleDropDown)
  app.use(uviewPlus)
  uni.$u.config.unit = 'rpx'
  app.use(Pinia.createPinia())
  return {
    app,
    Pinia
  }
}
