<template>
    <el-container style="height: 500px; border: 1px solid #eee">
      <Aside/>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <ElMain/>
      </el-container>
    </el-container>
</template>

<script>
import Aside from "./components/Aside";
import ElMain from "./components/ElMain";
export default {
  name: 'App',
  components: {Aside,ElMain},

}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
