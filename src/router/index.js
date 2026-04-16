// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HelloWorld.vue'
import SiteExample1View from '../components/SiteExample1.vue'
import SiteExample2View from '../components/SiteExample2.vue'
import ServerExample1View from '../components/ServerExample1.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView, 
    meta: { title: 'HOME' }
  },
  {
    path: '/SiteExample1',
    name: 'SiteExample1',
    component: SiteExample1View, 
    meta: { title: 'WordPress建站指南' }
  },
  {
    path: '/SiteExample2',
    name: 'SiteExample2',
    component: SiteExample2View, 
    meta: { title: '内网穿透建站指南' }
  },
  {
    path: '/ServerExample1',
    name: 'ServerExample1',
    component: ServerExample1View, 
    meta: { title: 'GPU服务器账号分配指南' }
  }
]

// 2. 创建路由器实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router