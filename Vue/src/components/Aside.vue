<template>
    <div>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>Fun</template>
                    <el-menu-item index="1-1"><router-link active-class="active" to="/joke">Joke</router-link></el-menu-item>
                    <el-menu-item index="1-2"><router-link active-class="active" to="/music">Music</router-link></el-menu-item>
                    <el-menu-item index="1-3"><router-link active-class="active" to="/hero">Hero</router-link></el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>User</template>
                    <el-menu-item index="2-1"><router-link active-class="active" to="/userLogin">login</router-link></el-menu-item>
                    <el-menu-item index="2-2"><router-link active-class="active" to="/userSignUp">sign up</router-link></el-menu-item>
                    <el-menu-item index="2-3"><router-link active-class="active" to="/aboutMe">AboutMyself</router-link></el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>Teacher</template>
                    <el-menu-item index="3-1"><router-link active-class="active" to="/teacherLogin">Login</router-link></el-menu-item>
                    <el-menu-item index="3-2"><router-link active-class="active" to="/allUser">AllUser</router-link></el-menu-item>
                    <el-menu-item index="3-3"><router-link active-class="active" to="/addUser">AddUser</router-link></el-menu-item>
                    <el-menu-item index="3-4"><router-link active-class="active" to="/updateUser">UpdateUser</router-link></el-menu-item>
                    <el-menu-item index="3-4"><router-link active-class="active" to="/sendMessage">SendMessage</router-link></el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>
    .el-aside {
        color: #333;
    }
</style>