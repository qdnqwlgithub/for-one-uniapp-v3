import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  server: {
    proxy: {
      '/useProxy': {
        target: 'https://catalogs.huiyichina.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/useProxy/, '')
      }
    }
  }
})
