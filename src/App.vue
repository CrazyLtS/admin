<template>
  <div id="app">
    <router-view/>
    <button class="leave-btn" @click="leave"><i class="iconfont icon-getout"></i></button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    leave () {
      this.$confirm('确定要退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.state.isOn = false
        this.$router.push('/login')
      }).catch(() => {})
    }
  }
}
</script>

<style lang="less">
  html, body, #app {
    height: 100%;
    overflow: hidden;
  }
</style>
<style lang="less" scoped>
  #app {
    background: linear-gradient(40deg, #ca727c 0%, #ee98fb 50%, #08acd2 100%);
    .leave-btn {
      position: absolute;
      top: 50px;
      right: 50px;
      padding: 0;
      margin-right: 6px;
      color: #FFFFFF;
      border: 0;
      border-radius: 5px;
      background: none;
      background-color: #d27a00;
      outline: none;
      cursor: pointer;
      .iconfont {
        font-size: 1.5em;
      }
      &:active {
        color: #ffa93f;
      }
      &:hover {
        background: rgba(192, 255, 246, 0.42);
      }
    }
  }
</style>
