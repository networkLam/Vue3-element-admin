<template>
<div class="wrapper">
<!-- 已发货 -->
 <div>
    <p>已发货</p>
    <p>10</p>
 </div>
 <!-- 待发货 -->
 <div>
    <p>待发货</p>
    <p>10</p>
 </div>
 <!-- 待签收 -->
 <div></div>
 <!-- 订单异常 -->
  <div>
     <p>已发货</p>
    <p>10</p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name : "orderHead",
    setup(props,context){




        return {

        }
    }
})
</script>


<style scoped>

</style>