<template>
<div class="warpper">
  <div class="content">
    <slot></slot>
  </div>
</div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>
/* 内容模块 */
.warpper{
  background-color: #f3f3f3;
}
.content{
    display: flex;
    width: 100%;
    /* height: 100px; */
    background-color: #f3f3f3;
}
</style>