<template>
  <div class="user-card">
    <card-header title="个人信息"></card-header>
    <div class="user-msg">
      <el-image
      :src="userImgUrl"
      style="width: 120px; height: 130px;display: block;"
      ></el-image>
      <div class="user-msg-text">
      <p class="msg-text msg-name">SendBer</p>
      <p class="msg-text msg-email">1169682358@qq.com</p>
      <p class="msg-text msg-phone">18027234544</p>
      <p class="msg-text msg-mantra">未经他人苦 莫劝他人善</p>
      </div>
    </div>
  </div>
</template>

<script>
import CardHeader from 'otherComponents/userComponents/CardHeader.vue'
export default {
  name: 'MsgCard',
  components: {
    CardHeader
  },
  data () {
    return {
      userImgUrl: 'assets/imgs/user/user.png'
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/css/common';
.user-card {
  .user-msg {
    display: flex;
    padding: 0 30px;
    padding-bottom: 30px;
    .user-msg-text {
      flex: 1;
      margin-left: 30px;
      padding-top: 20px;
      vertical-align: top;
      .msg-text {
        margin-bottom: 8px;
        color: @content-card-color;
      }
      .msg-name {
        color: #000000;
        font-size: 18px;
        font-weight: 700;
      }
      .msg-email {
        font-family: @email-font-family;
      }
      .msg-phone {
        font-family: @email-font-family;
      }
      .msg-mantra {
        color: #606266;
        font-size: 14px;
        width: 180px;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        letter-spacing: 1px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      }
    }
  }
}
</style>
