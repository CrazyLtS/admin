<template>
  <el-container class="aside-tools">
    <el-header height="25%" class="aside-header">
      <el-avatar
      :src="imgUrl"
      shape="square"
      alt="Author"
      fit="fill"
      class="avatar"
      >
      </el-avatar>
      <p class="author-name">{{authorName}}</p>
      <p class="author-job">{{authorJob}}</p>
    </el-header>
    <tool-main></tool-main>
  </el-container>
</template>

<script>
import author from 'assets/image/author.jpg'
import ToolMain from 'components/ToolMain'
export default {
  name: 'AsideTools',
  components: {
    ToolMain
  },
  data () {
    return {
      imgUrl: author,
      authorJob: 'BOSS'
    }
  },
  computed: {
    authorName () {
      return this.$store.state.userName
    }
  }
}
</script>

<style lang="less" scoped>
  .aside-tools {
    box-sizing: border-box;
    height: 100%;
    padding-top: 10px;
    overflow: hidden;
    .aside-header {
      padding-left: 25%;
      .avatar {
        width: 65%;
        height: 60%;
      }
      p {
        padding: 0;
        margin: 0;
        padding-top: 10px;
      }
      .author-name {
         color: #883f3f;
         font-size: 1em;
       }
       .author-job {
         color: #888888;
         font-size: .8em;
         padding-top: 5px;
       }
    }
  }
</style>
