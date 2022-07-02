<template>
    <div class="wrapper">
        <div class="head">
            <!-- 这里需要一个Input框，一个查找、新增按钮 -->
            <div class="search">
                <el-input v-model="keyword" placeholder="名称" style="width:150px;margin-right: 10px;" />
                <el-button type="primary">查找</el-button>
                <el-button type="success" @click="addHandle">添加</el-button>
            </div>
        </div>
        <storageTable :datalist="tableDataFilter" @deleteData="deleteData" @editData="editData"></storageTable>
        <!-- 新增数据的表单 -->
        <formItem :flag="flag" @formshow="formshow" @addData="addData"></formItem>
        <!-- 编辑数据的表单 -->
        <formEdit :temp_editData="temp_editData" :showEdit="showEdit" @updataData="updataData"></formEdit>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed ,reactive} from 'vue'
import formItem from './storageComponent/formItem.vue'
import storageTable from './storageComponent/storageTable.vue'
import formEdit from './storageComponent/formEdit.vue'
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
    name: "Storage",
    setup() {
        let keyword = ref("");
        let flag = ref({
            show: false
        })
        const showEdit = ref({
            show:false
        })

        const addHandle = () => {
            flag.value.show = true;
        }
        // 操作表单显示与隐藏
        function formshow() {
            // console.log("我触发了")
            flag.value.show = false;
        }
        let tableDataFilter = computed(() => {
            return tableData.value.filter((item) => {
                return item.name.toUpperCase().indexOf(keyword.value.toUpperCase()) != -1;
            })
        })
        
        const addData = (e:formData)=>{ //添加数据的函数
            // console.log("收到数据")
            tableData.value.unshift(e)
            // flag.value.show = false;
        }
        /**
         * 待明日完成的
         * 编辑数据（改）
         * 删除数据（删）
         */
        // 编辑数据
        let temp_editData = ref<formData>({
            ID:0,
            name:"", 
            price : "",
            brand:"", 
            online:"", 
            quantity : "", 
            createTime:"" 
        })
        
        const editData =(e:formData)=>{ //修改数据的函数
            temp_editData.value = e;
            showEdit.value.show = true;
        }

        const deleteData = (e:formData,index:number)=>{  //删除数据的函数
            const ID = e.ID;
            tableData.value = tableData.value.filter((item)=>{
                return item.ID != ID;
            })
        }

        const updataData = (e:formData)=>{ //更新数据的函数
            // console.log("我收到了更新请求")
            tableData.value.forEach(item => {
                if(item.ID == e.ID){
                    item.name = e.name
                    item.brand = e.brand
                    item.createTime = e.createTime
                    item.online = e.online
                    item.price = e.price
                    item.quantity = e.quantity
                }
            });
           showEdit.value.show = false;
        }

        let tableData = ref<formData[]>([{
            ID:'0',
            name:"小米13", //名称
            price : "4999", //价格
            brand:"小米", //品牌
            online:"是", //是否上架
            quantity : "200", //数量
            createTime:"2022-06-01" //入库时间
        },{
            ID:'1',
            name:"iphone 13", //名称
            price : "4999", //价格
            brand:"apple", //品牌
            online:"是", //是否上架
            quantity : "100", //数量
            createTime:"2022-06-03" //入库时间
        },{
            ID:'2',
            name:"redmin K50PRO", //名称
            price : "2999", //价格
            brand:"redmin", //品牌
            online:"是", //是否上架
            quantity : "300", //数量
            createTime:"2022-05-01" //入库时间
        },{
            ID:'3',
            name:"iphone 13 mini", //名称
            price : "4599", //价格
            brand:"apple", //品牌
            online:"是", //是否上架
            quantity : "100", //数量
            createTime:"2022-06-03" //入库时间
        }] ) 

        return {
            keyword, addHandle, flag, formshow, tableDataFilter,addData,deleteData,editData,temp_editData,showEdit,updataData
        }
    },

    components: {
        storageTable, formItem,formEdit
    }
})
</script>

<style scoped>
.head {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #f3f3f3;
}
</style>