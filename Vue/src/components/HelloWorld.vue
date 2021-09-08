<template>
  <div class="hello">
    <button @click="hello">click</button>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  methods:{
    hello:function () {
      //在这里是向我们配置的代理服务器发送请求，然后代理服务器在向目标服务器8081发送请求
      axios.get("http://localhost:8080/atguigu/selectUser").then((response)=>{
          console.log(response.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
