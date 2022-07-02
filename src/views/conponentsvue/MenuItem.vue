<template>
    <div class="wrapper">
<el-row class="tac">
        <el-col :span="10">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        text-color="#282f40"
        @open="handleOpen"
        @close="handleClose"
      >
      <el-menu-item index="1" @click="sale">
          <el-icon><location /></el-icon>
          <span>销售数据</span>
        </el-menu-item>
        <el-menu-item index="2" @click="storage">
          <el-icon><icon-menu /></el-icon>
          <span>仓库</span>
        </el-menu-item>
        <el-menu-item index="3" @click="order">
          <el-icon><document /></el-icon>
          <span>订单处理</span>
        </el-menu-item>
        <el-menu-item index="4" @click="seting">
          <el-icon><setting /></el-icon>
          <span>设置</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    </el-row>
    </div>
</template>

<script lang="ts">
import {defineComponent,onMounted} from 'vue'
import { useRoute,useRouter } from 'vue-router'

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
export default defineComponent({
    name : "MenuItem",
    setup(props,context){
            const router = useRouter();
            onMounted(()=>{
              router.push('sale')
            })
            function sale(){
                router.push("sale");
            }
            function storage(){
                router.push("storage")
            }
            function order(){
              router.push("order")
            }
            function seting(){
              router.push("seting")
            }
            const handleOpen = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
            }
            const handleClose = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
            }

        return{
                handleOpen,handleClose,sale,storage,order,seting
        }
    },
    components:{
        Document,Location,Setting,IconMenu
    }
})
</script>


<style scoped>
.wrapper{
    position: relative;
    top:10px;
    float: left;
    width: 35%;
}
</style>   