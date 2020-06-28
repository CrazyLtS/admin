<template>
  <el-card
  class="def-card"
  >
    <div class="card-header">
      <i :class="[icon, 'icon-mark']"></i>
      <i class="el-icon-more-outline icon-more" @click="gotoDataCenter"></i>
      <span class="data-wrap">
        <span class="data-name">{{name}}</span>
        <span class="data-numb">{{amount}}</span>
      </span>
    </div>
    <div class="data-progress">
      {{name}}占比：
      <el-progress :percentage="percentage" :color="color" ref="pgs"></el-progress>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    percentage: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      default: '#24ce95'
    },
    name: String,
    amount: [Number, String],
    icon: {
      type: String,
      default: 'el-icon-set-up'
    }
  },
  methods: {
    // 修改进度条的颜色
    setProgressColor (color) {
      this.$refs.pgs.$el.querySelector('.el-progress-bar__inner').style.background = color
    },
    gotoDataCenter () {
      this.$router.push({ name: 'DataCenter' })
      this.$store.commit('changeMenuActive', 3)
      this.$store.commit('changeModeName', '数据中心')
    }
  },
  mounted: function () {
    this.setProgressColor(this.color)
  }
}
</script>

<style lang="less" scoped>
@import '~assets/css/common';
.def-card {
  position: relative;
  width: 25%;
  min-width: 285px;
  height: 150px;
  font-size: 14px;
  border: none;
  color:@content-card-color;
  .card-header {
      border: none;
    .icon-mark {
       font-size: 40px;
       margin-right: 15px;
    }
    .icon-more {
      position: absolute;
      top: 15px;
      right: 10px;
      transform: rotate(90deg);
      cursor: pointer;
    }
    .data-wrap {
      display: inline-block;
      width: 100px;
      .data-name {
        font-size: 14px;
        display: block;
      }
      .data-numb {
        display: block;
        font-weight: 700;
        font-size: 18px;
      }
    }
  }
  .data-progress {
    position: absolute;
    left: 0;
    bottom: 15px;
    width: 90%;
    padding-left: 25px;
  }
}
</style>
