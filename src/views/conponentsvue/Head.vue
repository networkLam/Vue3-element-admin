<template>
    <div class="wrapper">
        <div id="left">
            <!-- logo放置 -->
            <div class="logo">logo</div>
        </div>
        <div id="right">
            <!-- 内容放置 -->
            <div class="avatar">
                <!-- <h4>欢迎:{{Uname}}</h4> -->
                <div ><img src="/src/avatar.jpg" alt="" class="user_avatar"></div>
                <div class="content">{{Uname}}</div>
                <!-- <div class="arrow" @click="goLogin">﹀</div> -->
                <div class="arrow" >
                    <el-popconfirm
                    confirm-button-text="确定"
                    cancel-button-text="取消"
                    :icon="InfoFilled"
                    icon-color="#626AEF"
                    title="确定退出登陆吗？"
                    @confirm="goLogin"
                    >
                    <template #reference>
                    <span class="hover">﹀</span>
                    </template>
                 </el-popconfirm>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {useRouter} from 'vue-router'
import { InfoFilled } from '@element-plus/icons-vue'
export default defineComponent({
    props:['username'],
    setup(props,context) {
        // console.log(props.username)
        const Uname = props.username;
        const router = useRouter();
        const flag = ref<boolean>(true);
        function goLogin(){
           window.localStorage.removeItem("login"); 
           router.push({name:"login"})
        }
        return {
                Uname,flag,goLogin,InfoFilled
        }
    },
    components:{
        
    }
})
</script>

<style scoped>

.wrapper{
    width:100%;
    height: 70px;
    background-color: #FF6F91 ;
    display: flex;
    justify-content: space-between;
    box-shadow: 5px 5px 5px #d8cece;
}
.logo{
    /* padding-top: 10px ; */
    position: relative;
    top: 10px;
    left:10px;
    width:50px;
    height: 50px;
    /* border-radius: 50%; */
    background-color: #FF9671;
    text-align: center;
    line-height: 50px;
}
.right{
    width: 200px;
    float:right;
}

.avatar{
    margin-top: 10px;
    margin-right: 10px;
    display: flex;
    /* justify-content: center; */
    width: 200px;
    height: 50px;
    /* background-color: #fff; */
    text-align: center;
}
/* 名字的样式 */
.content{
    text-align: center;
    line-height: 50px;
    /* display: inline-block; */
    color: #FEF7FF;
    /* color: #99b2c0; */
    width: 50px;
    height: 50px;
    margin-left: 25px;
}

.user_avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.arrow{
    width: 50px;
    height: 50px;
    line-height: 60px;
    
}
.hover{
    cursor: pointer;
}
</style>