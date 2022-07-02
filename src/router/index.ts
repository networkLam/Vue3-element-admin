import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import login from '../views/Login.vue'
import HomePage from '../views/HomePage.vue'
import notfount from '../views/notfount/ontfount.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:"/login",
    component: login
  },
  {
    path :"/login",
    name : "login",
    component :()=>import("../views/Login.vue"),
    meta : {
      title : "欢迎登陆~"
    },
  },
  {
    path:"/home/:user/",
    name : "home",
    component : HomePage,
    meta:{
      title : "工作台"
    },
    children:[{
      path : "sale",
      name : "sale",
      component : ()=>import("../views/Sale.vue")
    },{
      path : "storage",
      name : "storage",
      component : ()=>import("../views/Storage.vue")
    },{
      path:"order",
      name:"order",
      component :()=>import("../views/Order.vue")
    },{
      path:"seting",
      name :"seting",
      component :()=>import("../views/Seting.vue")
    }],
    beforeEnter(to,from){
       if(localStorage.getItem("login") == "1"){
        return true;
       }else{
        alert("请先登陆")
        router.push({name:"login"})
        return false;
       }
    }
  },
  {
    path:'/:pathMatch(.*)',
    name:"notfount",
    component:notfount
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  // ts不能推断的值类型要用断言
  // 请善用断言
  document.title = to.meta.title  as string;
  next();
})

export default router
