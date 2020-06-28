<template>
<h5 class="card-header">
  {{title}}
  <el-tooltip
  placement="top-end"
  :offset="-1"
  content="修改信息"
  >
    <i class="el-icon-edit-outline change-ifon-icon" @click="gotoSetting"></i>
  </el-tooltip>
</h5>
</template>

<script>
export default {
  name: 'CardHeader',
  props: {
    title: String
  },
  methods: {
    gotoSetting () {
      this.$router.push({ name: 'Setting' })
      this.$store.commit('changeMenuActive', 9)
      this.$store.commit('changeModeName', '设置')
    }
  }
}
</script>

<style lang="less" scoped>
.card-header {
  position: relative;
  height: 30px;
  margin-bottom: 15px;
  line-height: 30px;
  color: #FFFFFF;
  text-indent: 1em;
  font-family: '微软雅黑';
  background-color: #f3b685;
  .change-ifon-icon {
    position: absolute;
    right: 15px;
    top: 10px;
    cursor: pointer;
    vertical-align: middle;
  }
}
</style>
