<template>
<Scroll>
  <div class="user-ifon">
    <el-row>
      <Card :percentage="72" name="实时数据" amount="34536" color="linear-gradient(70deg, #086fda, #d260ef)"></Card>
      <Card :percentage="65" name="访客量" amount="87675" color="linear-gradient(70deg, #15ff2d, #f3fb74)"></Card>
      <Card :percentage="89" name="购买数量" amount="95675" color="linear-gradient(70deg, #ff1515, #fba674)"></Card>
    </el-row>
    <el-row>
      <el-card shadow="hover" class="def-chart">
        <ve-histogram :data="chartData"></ve-histogram>
      </el-card>
      <el-card shadow="hover" class="def-chart ring-card">
        <ve-ring :data="chartData"></ve-ring>
      </el-card>
    </el-row>
    <el-row>
      <el-card shadow="hover" class="line-card">
        <ve-line :data="chartData" height="300px"></ve-line>
      </el-card>
    </el-row>
  </div>
</Scroll>
</template>
<script>
import Card from 'otherComponents/Card.vue'
import Scroll from 'otherComponents/Scroll.vue'
export default {
  name: 'UserIfon',
  data: () => {
    return {
      chartData: {
        columns: ['日期', '销售额'],
        rows: [
          { 日期: '1月', 销售额: 123 },
          { 日期: '2月', 销售额: 1223 },
          { 日期: '3月', 销售额: 2123 },
          { 日期: '4月', 销售额: 4123 },
          { 日期: '5月', 销售额: 3123 },
          { 日期: '6月', 销售额: 7123 }
        ]
      }
    }
  },
  components: {
    Card,
    Scroll
  }
}
</script>

<style lang="less" scoped>
@import '~assets/css/common';
.user-ifon {
  padding-left: 15px;
  margin-top: @content-card-space - 10;
  .el-row {
    .row-box()
  }
  .def-chart {
    width: 50%;
    height: 400px;
    border: none;
  }
  .ring-card {
    width: 30%
  }
  .line-card {
    width: 85%;
  }
}
</style>
