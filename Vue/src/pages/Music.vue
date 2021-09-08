<template>
    <el-container>
        <el-header>
            <div style="margin-top: 5px;">
                <el-input placeholder="请输入内容" v-model="musicName" @keyup.enter="searchMusic" class="input-with-select" >
                    <el-button slot="append" icon="el-icon-search" @click="searchMusic" align="right"></el-button>
                </el-input>
            </div>
        </el-header>
        <el-main>
            <ul class="list-group">
                <li class="list-group-item" v-for="music in musicList" :key=music.id>
                    {{music.name}}
                    <div align="right">
                        <el-button type="primary" @click="playMusic(music.id)">Play</el-button>
                    </div>
                </li>
            </ul>
        </el-main>
        <el-footer>
            <div align="center">
                <audio v-bind:src="musicurl" controls autoplay loop v-show="!musicList[0]==''"></audio>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Music",
        data(){
            return{
                musicName:'',
                musicList:[],
                musicurl:''
            }
        },
        methods:{
            searchMusic:function () {
                axios.get("https://autumnfish.cn/search?keywords="+this.musicName).then((response)=> {
                    this.musicList=response.data.result.songs
                    this.musicName=''
                    console.log(response.data)
                })
            },
            playMusic:function (id) {
                //console.log(id)
                axios.get("https://autumnfish.cn/song/url?id="+id).then((response)=> {
                    //console.log(response.data)
                    this.musicurl=response.data.data[0].url
                })
            }
        }
    }
</script>

<style scoped>
    .el-select .el-input {
        width: 130px;
    }
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>