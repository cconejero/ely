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
              globPatterns: ['**/*.{js,css,html,ico,png,svg}']
          },
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'android-chrome-192x192.png', 'android-chrome-512x512.png'],
          manifest: {
              name: 'Moncho llega en...',
              short_name: 'Moncho',
              description: 'Cuando llega Moncho',
              theme_color: '#ffffff',
              icons: [
                  {
                      src: '/assets/android-chrome-192x192.png',
                      sizes: '192x192',
                      type: 'image/png'
                  },
                  {
                      src: '/assets/android-chrome-512x512.png',
                      sizes: '512x512',
                      type: 'image/png'
                  },
                  {
                      src: '/assets/android-chrome-512x512.png',
                      sizes: '512x512',
                      type: 'image/png',
                      purpose: 'any maskable'
                  }]
          }
      }),
  ]
})
