<template>
  <el-card
  class="def-card"
  >
    <div class="card-header">
      <i class="icon-mark"></i>
      <span class="data-wrap">
        <span class="data-name">{{name}}</span>
        <span class="data-numb">{{amount}}</span>
      </span>
    </div>
    <div class="data-progress">
      {{name}}占比：
      <el-progress :percentage="percentage"></el-progress>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: String,
    amount: Number,
    percentage: Number
  }
}
</script>

<style lang="less" scoped>
.def-card {
  position: relative;
  width: 20%;
  min-width: 200px;
  width: 20%;
  min-height: 120px;
  font-size: 14px;
  color: #c5b48d;
  border: none;
  .card-header {
      border: none;
    .icon-mark {
       font-size: 40px;
       margin-right: 15px;
    }
    .data-wrap {
      display: inline-block;
      width: 100px;
      .data-name {
        font-size: 14px;
        margin-bottom: 5px;
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
