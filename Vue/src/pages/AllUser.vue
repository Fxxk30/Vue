<template>
    <el-main>
        <el-table :data="UserList" style="width: 100%">
            <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column>
                <template slot-scope="scope"><!--通过<template slot-scope=“scope”>来定义当前行的数据对象，然后通过scope.row来获取当前行的数据。-->
                <el-button type="danger" icon="el-icon-delete" circle @click="deteleUser(scope.row.id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <div align="right">
            <el-button type="danger" round @click="exitLogin">退出登录</el-button>
        </div>
    </el-main>
</template>

<script>
    import axios from "axios";
    export default {
        name: "AllUser",
        data(){
            return{
                UserList:[]
            }
        },
        methods:{
            deteleUser(id){
                axios.get("http://localhost:8080/huang/deleteUser?id="+id).then((response)=>{
                    if (response.data===1){
                        alert("删除成功")
                        axios.get("http://localhost:8080/huang/selectUser").then((response)=>{
                            this.UserList=response.data
                        })
                    }
                })
            },
            exitLogin(){
                localStorage.setItem("teacherLogin",'')
            }
        },
        beforeCreate(){
            axios.get("http://localhost:8080/huang/selectUser").then((response)=>{
                this.UserList=response.data
            })
        }
    }
</script>

<style scoped>

</style>