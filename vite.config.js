import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      VitePWA({
          registerType: 'autoUpdate',
          workbox: {
              globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
          },
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'pwa-192x192.png', 'pwa-512x512.png', 'src/assets/*.*'],
          manifest: {
              name: 'Ely llega en...',
              short_name: 'Ely',
              description: 'Cuando llega Ely',
              theme_color: '#ffffff',
              icons: [
                  {
                      src: '@/src/assets/pwa-192x192.png',
                      sizes: '192x192',
                      type: 'image/png'
                  },
                  {
                      src: '@/src/assets/pwa-512x512.png',
                      sizes: '512x512',
                      type: 'image/png'
                  },
                  {
                      src: '@/src/assets/pwa-512x512.png',
                      sizes: '512x512',
                      type: 'image/png',
                      purpose: 'any maskable'
                  }]
          }
      }),
  ]
})
