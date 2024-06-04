import autoprefixer from 'autoprefixer'
import postCssSortMediaQueries from 'postcss-sort-media-queries'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig } from 'vite'
import { resolve } from 'path'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: false,
      inject: {
        data: {
          title: 'ProjectName',
          description: 'A single page application created using Vue.js 3'
        }
      }
    }),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i
      // exclude: "./public/images",
      // include: "./assets",
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
      '~bootstrap': 'bootstrap'
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssSortMediaQueries({ sort: 'desktop-first' }),
        autoprefixer({
          overrideBrowserslist: ['last 3 versions', 'ie >= 10']
        })
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/variables";`
      }
    }
  },
  build: {
    rollupOptions: {},
    sourcemap: false,
    cssMinify: true,
    ssrManifest: true
  }
})
