<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="hero in heros" :key="hero.name">{{hero.name}}</li>
        </ul>
        <div class="block">
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000"
                    @current-change="currentChange"
                    :current-page="nowpage"
            ><!--顺序-->
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Hero",
        data(){
            return{
                nowpage:1,
                heros:[],
            }
        },
        beforeMount() {//beforeCreate时，数据还没挂载，还没拿到，不能用来发请求
            axios.get("https://autumnfish.cn/api/cq/page?pageSize=10&pageNum="+this.nowpage).then((response)=>{
                this.heros=response.data.list
                console.log(this.nowpage)
            })
        },
        methods:{
            currentChange(currentpage){
                this.nowpage = currentpage;
                console.log(this.nowpage)
                axios.get("https://autumnfish.cn/api/cq/page?pageSize=10&pageNum="+currentpage).then((response)=>{
                    this.heros=response.data.list
                    console.log(response.data)
                })
            }
        }
    }
</script>

<style scoped>

</style>