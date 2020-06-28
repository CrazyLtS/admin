<template>
  <el-container class="def-container">
      <!-- header -->
      <el-header class="def-header" height="68px">
        <Header></Header>
      </el-header>
      <!-- content -->
      <el-container class="inner-container">
          <el-aside :style="{width: asideWidth}">
            <!-- add some icon -->
            <Aside></Aside>
          </el-aside>
        <el-main>
          <!-- do some thing -->
          <Main></Main>
        </el-main>
      </el-container>
  </el-container>
</template>

<script>
import Header from 'mainComponents/Header.vue'
import Aside from 'mainComponents/Aside.vue'
import Main from 'mainComponents/Main.vue'
export default {
  name: 'MsgSystem',
  components: {
    Header,
    Aside,
    Main
  },
  data: function () {
    return {
    }
  },
  computed: {
    asideWidth () {
      return this.$store.state.asideWidth
    }
  }
}
</script>

<style lang="less">
@import '~assets/css/common.less';
.def-container {
  height: 100%;
  width: 100%;
  background-image: url(~assets/imgs/bgImg.jpg);
  background-size: 100% 100%;
  .def-header {
    padding: 0;
  }
  .inner-container {
    position: absolute;
    top: @header-height;
    left: 0;
    right: 0;
    bottom: 0;
    .el-aside {
      transition: all .5s;
      height: 100%;
      background: #FFFFFF;
      overflow: hidden;
    }
    .el-main {
      background: rgba(255, 255, 255, .9);
      padding: 0;
    }
  }
}
</style>
