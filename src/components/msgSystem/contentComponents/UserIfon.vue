<template>
<Scroll>
  <div class="user-ifon">
    <el-row>
      <msg-card class="def-card"></msg-card>
      <news-card class="def-card news-card"></news-card>
    </el-row>
    <el-row>
      <div class="results">
        <ve-histogram :data="lineData" height="298px"></ve-histogram>
      </div>
      <Notice></Notice>
    </el-row>
  </div>
</Scroll>
</template>

<script>
import MsgCard from 'otherComponents/userComponents/MsgCard.vue'
import NewsCard from 'otherComponents/userComponents/NewsCard.vue'
import Notice from 'otherComponents/userComponents/Notice.vue'
import Scroll from 'otherComponents/Scroll.vue'
export default {
  name: 'UserIfon',
  components: {
    MsgCard,
    NewsCard,
    Notice,
    Scroll
  },
  data () {
    return {
      lineData: {
        columns: ['日期', '业绩'],
        rows: [
          { 日期: '1月', 业绩: 234 },
          { 日期: '2月', 业绩: 1254 },
          { 日期: '3月', 业绩: 1089 },
          { 日期: '4月', 业绩: 546 },
          { 日期: '5月', 业绩: 1603 },
          { 日期: '6月', 业绩: 2674 }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/css/common';
.user-ifon {
  margin-top: 10px;
  .el-row {
    padding: 0 20px;
    .row-box();
  }
  .def-card {
    float: left;
    width: 45%;
    min-width: 450px;
    background: #FFFFFF;
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, .1);
    border-radius: 5px;
    overflow: hidden;
  }
  .news-card {
    box-shadow: none;
  }
  .results {
    width: 60%;
    background: #FFFFFF;
  }
}
</style>
