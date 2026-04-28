import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginMarkdown from 'vite-plugin-md'


export default defineConfig({
  lang: 'zh-CN',
  title: 'qmimis的个人博客',
  base:'/qmimis/qmimis.github.experience/',
  title: '我的个人博客',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // 让Vue插件也编译.md文件
      }),
    VitePluginMarkdown()
  ],
  resolve: {
    symlinks: true,,
    alias: {
    'vue': 'vue/dist/vue.esm-browser.js'
    }
  }
})
