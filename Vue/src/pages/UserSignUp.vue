<template>
    <el-form :label-position="labelPosition" label-width="80px" >
        <el-form-item label="name">
            <el-input v-model="User.name"></el-input>
        </el-form-item>
        <el-form-item label="password">
            <el-input v-model="User.pwd" type="password"></el-input>
        </el-form-item>
        <div align="right">
            <el-button type="success" round @click="addUser">提交</el-button>
        </div>
    </el-form>
</template>

<script>
    import axios from "axios";
    export default {
        name: "UserSignUp",
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
                        alert("注册成功！")
                    }
                })
            },
            exitLogin(){
                localStorage.setItem("userLogin",'')
            }
        }

    }
</script>

<style scoped>

</style>