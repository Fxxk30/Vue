<template>
    <el-form :label-position="labelPosition" label-width="80px" >
        <el-form-item label="name">
            <el-input v-model="User.name"></el-input>
        </el-form-item>
        <el-form-item label="password">
            <el-input v-model="User.pwd" type="password"></el-input>
        </el-form-item>
        <div align="right">
            <el-button type="danger" round @click="exitLogin">退出登录</el-button>
            <el-button type="success" round @click="addUser">提交</el-button>
        </div>
    </el-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "AddUser",
        data(){
            return{
                User:{
                    name:'',
                    pwd:''
                },
                labelPosition: 'right',
            }
        },
        methods:{
            addUser(){
                axios.get("http://localhost:8080/huang/addUser?name="+this.User.name+"&pwd="+this.User.pwd).then((response)=>{
                    if (response.data===1){
                        alert("添加成功！")
                    }
                })
            },
            exitLogin(){
                localStorage.setItem("teacherLogin",'')
            }
        }
    }
</script>

<style scoped>

</style>