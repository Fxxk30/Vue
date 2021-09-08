<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="joke in jokes" :key="joke">{{joke}}</li>
        </ul>
        <div align="right"><el-button type="primary" round @click="moreJoke">10 more</el-button></div>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        name: "Joke",
        data(){
            return{
                jokes:[],
            }
        },
        methods:{
          moreJoke(){
              axios.get("https://autumnfish.cn/api/joke/list?num=10").then((response)=>{
                  this.jokes=response.data.jokes
              })
          }
        },
        beforeCreate() {
            axios.get("https://autumnfish.cn/api/joke/list?num=10").then((response)=>{
                this.jokes=response.data.jokes
            })
        }
    }
</script>

<style scoped>
    .el-header{
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
</style>