<template>
  <div class="editwrapper">
    <div class="title"><h2>基本资料</h2></div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="联系方式" name="first">
    <div>
    <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    size="default"
    status-icon
  >
    <el-form-item label="手机号码" prop="phone">
      <el-input v-model="ruleForm.phone" />
    </el-form-item>
     <el-form-item label="邮箱" prop="email">
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >提交</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>

      </div>
 </el-tab-pane>
    <el-tab-pane label="密码" name="second">
      <div class="pwd">
      <span>旧密码:</span> 
       <el-input
        v-model="oldPwd"
        type="password"
        placeholder="请输入旧密码"
        show-password
      />
    <div style="height:20px"></div>
     <span>新密码:</span>   
       <el-input
        v-model="newPwd"
        type="password"
        placeholder="请输入新密码"
        show-password
      />
      <div style="height:20px"></div>
      <span>确认新密码:</span>   
       <el-input
        v-model="ValidationPwd"
        type="password"
        placeholder="请再输入一遍新密码"
        show-password
      />
      <div class="buttonL"><el-button type="primary" round @click="ValidationPwdFun">提交</el-button></div>
      
      </div>
    </el-tab-pane>
  </el-tabs>
  </div>
  
</template>
<script lang="ts" setup>
import { reactive, ref ,defineProps,defineEmits} from 'vue'
import type { FormInstance, FormRules,TabsPaneContext  } from 'element-plus'
import {ElMessage} from 'element-plus'
const props = defineProps(['personFile']);
const emit = defineEmits(['editFile']);
const activeName = ref('first')
const oldPwd = ref('') //旧密码
const newPwd = ref('') //新密码
const ValidationPwd = ref(""); //效验的密码
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const ValidationPwdFun = ()=>{ //效验密码的函数
     if(oldPwd.value === 'AZ12138'){
      if(newPwd.value === ValidationPwd.value){
        // 提示个消息
          ElMessage({
            message: '密码修改成功！（无实际作用）',
            type: 'success',
          })
      }
     }else{
      //  旧密码不正确也提示个消息
       ElMessage.error('旧密码不正确！')
     }
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  phone:"",
  email : ""
})
ruleForm.email = props.personFile[2].content;
ruleForm.phone = props.personFile[1].content;
const rules = reactive<FormRules>({
  phone:[
    {required:true,message:"请输入手机号码",trigger:"blur"},
    {min:11,max:11,message:"请输入合法的手机号码",trigger:"blur"}
    ],
  email:[
    {required:true,message:"请输入邮箱",trigger:"blur"},
    // 邮箱的正则直接使用type:'email'
    {type: 'email',message:"请输入合法的邮箱",trigger:"blur"}
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
    await formEl.validate((valid, fields) => {
    if (valid) {
      emit("editFile",ruleForm)
     ElMessage({
            message: '修改成功',
            type: 'success',
          })
    } else {
       ElMessage.error('效验不合格无法提交，请检查！')
      // console.log('error submit!', fields)
    }
  })
}


const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))

</script>
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.title{
  border-bottom: 2px solid rgb(240, 237, 237);
}

.pwd{
  width: 312px;
}

.buttonL{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
