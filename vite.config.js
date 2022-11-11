import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      VitePWA({
          registerType: 'autoUpdate',
          injectRegister: 'auto',
          name: 'Moncho llega en...',
          short_name: 'Moncho',
          icons: [
              {
                  src: 'src/assets/android-chrome-192x192.png',
                  sizes: '192x192',
                  type: 'image/png'
              },
              {
                  src: 'src/assets/android-chrome-512x512.png',
                  sizes: '512x512',
                  type: 'image/png'
              },
              {
                  src: 'src/assets/android-chrome-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'any maskable'
              }]

      }),
  ]
})
