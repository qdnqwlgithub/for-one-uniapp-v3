import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import App from './App.vue'
import uviewPlus from 'uview-plus'
import requestConfig from '@/config/request/index'
uni.$u.http.setConfig((config) => {
  /* config 为默认全局配置*/
  config.baseURL = requestConfig.baseUrl /* 根域名 */
  return config
})
import Layout from '@/layout/index.vue'
import 'virtual:svg-icons-register'
import MidIcon from '@/components/mid-icon'
import MidGap from '@/components/mid-gap'
import MidOverlay from '@/components/mid-overlay'
import MidButton from '@/components/mid-button'
import ImageAndFont from '@/components/image-and-font'
import ForOneHeader from '@/components/for-one-header'
import MidShareButton from '@/components/mid-share-button'
import ExampleDropDown from '@/components/example-drop-down'
import ItemAsCard from '@/components/item-as-card'
import { initRequest } from '@/utils/request/index'

export function createApp() {
  const app = createSSRApp(App)
  initRequest(app)
  app.component('MidLayout', Layout)
  app.component('MidIcon', MidIcon)
  app.component('MidOverlay', MidOverlay)
  app.component('MidButton', MidButton)
  app.component('ImageAndFont', ImageAndFont)
  app.component('ForOneHeader', ForOneHeader)
  app.component('MidShareButton', MidShareButton)
  app.component('ItemAsCard', ItemAsCard)
  app.component('ExampleDropDown', ExampleDropDown)
  app.component('MidGap', MidGap)
  app.use(uviewPlus)
  uni.$u.config.unit = 'rpx'
  app.use(Pinia.createPinia())
  return {
    app,
    Pinia
  }
}
