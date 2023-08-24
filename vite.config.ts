import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/static/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]'
    })
  ],
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
