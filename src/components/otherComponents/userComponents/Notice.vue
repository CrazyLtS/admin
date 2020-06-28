<template>
  <div class="notice-card">
    <card-header title="公告" style="margin: 0px"></card-header>
    <div class="notice-body">
      <el-scrollbar wrapStyle="height: 286px;">
          <el-table
          ref="eltab"
          :data="tableData"
          style="width: 100%"
          :show-header="false"
          size="small"
          :stripe="true"
          min-height="268px"
          >
          <el-table-column prop="time" width="100px"></el-table-column>
          <el-table-column prop="content"></el-table-column>
          </el-table>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import CardHeader from 'otherComponents/userComponents/CardHeader.vue'
export default {
  name: 'Notice',
  components: {
    CardHeader
  },
  data () {
    return {
      tableData: [
        {
          time: '12-08',
          content: '通知内容'
        },
        {
          time: '12-08',
          content: '通知内容'
        },
        {
          time: '12-08',
          content: '通知内容'
        },
        {
          time: '12-08',
          content: '通知内容'
        },
        {
          time: '12-08',
          content: '通知内容'
        },
        {
          time: '12-08',
          content: '通知内容'
        },
        {
          time: '12-08',
          content: '通知内容'
        },
        {
          time: '12-08',
          content: '通知内容'
        },
        {
          time: '12-08',
          content: '通知内容'
        },
        {
          time: '12-08',
          content: '通知内容'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.notice-card {
  width: 30%;
  background: #FFFFFF;
  .notice-body {
    height: 268px;
    overflow: hidden;
  }
}
</style>
