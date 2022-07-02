<template>
  <div class="warpper">
    <div class="content">
      <div class="loginInfo">
        <h2 style="text-align:center;">欢迎使用</h2>
        <div class="layout">
            <form  method="post" @keydown.enter="loginGo">
            <p class="inputItem">用户名：<el-input v-model="userInfo.name" placeholder="用户名" class="inputtext" /></p> 
            <p class="inputItem">&nbsp;&nbsp;&nbsp;密码：<el-input v-model="userInfo.password" type="password" show-password placeholder="密码" class="inputtext" /></p> 
            <div>验证码：<el-input v-model="userInfo.VCode" placeholder="验证码" class="inputVCode" /> <img src="../assets/YZM.jpg" alt="" class="Icon"> </div>
            <div class="login"><el-button type="primary" round @click="loginGo" >登陆</el-button></div> 
        </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,reactive } from "vue";
import {useRoute,useRouter} from 'vue-router';
import {useStore} from 'vuex'
import { ElMessage } from 'element-plus'
interface UserInfo{
    name : string,
    password : string,
    VCode : string
}

export default defineComponent({
    name :"Login",
    setup(props,context){
        const store = useStore();
        const userInfo:UserInfo = reactive({
            name:"lam",
            password : "AZ12138",
            VCode:""
        })
        const $route = useRoute();
        const $router = useRouter();
        const loginGo = ()=>{
                if(userInfo.name === "lam" && userInfo.password === "AZ12138" && userInfo.VCode === '3290'){
                    store.dispatch("modifylogin",1)
                    $router.push({name:"home",params:{user:userInfo.name}})
                }else{
                    ElMessage.error('输入有误，请检查');
                }
        }
        return{
            userInfo,loginGo
        }
    },
    components:{
        
    }
});
</script>

<style scoped>
.warpper{
    width: 100%;
    height: 100vh;
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content{
    width: 500px;
    height: 550px;
    background-color: #DCDFE6;
    border-radius: 16px;

}

.inputtext{
    width: 300px;
}
/* 文本输入框的布局样式 */
.layout{
    margin-top: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 用户名和密码的样式 */
.inputItem{
    margin-top: 14px;
    margin-bottom: 10px;
}
/* 验证码的样式 */
.inputVCode{
    width: 100px;
}
/* 图片验证码的样式 */
.Icon{
    display: inline-block;
    position: relative;
    top: 10px;
}

.login{
    display: flex;
    justify-content: center;
    margin-top: 16px;
}
</style>