import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginMarkdown from 'vite-plugin-md'

// 如果你想要 externals 功能，应该用 vite-plugin-externals，或相关的插件进行配置，
// 这里假设不用 createExternal（它不是 Vite API），
export default defineConfig({
  base:'/qmimis/qmimis.github.experience/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // 让Vue插件也编译.md文件
    }),
    VitePluginMarkdown()
    // 其它插件可以继续加在这里
  ],
  resolve: {
    symlinks: true,
    alias: {
      'vue': 'vue/dist/vue.esm-browser.js'
    }
  }
})
