<template>
    <div class="wrapper">
        <div class="left">
            <personalItem :personFile="personFile"></personalItem>
        </div>
        <div class="right">
            <EditFile :personFile="personFile" @editFile="editFile"></EditFile>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent ,reactive} from 'vue'
import personalItem from "./settingComponents/personalItem.vue"
import EditFile from './settingComponents/EditFile.vue'
import {useRoute} from 'vue-router'
import dayjs from 'dayjs'
interface PersonFile{
   title : string,
   content : string
}
interface EmitData{
    email:string,
    phone:string
}
export default defineComponent({
    setup() {
     const route = useRoute();
     const personFile = reactive<PersonFile[]>([
      {title:"用户名称",content:route.params.user.toString()},
      {title:"手机号码",content:"12138271910"},
      {title:"用户邮箱",content:"12138271@169.com"},
      {title:"所属部门",content:"市场部"},
      {title:"所属岗位",content:"产品调度员"},
      {title:"所属角色",content:"超级管理员"},
       {title:"创建日期",content:dayjs().format("YYYY-MM-DD HH:mm:ss")},
      ]);
    //   修改邮箱和号码的函数
    const editFile = (e:EmitData)=>{
        console.log("我是settin组件收到了edit组件发送的数据")
        personFile[1].content = e.phone;
        personFile[2].content = e.email;
        // console.log(e);
    }
      return {
            personFile,editFile
      }
    },
    components:{
        personalItem,EditFile,
    }
})
</script>


<style scoped>
.wrapper{
    display: flex;
}
.left{
    margin-top: 12px;
    margin-left: 12px;
    margin-right: 26px;
    border-radius: 16px;
    /* width: 200px; */
    /* background-color: skyblue; */
}
</style>