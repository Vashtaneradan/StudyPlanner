// @ts-ignore
import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/StudyPlanner/',
  resolve: { alias: { '@': '/src' } },
  plugins: [vue()],
  server: {
    host: true,
    port: 5001,
    watch: {
      usePolling: true
    }
  }
})
