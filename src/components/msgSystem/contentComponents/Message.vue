<template>
  <div class="message">
    <div class="message-inner">
      <el-row>
        <el-menu
          default-active="{name: 'AllMsg'}"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item @click="handleRouter('AllMsg')" index="1">全部消息</el-menu-item>
          <el-menu-item @click="handleRouter('Comment')" index="2">留言信息</el-menu-item>
          <el-menu-item @click="handleRouter('News')" index="3">公告新闻</el-menu-item>
        </el-menu>
      </el-row>
      <el-row style="padding: 0px 15px;">
        <router-view></router-view>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  methods: {
    handleRouter (routerName) {
      this.$router.push({ name: routerName })
    }
  }
}
</script>

<style lang="less" scoped>
.message {
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  padding: 30px 15px;
  .el-row {
    background: #FFFFFF;
  }
}
</style>
