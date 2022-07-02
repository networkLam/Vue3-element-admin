<template>
    <div class="wrapper">
        <div class="borderTop">
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
.borderTop{
    border-top: 1px solid #FFBF7F;
}
</style>