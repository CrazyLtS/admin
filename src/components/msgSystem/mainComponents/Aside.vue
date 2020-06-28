<template>
  <el-menu ref="asideMenu"
  default-active="1"
  text-color="#aba5a4"
  active-text-color="#e28d21"
  class="aside-menu"
  >
    <el-menu-item
    v-for="item of menuItems"
    :key="item.btnText"
    :index="item.index"
    class="aside-item"
    @click="handleRouter(item.route, item.btnText, item.index)"
    >
    <i :class="item.icon"></i>
      <transition name="fade">
        <span v-show="isNavOpen" class="nav-text">{{item.btnText}}</span>
      </transition>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Aside',
  data: () => {
    return {
      menuItems: [
        {
          index: '1',
          route: { name: 'UserIfon' },
          icon: 'el-icon-user',
          btnText: '管理员信息'
        },
        {
          index: '2',
          route: { name: 'DataView' },
          icon: 'el-icon-view',
          btnText: '数据统计'
        },
        {
          index: '3',
          route: { name: 'DataCenter' },
          icon: 'el-icon-s-operation',
          btnText: '数据中心'
        },
        {
          index: '4',
          route: { name: 'Message' },
          icon: 'el-icon-chat-line-square',
          btnText: '消息中心'
        },
        {
          index: '7',
          route: { name: 'Sketchpad' },
          icon: 'el-icon-edit',
          btnText: 'Canvas画板'
        }
      ]
    }
  },
  computed: {
    isNavOpen () {
      return this.$store.getters.isNavOpen
    },
    activeIndex () {
      return this.$store.state.activeIndex
    }
  },
  methods: {
    ...mapMutations([
      'changeModeName'
    ]),
    handleRouter (routes, modeName, index) {
      this.changeModeName(modeName)
      this.$router.push(routes)
      this.$store.commit('changeMenuActive', index)
    }
  },
  // 监听activeIndex的变化
  watch: {
    activeIndex () {
      this.$refs.asideMenu.activeIndex = this.activeIndex
    }
  }
}
</script>

<style lang="less" scoped>
// vue动画
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.aside-menu {
    border: none;
  .aside-item {
    // text-align: center;
    font-size: 14px;
    .nav-text {
     display: inline-block;
    }
  }
}
</style>
