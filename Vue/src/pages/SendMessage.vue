<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="发布信息">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="发布时间">
            <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <div align="right">
            <el-button type="success" round @click="sendMsg">发送信息</el-button>
        </div>
    </el-form>
</template>

<script>
    import axios from "axios";
    export default {
        name: "SendMessage",
        data() {
            return {
                form: {
                    name: '',
                    date1: ''
                }
            }
        },
        methods: {
            sendMsg() {
                let date1=this.moment(this.form.date1).format('YYYY-MM-DD')
                console.log(date1)
                axios.get("http://localhost:8080/huang/addMessage?msg=" + this.form.name +"&mtime="+date1).then((response) => {
                    if (response.data === 1) {
                        alert("添加成功！")
                    }else {
                        console.log(response.data)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>