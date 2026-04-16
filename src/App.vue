<script setup>
import Top from './components/Top.vue';
</script>

<template>
  <div id="topDiv" >
    <Top />
  </div>
  <div id="mainDiv" >
    <router-view/>
  </div>
</template>

<style scoped>
#topDiv {
  height: 20px;
}
#mainDiv {
  width: 1126px;
  max-width: 100%;
  margin: 50px auto;
  box-sizing: border-box;
  padding: 24px;
}

</style>