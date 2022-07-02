<template>
  <div>
    <el-table :data="props.datalist" style="width: 100%">
    <el-table-column label="入库时间" prop="createTime" />
    <el-table-column label="名称" prop="name" />
    <el-table-column label="单价" prop="price" />
    <el-table-column label="数量" prop="quantity" />
    <el-table-column label="类别" prop="brand" />
    <el-table-column label="上架" prop="online"/>
    <el-table-column align="center">
      <template #header>
        <div style="text-align:center">操作</div>
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  </div>
  
</template>

<script lang="ts" setup>
import { computed, ref ,defineProps,defineEmits} from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const props = defineProps(["datalist"])
const emit = defineEmits(['deleteData','editData'])
interface formData{
  ID?:Number | String
  name:string, //名称
  price : string, //价格
  brand:string, //品牌
  online:string, //是否上架
  quantity : string, //数量
  createTime:string //入库时间
}
// 确认删除的函数
const confirmFun = (index:number,row:formData) => {
  ElMessageBox.confirm(
    '确认删除吗？',
    'Warning',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      emit("deleteData",row,index)
      ElMessage({
        type: 'success',
        message: '删除成功',
      })

    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除',
      })
    })
}
// 编辑的函数
const handleEdit = (index: number, row: formData) => {
  // console.log(index, row)
  // 在这里解构将其砍断响应式联系
  const {ID,brand,createTime,name,online,price,quantity} = row;
  emit("editData",{ID,brand,createTime,name,online,price,quantity});
}
// 删除的函数
const handleDelete = (index: number, row: formData) => {
  // console.log(index, row)
  confirmFun(index, row)
 
}


</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>