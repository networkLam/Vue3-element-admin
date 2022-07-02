<template>
  <div class="wrap">
    <OrderTable :productOrder="productOrder" @showModifYList="showModifYList" @OrderDlete="OrderDlete"
      @editData="editData"></OrderTable>
    <modifyList :isShowModify="isShowModify" @showModifYList="showModifYList" :temp_data="temp_data" @editDataFun="editDataFun"></modifyList>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import OrderTable from './OrderItem/OrderTable.vue'
import modifyList from './OrderItem/modifyList.vue'
import { ElMessage, ElMessageBox } from 'element-plus'

// 分别对应 绿色 灰色 橙色 红色
type OrderState = "success" | "info" | "warning" | "danger" | undefined
type StateTextConten = "已签收" | "未发货" | "已发货" | "已退单" | "异常"
type StateCode = '0' | '1' | '2' | '3' | '4'
// 0表示已签收 1表示已发货 2表示已待发货 3表示已退单 4表示异常
/**
 * 红色表示异常
 * 橙色表示未发货 #F69500 字体颜色 #e6a23c
 * 绿色表示已签收 #e1f3d8 字体颜色 
 * 灰色表示退单 
 */
interface OrderData {
  userName: string, //用户名称
  date: string,//下单日期
  ProductName: string,//产品名称
  address: string //商品发往的地址
  orderNumber: string //订单编号
  quantity: string //商品的数量
  price: string //价格
  OrderState: StateCode //状态
  expressBill: string //快递单号
}

export default defineComponent({
  setup() {
    // 控制modify是否显示
    let isShowModify = ref(false)
    // 控制modify是否显示的函数
    const showModifYList = () => {
      isShowModify.value = !isShowModify.value;
    }
    // 退单的函数
    const OrderDlete = (e: string) => {
      ElMessageBox.confirm(
        '确定要退单吗?',
        'Warning',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      ).then(() => {
        productOrder.value.forEach((item) => {
          if (item.orderNumber == e) {
            item.OrderState = "3"
          }
        })
        ElMessage({
          type: 'success',
          message: '退单成功',
        })
      })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消退单',
          })
        })

    }
    const temp_data = ref({})

    //接收要编辑的数据
    const editData = (e: any) => {
      temp_data.value = JSON.parse(JSON.stringify(e))
    }


    //修改的函数
    const editDataFun  = (e:OrderData)=>{
      // console.log(e);
      const num = e.orderNumber;
      productOrder.value.forEach((item)=>{
        if(item.orderNumber == num){
           item.address = e.address;
           item.OrderState = e.OrderState;
           item.expressBill = e.expressBill;
        }
      })

    } 

    const productOrder = ref<OrderData[]>([{
      userName: "lam",
      date: "2022-06-29",
      ProductName: "小米12",
      address: "广东省XX市XX区XX小区",
      orderNumber: "00000000001",
      OrderState: "0",
      quantity: "2",
      price: "3999",
      expressBill: "10010"
    }, {
      userName: "jay",
      date: "2022-06-29",
      ProductName: "iphone13",
      address: "广东省XX市XX区XX小区",
      orderNumber: "00000000002",
      OrderState: "1",
      quantity: "1",
      price: "4999",
      expressBill: "10000"
    }, {
      userName: "eason",
      date: "2022-06-29",
      ProductName: "iphone13proMax",
      address: "广东省XX市XX区XX小区",
      orderNumber: "00000000003",
      OrderState: "2",
      quantity: "1",
      price: "7999",
      expressBill: "10086"
    },])

    return {
      productOrder, isShowModify, showModifYList, OrderDlete, editData, temp_data,editDataFun
    }
  },
  components: {
    OrderTable, modifyList
  }
})
</script>


<style scoped>
</style>