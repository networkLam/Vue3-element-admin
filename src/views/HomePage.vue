<template>
<div>
    <headItem :username="user"></headItem>
    <menuItem></menuItem>
    <div class="routerlocat" style="width:85%;">
        <router-view></router-view>
    </div>
</div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import headItem from './conponentsvue/Head.vue'
import menuItem from "./conponentsvue/MenuItem.vue";
export default defineComponent({
    name : "HomePage",
    setup(props,context){
        const route = useRoute()
        const {user} = route.params
        // console.log(route.params)
        // 给子组件传递数据的时候记得return出去
        return {
            user
        }
    },
    components:{
        headItem,menuItem
    }
})
</script>

<style scoped>
.routerlocat{
  position: absolute;
  right: 0px;
  top: 88px;
}
</style>