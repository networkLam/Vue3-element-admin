<template>
  <el-dialog
    v-model="isShowModify"
    title="修改"
    width="30%"
    :before-close="handleClose"
  >
  <el-form :model="temp_data" label-width="120px">
    <el-form-item label="用户地址">
      <el-input v-model="temp_data.address" />
    </el-form-item>
     <el-form-item label="快递单号">
      <el-input v-model="temp_data.expressBill" />
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="temp_data.OrderState" placeholder="选择状态">
        <el-option label="已签收" value="0" />
        <el-option label="已发货" value="1" />
        <el-option label="待发货" value="2" />
        <el-option label="已退单" value="3" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="determine">确认</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref,defineProps,defineEmits,reactive, toRefs ,watch} from 'vue'
import {OrderData} from './OrderType'
import { ElMessageBox } from 'element-plus'

const props = defineProps(["isShowModify",'temp_data'])
const emit = defineEmits(['showModifYList','editDataFun'])

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('确定关闭吗？')
    .then(() => {
      done()
      emit("showModifYList")
    })
    .catch(() => {
      // catch error
    })
}

const cancel =()=>{
   emit("showModifYList")
}

const determine = ()=>{
   emit("showModifYList")
   emit("editDataFun",props.temp_data)
}

// do not use same name with ref
const form = reactive<OrderData>({
  userName:"",
  date:"",
  ProductName:"",
  address:"",
  orderNumber:"",
  quantity:"",
  price:"",
  OrderState:"0",
  expressBill:""
})


</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
