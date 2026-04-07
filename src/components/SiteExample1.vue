<script setup>
import WordPressSiteBuild from '../resourse/md/WordPressSiteBuild.md'
</script>

<template>
    <div>
        <WordPressSiteBuild/>
    </div>
</template>

<style scoped>
@import 'github-markdown-css';
.markdown-body p, 
.markdown-body h1, 
.markdown-body h2, 
.markdown-body li {
  text-align: left !important; /* 强制左对齐 */
}
</style>