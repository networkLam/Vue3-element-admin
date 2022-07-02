<template>
    <div class="wrapper">
      <div class="head">
       <SaleHead>
        <template #default>
            <div v-for="(item,index) in SaleHeadData" :key="index" class="contentHead">
                <div class="icon"><img :src="item.icon" alt="" style="width: 50px;"></div>
                <div><p class="title">{{item.title}}</p><p class="text">{{item.text}}</p></div>
            </div>
        </template>
       </SaleHead>
      </div>
      <div class="centerContenet">
         <div class="leftContent">
           <saleLeft></saleLeft>
       </div>

        <div class="rightContent">
            <saleRight></saleRight>
        </div>
      </div>
       
    </div>
</template>

<script lang="ts">
import { defineComponent,reactive,ref,onMounted } from 'vue'
import SaleHead from './saleComponents/SaleHead.vue'
import saleLeft from './saleComponents/SaleLeft.vue'
import saleRight from './saleComponents/SaleRight.vue'
interface SaleHeadData{
    icon : string,
    title : string,
    text:string
}

export default defineComponent({
    name:"Sale",
    setup() {
        const SaleHeadData = reactive<SaleHeadData[]>([{
            icon : "/src/calendar.png",
            title : "日期",
            text : "2022年6月25日"
        },
        {
            icon : "/src/RMB.png",
            title : "季度商品销售个数",
            text : "2022"
        },{
            icon : "/src/RMB.png",
            title : "季度商品销售总额",
            text : "200001"
        },{
            icon : "/src/RMB.png",
            title : "季度商品平均销售单价",
            text : "98.91"
        },])

        return {
            SaleHeadData,
        }
    },
    components:{
        SaleHead,saleLeft,saleRight
    }
})
</script>

<style scoped>
.wrapper{
    width:100%;
    /* background-color: #f3f3f3 ; */
}

.head{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fff;
}

.contentHead{
    margin: 2px;
    display: flex;
    width:25%;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 35px;
     background-color: white ;
}
/* 图片的大小 */
.icon{
    width: 50px;
    margin-right: 20px;
}
.title{
    color: #99b2c0;
}

.text{
  color : #282f40;
  font-weight: 700;
}
/* 左边的内容 */
.leftContent{
    margin-left: 10px;
    width: 50%;
    height: 400px;
    background-color: #fff;
}
/* 左边的内容 */
.rightContent{
    margin-right: 10px;
    width: 35%;
    height: 400px;
    background-color: #fff;
}

.centerContenet{
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
}
</style>