<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1"><a class="a-link" href="/">首页</a></el-menu-item>
    <el-sub-menu index="2">
      <template #title>工作的经历</template>
      <el-sub-menu index="2-1">
        <template #title>Java</template>
        <el-menu-item index="2-1-1" disabled>暂无</el-menu-item>
        <el-menu-item index="2-1-2" disabled>暂无</el-menu-item>
        <el-menu-item index="2-1-3" disabled>暂无</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2-2">
        <template #title>服务器运维</template>
        <el-menu-item index="2-2-1">
          <router-link class="a-link" to="/ServerExample1">实现GPU服务器的账号分配</router-link>
        </el-menu-item>
        <el-menu-item index="2-2-2" disabled>案例2</el-menu-item>
        <el-menu-item index="2-2-3" disabled>案例3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2-3">
        <template #title>网站</template>
        <el-menu-item index="2-3-1">
          <router-link class="a-link" to="/SiteExample1">Wordpress部署网页</router-link>
        </el-menu-item>
        <el-menu-item index="2-3-2" to="">
          <router-link class="a-link" to="/SiteExample2">通过内网穿透实现虚拟机的网站部署</router-link>
        </el-menu-item>
        <el-menu-item index="2-3-3" disabled>案例3</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item class="el-menu-item" index="3">
      <a class="a-link" href="https://github.com/qmimis" target="_blank" rel="noopener noreferrer">前往qmimis的GitHub库</a>
    </el-menu-item>
    <el-menu-item index="4" disable>其他</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="css">
.el-menu-demo{
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
}
.el-menu-item:hover{
  outline: none;
}
.a-link:hover{
  color: var(--el-menu-active-color);
  outline: none;
}
.a-link{
  width: 100%;
  color: #303133;
  text-decoration: none;
}
.el-menu-item:focus,
.el-menu-item:focus-visible,
.el-sub-menu__title:focus,
.el-sub-menu__title:focus-visible,
.a-link:focus,
.a-link:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}

</style>