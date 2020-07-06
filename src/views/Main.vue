<template>
  <div class="main">
    <el-container class="contain">
      <el-aside :width="asideWidth" class="aside" ref="aside">
        <aside-tools></aside-tools>
        <el-button
        icon="el-icon-arrow-left"
        class="aside-show-btn"
        @click.native="handleAsideShow"
        ></el-button>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AsideTools from 'components/AsideTools'
import 'public/font/iconfont.css'
export default {
  name: 'Main',
  components: {
    AsideTools
  },
  data () {
    return {
      opaside: true,
      asideWidth: '20%',
      asideFirstW: ''
    }
  },
  methods: {
    handleAsideShow () {
      this.opaside = !this.opaside
      this.asideWidth = this.opaside ? '20%' : '0%'
    }
  }
}
</script>

<style lang="less">
  .main {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 80%;
    height: 80%;
    margin: auto;
    background: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .1);
    overflow: hidden;
  }
</style>

<style lang="less" scoped>
  .el-aside {
    width: 20%;
    background: #EEEEEE;
  }
  .main {
    min-width: 1090px;
    .contain {
      height: 100%;
      .aside {
        position: relative;
        overflow: visible;
        transition: width .5s;
      .aside-show-btn {
        position: absolute;
        right: 0;
        top: 50%;
        border: none;
        border-radius: 0px 5px 5px 0;
        padding: 15px 3px;
        transform: translate(100%, -50%);
        background: rgba(53, 97, 255, 0.2);
        color: #cbce04;
      }
      }
    }
  }
</style>
