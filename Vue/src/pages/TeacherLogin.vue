<template>
    <div id="login">
        <div class="loginToHome">
            <el-form
                    :model="teacher"
                    :rules="ruleForm"
                    status-icon
                    label-width="80px"
                    class="loginForm"
            >
                <h3>登陆</h3>
                <el-form-item
                        label="用户名"
                        prop="name"
                >
                    <el-input
                            auto-complete="off"
                            type="text"
                            v-model="teacher.name"
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
                            v-model="teacher.pwd"
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
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "TeacherLogin",
        data() {
            return {
                login:false,
                teacher:{
                    name:'',
                    pwd:''
                },
                ruleForm: {
                    name: [
                        {required: true, message: '请输入账号', trigger: 'blur'},
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
                if (this.teacher.name!=''&&this.teacher.pwd!=''){
                    axios.get("http://localhost:8080/huang/teacherLogin?name="+this.teacher.name+"&pwd="+this.teacher.pwd).then((response)=> {
                        console.log(response)
                        if (1==response.data){
                            alert("successful login")
                            localStorage.setItem("teacherLogin",true)
                        }else {
                            alert("name or pwd err")
                            localStorage.setItem("teacherLogin",'')
                        }
                    })
                }else{
                    alert("name or pwd is empty")
                }
            }
        },
        beforeDestroy() {
            this.$message({
                message: '管理员操作完成后记得退出登录',
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