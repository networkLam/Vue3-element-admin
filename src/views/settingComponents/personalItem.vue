<template>
  <div class="warpper">
   <div class="title">
    <span class="titleText">个人信息</span>
   </div>
    <div class="avatar">
        <img src="/src/avatar.jpg" alt="" class="user_avatar">
    </div>
    <listItem v-for="(item,index) in personFile" :key="index">
    <template #default>
     <div class="content">
      <div class="text-left">{{item.title}}</div>
      <div class="text-right">{{item.content}}</div>
     </div>
    </template>
    </listItem>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive } from "vue";
import {useRoute} from 'vue-router'
import listItem from './listItem.vue'
export default defineComponent({
    name :"personalItem",
  props:['personFile'],
  setup(props,context) {
    const route = useRoute();
    // console.log(props.personFile)
      return {
        
      }
  },
  components:{
    listItem
  }
});
</script>


<style scoped>
.warpper{
  width: 350px;
  background-color: #FFDB6D;
  border-radius: 16px;
 box-shadow: 5px 2px 6px #888;
}
.title{
  padding: 12px 0 12px 12px;
}
.titleText{
  color: black;
  font-size: 22px;
  font-weight: 700;

}
.avatar{
text-align: center;
border-top: 1px solid #FFA89B;
margin-top: 12px;
padding: 12px 0 12px 0;

}
.user_avatar{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    
}
.content{
  margin: 5px 0 5px 0;
  display: flex;
  justify-content: space-between;
}

.text-left{
  padding: 2px 0 2px 12px;
}
.text-right{
  padding: 2px 12px 2px 0;
}
</style>