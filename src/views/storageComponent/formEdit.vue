<template>
<div>
<el-dialog
    v-model="props.showEdit.show"
    title="编辑"
    width="30%"
    :before-close="handleClose"
  >
    <el-form :model="temp_editData" label-width="120px">
    <el-form-item label="产品名称">
      <el-input v-model="temp_editData.name" />
    </el-form-item>
    <el-form-item label="是否上架">
      <el-select v-model="temp_editData.online" placeholder="请选择">
        <el-option label="是" value="是" />
        <el-option label="否" value="否" />
      </el-select>
    </el-form-item>
    <el-form-item label="数量">
        <el-input v-model="temp_editData.quantity" />
    </el-form-item>
   
    <el-form-item label="品牌">
      <el-input v-model="temp_editData.brand" />
    </el-form-item>
    <el-form-item label="单价">
      <el-input v-model="temp_editData.price" />
    </el-form-item>
   
    <el-form-item label="入库时间">
       <el-col :span="11">
        <el-date-picker
          v-model="temp_editData.createTime"
          type="date"
          placeholder="请选择入库时间"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确认</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
  </el-dialog> 
</div>
</template>

<script lang="ts">
import { defineComponent ,ref,toRefs,toRef,onMounted,watch} from "vue";
import { ElMessageBox } from 'element-plus'
import dayjs from "dayjs"
interface formData{
  ID?:number | string,
  name:string, //名称
  price : string, //价格
  brand:string, //品牌
  online:string, //是否上架
  quantity : string, //数量
  createTime:string //入库时间
}
export default defineComponent({
    name:"FormEdit",
    props:['temp_editData','showEdit'],
    setup(props,{emit}){
        const {temp_editData} = toRefs(props);
        const dialogVisible = ref(false)
        const handleClose = (done: () => void) => {
        ElMessageBox.confirm('你确定放弃编辑吗？😦')
            .then(() => {
            done()
            })
            .catch(() => {
            // catch error
            })
        }
        const onSubmit = ()=>{
            // console.log(temp_editData)
            // const temp = temp_editData.value.createTime.valueOf();
            temp_editData.value.createTime = dayjs(temp_editData.value.createTime.valueOf()).format("YYYY-MM-DD") as string;
            emit("updataData",temp_editData.value)
            emit("showEdit")
        }
        const cancel =()=>{

        }

        
        return {
            dialogVisible,handleClose,props,onSubmit,cancel,temp_editData
        }
    },
    components:{

    }
})
</script>