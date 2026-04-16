import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginMarkdown from 'vite-plugin-md'


export default defineConfig({
  lang: 'zh-CN',
<<<<<<< HEAD
  title: 'qmimis的个人博客',
  base:'/qmimis/qmimis.github.experience/',
=======
  title: '我的个人博客',

>>>>>>> 4f3fa74b050d71327a6f85eebf800c4678289768
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // 让Vue插件也编译.md文件
      }),
    VitePluginMarkdown()
  ],
})
