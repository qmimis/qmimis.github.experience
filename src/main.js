import { createApp } from './node_modules/vue/dist/vue.esm-browser.js'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router' // 引入刚才创建的 router



const app = createApp(App)
app.use(ElementPlus).use(router)
app.mount('#app')
