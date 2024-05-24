import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import postCssSortMediaQueries from 'postcss-sort-media-queries'
import autoprefixer from 'autoprefixer'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    vue({
      plugins: [postCssSortMediaQueries({ sort: 'desktop-first' })]
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'ProjectName',
          description: 'A single page application created using Vue.js 3'
        }
      }
    }),
    ViteImageOptimizer()
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
        additionalData: `@import "./src/scss/variables";`
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
