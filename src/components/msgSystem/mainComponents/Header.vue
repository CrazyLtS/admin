<template>
  <div class="header">
    <el-button :icon="hdBtnIcon" class="hd-btn" @click="handleHdBtnClick"></el-button>
    <h1 class="header-title">后台管理系统</h1>
    <el-row class="header-nav">
        <!-- 放大按钮 -->
      <i :class="[scaleBtnIcon,'hd-nav-icon']" @click="handleScaleBtnClick"></i>
      <!-- 消息按钮 -->
      <i class="el-icon-bell hd-nav-icon"></i>
      <!-- 头像 -->
      <el-avatar size="large" shape="square" fit="cover" class="header-avatar">
        <img src="assets/imgs/user/user.png" alt="CrazyLtS">
      </el-avatar>
      <!-- 用户名下拉菜单 -->
      <el-dropdown trigger="click" @visible-change="handleVisibleChange">
        <span>{{this.$store.state.userName}}<i :class="[menuBtnIcon, 'el-icon--right']"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>项目仓库</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Header',
  data: function () {
    return ({
      hdBtnIcon: 'el-icon-s-unfold',
      scaleBtnIcon: 'el-icon-full-screen',
      menuBtnIcon: 'el-icon-caret-bottom'
    })
  },
  methods: {
    ...mapActions([
      'getUserIfon'
    ]),
    handleHdBtnClick () {
      const isOpen = this.hdBtnIcon === 'el-icon-s-unfold'
      this.hdBtnIcon = isOpen ? 'el-icon-s-fold' : 'el-icon-s-unfold'
      isOpen ? this.$store.commit('setAsideWidth', '200px') : this.$store.commit('setAsideWidth', '60px')
    },
    handleScaleBtnClick () {
      const isFull = this.scaleBtnIcon === 'el-icon-full-screen'
      this.scaleBtnIcon = isFull ? 'el-icon-aim' : 'el-icon-full-screen'
      this.triggerFullScreen(isFull)
    },
    handleVisibleChange (isClose) {
      this.menuBtnIcon = isClose ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
    },
    // 全屏逻辑
    triggerFullScreen (isFull) {
      const doc = document.body
      if (isFull) {
        // 全屏
        if (doc.requestFullscreen) {
          doc.requestFullscreen()
        } else if (doc.mozRequestFullScreen) {
          doc.mozRequestFullScreen()
        } else if (doc.webkitRequestFullscreen) {
          doc.webkitRequestFullscreen()
        } else if (doc.msRequestFullscreen) {
          doc.msRequestFullscreen()
        }
      } else {
        // 关闭全屏
        if (document.exitFullScreen) {
          document.exitFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      }
    }
  },
  created: function () {
    this.getUserIfon()
  }
}
</script>

<style lang="less" scoped>
@import '~assets/css/common.less';
.header {
  height: @header-height;
  line-height: 0;
  background: #242f42;
  font-size: @header-font-size;
  color: @header-color;
  // 按钮样式设置
  .hd-btn {
    background: #242f42;
    border: none;
    height: @header-height;
    font-size: @header-font-size;
    color: @header-btn-color;
    &:hover {
      background: #283446;
    }
  }
  // 标题样式
  .header-title {
    display: inline-block;
    font-size: @header-font-size;
    font-weight: 400;
  }
  // 头部的功能键
  .header-nav {
    float: right;
    line-height: @header-height;
    margin-right: 50px;
    .hd-nav-icon {
      cursor: pointer;
      margin-right: @header-navbtn-space;
      vertical-align: middle;
    }
    // 头像
    .header-avatar {
      vertical-align: middle;
      margin-right: @header-navbtn-space;
    }
    .el-dropdown {
      line-height: @header-navbtn-height;
      cursor: pointer;
      color: @header-color;
    }
  }
}
</style>
