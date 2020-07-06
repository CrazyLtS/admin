<template>
  <el-main>
    <el-menu
    class="menu"
    background-color="rgba(0,0,0,0)"
    default-active="/main/first"
    router
    >
      <el-menu-item
      class="menu-item"
      index="/main/first"
      >
        <i class="el-icon-user"></i>
        模块1
      </el-menu-item>
      <el-menu-item
      class="menu-item"
      index="/main/second"
      >
        <i class="el-icon-s-operation"></i>
        模块2
      </el-menu-item>
      <el-menu-item
      class="menu-item"
      index="/main/third"
      >
        <i class="el-icon-message"></i>
        模块3
      </el-menu-item>
    </el-menu>
  </el-main>
</template>

<script>
export default {
  name: 'ToolMain'
}
</script>

<style lang="less" scoped>
  /deep/ .menu {
    border: none;
    .menu-item {
      background: none;
    }
  }
</style>
