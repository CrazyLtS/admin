<template>
  <div class="login">
      <div class="form-wrap-item">
        <label class="form-label">
          账户
          <input :value="userName" @change="changeName($event.target.value)" type="text" class="input">
        </label>
      </div>
      <div class="form-wrap-item">
        <label class="form-label">
          密码
          <input :value="passWord" @change="changePassWord($event.target.value)" type="password" class="input">
        </label>
      </div>
      <button @click="handleLogin" class="sub-btn">
        登录
      </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  computed: {
    userName () {
      return this.$store.state.userName
    },
    passWord () {
      return this.$store.state.passWord
    }
  },
  methods: {
    ...mapMutations([
      'changeName',
      'changePassWord'
    ]),
    handleLogin () {
      this.$store.state.isOn = true
      this.$router.push({ name: 'Main' })
    }
  },
  beforeRouteLeave (to, from, next) {
    const verify = {
      name: this.$store.state.userName,
      passWord: this.$store.state.passWord
    }
    this.$http.get('/verify.json').then(({ data }) => {
      if (data.name !== verify.name) {
        this.$message({
          message: '账户名无效',
          type: 'error',
          duration: 1000
        })
        next(false)
      } else if (data.passWord !== verify.passWord) {
        this.$message({
          message: '密码错误',
          type: 'error',
          duration: 1000
        })
        next(false)
      } else if (!this.$store.state.isOn) {
        this.$message({
          message: '请先登录！',
          type: 'error',
          duration: 1000
        })
        next('/login')
      } else {
        next()
      }
    })
  }
}
</script>

<style lang="less" scoped>
  .login {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 300px;
    height: 250px;
    .form-wrap-item {
      width: 100%;
      margin-bottom: 15px;
      text-indent: .5em;
      .form-label {
        color: #c5036f;
        font-size: 18px;
        .input {
          display: block;
          width: 100%;
          height: 30px;
          margin-top: 10px;
          font-size: 14px;
          text-indent: 1em;
          color: #EEEEEE;
          transition: color .5s;
          border: none;
          border-radius: 8px;
          background: #FFFFFF;
          outline: none;
          &:focus {
            color: #a2a2a2;
          }
        }
      }
    }
    .sub-btn {
      width: 80px;
      height: 30px;
      display: block;
      margin: auto;
      border: none;
      border-radius: 5px;
      outline: none;
      background: #00b75a;
      color: #FFFFFF;
      cursor: pointer;
      &:hover {
        background: #00d066;
      }
    }
  }
</style>
