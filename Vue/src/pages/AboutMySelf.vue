<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item">{{user.id}}</li>
            <li class="list-group-item">{{user.name}}</li>
        </ul>
        <ul class="list-group" v-for="message in messages" :key="message.mid">
            <li class="list-group-item">{{message.msg}}---{{message.mtime}}</li>
        </ul>
        <div align="right">
            <el-button type="danger" round @click="exitLogin">退出登录</el-button>
        </div>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        name: "AboutMySelf",
        data(){
            return{
                user:{
                    id:0,
                    name:''
                },
                messages:[]
            }
        },
        beforeMount() {
            axios.get("http://localhost:8080/huang/aboutMe?id="+localStorage.getItem("userId")).then((response)=> {
                console.log(response.data)
                this.user.id=response.data.id
                this.user.name=response.data.name
            })
            axios.get("http://localhost:8080/huang/allMessage").then((response)=> {
                console.log(response.data)
                this.messages=response.data
            })

        },
        methods:{
        exitLogin(){
            localStorage.setItem("userLogin",'')
            localStorage.setItem("userId",'')
        }
        }
    }
</script>

<style scoped>

</style>