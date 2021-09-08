<template>
    <el-form :label-position="labelPosition" label-width="80px">
        <el-form-item label="his/her id">
            <el-input v-model="User.id"></el-input>
        </el-form-item>
        <el-form-item label="his/her new name">
            <el-input v-model="User.name" placeholder="名字或者密码都要填，即使某一项不改"></el-input>
        </el-form-item>
        <el-form-item label="his/her new pwd">
            <el-input v-model="User.pwd" type="password" placeholder="名字或者密码都要填，即使某一项不改"></el-input>
        </el-form-item>
        <div align="right">
            <el-button type="danger" round @click="exitLogin">退出登录</el-button>
            <el-button type="success" round @click="updateUser">提交</el-button>
        </div>
    </el-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "UpdateUser",
        data() {
            return {
                labelPosition: 'left',
                User:{
                    id:0,
                    name:'',
                    pwd:''
                },
            };
        },
    methods:{
        updateUser(){
            axios.get("http://localhost:8080/huang/updateUser?id="+this.User.id+"&name="+this.User.name+"&pwd="+this.User.pwd).then((response)=>{
                if (response.data===1){
                    alert("更新成功！")
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