<template>
<div>
  <!-- 这是添加的表单 -->
 <el-dialog
    v-model="props.flag.show"
    title="添加"
    width="30%"
    :before-close="handleClose"
  >
    <el-form :model="form_temp" label-width="120px">
    <!-- 产品名称：填写 -->
    <el-form-item label="产品名称">
      <el-input v-model="form_temp.name" />
    </el-form-item>
    <!-- 单价：填写 -->
    <el-form-item label="是否上架">
      <el-select v-model="form_temp.online" placeholder="请选择">
        <el-option label="是" value="是" />
        <el-option label="否" value="否" />
      </el-select>
    </el-form-item>
    <!-- 数量：填写 -->
    <el-form-item label="数量">
        <el-input v-model="form_temp.quantity" />
    </el-form-item>
    <!-- 类别：填写 -->
    <el-form-item label="品牌">
      <el-input v-model="form_temp.brand" />
    </el-form-item>
    <el-form-item label="单价">
      <el-input v-model="form_temp.price" />
    </el-form-item>
    <!-- 入库时间：选择 -->
    <el-form-item label="入库时间">
       <el-col :span="11">
        <el-date-picker
          v-model="form_temp.createTime"
          type="date"
          placeholder="请选择入库时间"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">添加</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
  </el-dialog> 
</div>
</template>

<script lang="ts" setup>
import { reactive,ref,defineProps,defineEmits } from 'vue'
import { ElMessageBox } from 'element-plus'
import dayjs from "dayjs"
import {nanoid} from 'nanoid'
const emit = defineEmits(["formshow",'addData'])
const props = defineProps(["flag",]);
interface formData{
  ID?:string | number, //ID 唯一主键
  name:string, //名称
  price : string, //价格
  brand:string, //品牌
  online:string, //是否上架
  quantity : string, //数量
  createTime:string //入库时间
}

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('你确定关闭吗？')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
const cancel = ()=>{
    Reset()
   emit("formshow");
}

// 对时间戳进行格式化
function formatTime(){
  // 取出时间戳
  let temp_time = form_temp.value.createTime.valueOf();
  const temp_time_T = dayjs(temp_time).format("YYYY-MM-DD") //对时间戳进行格式化。
  form_temp.value.createTime = temp_time_T;
}

const form_temp = ref<formData>({
  name :"",
  price:"",
  brand:"",
  online:"",
  quantity:"",
  createTime:""
})

// 重置表单数据
function Reset(){
   form_temp.value = {
      name :"",
      price:"",
      brand:"",
      online:"",
      quantity:"",
      createTime:""
  }
}
const onSubmit = () => {
  formatTime();
  // 生成ID
  const id:string = nanoid();
  form_temp.value.ID = id;
  emit("addData",form_temp.value)
  Reset()
  emit("formshow");
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>