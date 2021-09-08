<template>
    <div id="login">
        <div class="loginToHome">
            <el-form
                    :model="user"
                    :rules="ruleForm"
                    status-icon
                    label-width="80px"
                    class="loginForm"
            >
                <h3>登陆</h3>
                <el-form-item
                        label="ID"
                        prop="id"
                >
                    <el-input
                            auto-complete="off"
                            type="text"
                            v-model="user.id"
                            placeholder="请输入用户名"
                    ></el-input>
                </el-form-item>
                <el-form-item
                        label="Name"
                        prop="name"
                >
                    <el-input
                            auto-complete="off"
                            type="text"
                            v-model="user.name"
                            placeholder="请输入用户名"
                    ></el-input>
                </el-form-item>
                <el-form-item
                        label="密码"
                        prop="pwd"
                >
                    <el-input
                            auto-complete="off"
                            type="password"
                            v-model="user.pwd"
                            placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                            class="homeBut"
                            type="primary"
                            plain
                            @click="submit"
                    >登录</el-button>
                </el-form-item>
            </el-form>

        </div>
        <!--<el-input v-model="user.id" placeholder="id"></el-input>
        <el-input v-model="user.name" placeholder="name"></el-input>
        <el-input v-model="user.pwd" placeholder="pwd"></el-input>
        <button @click="submit"></button>-->
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "UserLogin",
        data() {
            return {
                login:false,
                user:{
                    id:0,
                    name:'',
                    pwd:''
                },
                ruleForm: {
                    id: [
                        {required: true, message: '请输入账号', trigger: 'blur'},
                    ],
                    name: [
                        {required: true, message: '请输入名字', trigger: 'blur'},
                    ],
                    pwd: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ]
                }
            }
        },
        methods: {
            submit()
            {
                if (this.user.name!=''&&this.user.pwd!=''&&this.user.name!=''){
                    axios.get("http://localhost:8080/huang/userLogin?id="+this.user.id+"&pwd="+this.user.pwd+"&name="+this.user.name).then((response)=> {
                        if (1==response.data){
                            alert("successful login")
                            localStorage.setItem("userLogin",true)
                            localStorage.setItem("userId",this.user.id)
                        }else {
                            alert("name or pwd err")
                            localStorage.setItem("userLogin",'')
                        }
                    })
                }else{
                    alert("name or pwd is empty")
                }
            }
        },
        beforeDestroy() {
            this.$message({
                message: 'user操作完成后记得退出登录',
                type: 'warning'
            });
        }
    }
</script>

<style scoped>
    .loginToHome {
        position: absolute;
        left: 0px;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 400px;
        height: 260px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        background: #fff;
        border: 1px solid #dcdfe6;
    }
    .loginForm {
        text-align: center;
        padding-top: 15px;
        padding-right: 30px;
        top: 10px;
    }
    .homeBut {
        position: absolute;
        left: 0px;
    }
    .loginBut {
        position: absolute;
        right: 0px;
    }
</style>