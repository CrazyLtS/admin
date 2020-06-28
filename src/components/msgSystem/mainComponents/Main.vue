<template>
  <div class="main">
    <el-row class="title-row">
      <span class="border-left"></span>
      <span class="title-name" :span="2">{{modeName}}</span>
      <el-col class="fun-btns" :span="4">
        <el-button
        class="btn-fun"
        @click="refreshDOM"
        size="mini"
        icon="el-icon-refresh"
        >刷新</el-button>
        <el-button
        class="btn-fun"
        icon="el-icon-question"
        size="mini"
        >帮助</el-button>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main',
  computed: {
    modeName () {
      return this.$store.state.modeName
    }
  },
  methods: {
    refreshDOM () {
      this.$router.push({ name: 'Blank' })
      setTimeout(() => {
        this.$router.back()
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/css/common.less';
.main {
  box-sizing: border-box;
  position: relative;
  height: 100%;
  padding-top: @title-height;
  overflow: hidden;
  .title-row {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 0 30px;
    background: @title-background;
    height: @title-height;
    line-height: @title-height;
    .border-left {
      display: inline-block;
      width: 2px;
      height: @title-height / 2;
      background-color: #44b8e0;
      vertical-align: middle;
    }
    .title-name {
      display: inline-block;
      margin-left: 15px;
      font-size: 16px;
      color: @title-color;
    }
    .fun-btns {
      float: right;
      min-width: 156px;
      height: @title-height;
      .btn-fun {
        background: @title-background;
        color: @title-color;
      }
    }
  }
}
</style>
