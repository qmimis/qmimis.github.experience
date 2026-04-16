<script setup>
import nwctMd from '../resourse/md/NWCT.md'
</script>

<template>
    <div>
        <nwctMd/>
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