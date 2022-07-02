<template>
<div class="wrapper">
 <el-table :data="temp_data" style="width: 100%">
    <el-table-column prop="date" label="下单日期" width="180" />
    <el-table-column prop="ProductName" label="产品名称" width="180" />
    <el-table-column prop="orderNumber" label="订单号" width="180" />
    <el-table-column prop="price" label="价格" width="180" />
    <el-table-column prop="quantity" label="数量" width="180" />
    <el-table-column label="总价" prop="OrderState">
      <template #default="scope">
      <span>{{scope.row.price*scope.row.quantity}}</span>
      </template>
    </el-table-column>
    <el-table-column label="状态" prop="OrderState">
      <template #default="scope">
        <el-tag class="ml-2" :type="stateIcon(scope.row.OrderState)" >{{stateText(scope.row.OrderState)}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >修改</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >退单</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <!-- 测试 -->


</div>
</template>

<script lang="ts" setup>
import { defineProps ,defineEmits,ref} from 'vue';
import {OrderData} from './OrderType'

type stateOnly = "" | "success" | "warning" | "info" | "danger"
const props = defineProps({
    productOrder:Array,
    testData:Array
})
const Emit = defineEmits(['showModifYList','OrderDlete','determine','editData'])
// console.log(props.productOrder)
const temp_data = props.productOrder as OrderData[];
const show = ref(true)
// const handle = (e:any)=>{
//   console.log(e)
// }

// // 对传过来的数据进行处理
// props.productOrder?.forEach((item)=>{
//   // item.
// })

// 返回的文字
const stateText = (e:string):string=>{
  switch(e){
    case "0":
      return '已签收';
    case "1":
      return "已发货";
    case "2":
      return "待发货";
    case "3":
      return "已退单";
    default : 
      return "异常";
  }
}
// 状态的背景
const stateIcon = (e:string):stateOnly =>{
  switch(e){
    case "0":
      return 'success';
    case "1":
      return "warning";
    case "2":
      return "info";
    case "3":
      return "danger";
    default : 
      return "danger";
  }
}

const handleEdit = (index:number,row:any)=>{
  // console.log(index,row)
  Emit("showModifYList")
  Emit("editData",row)

}

const handleDelete =(index:number,row:any)=>{
    Emit("OrderDlete",row.orderNumber)
}
</script>

<style scoped>

</style>