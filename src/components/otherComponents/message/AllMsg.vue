<template>
<div class="all-msg">
  <el-table
  :data="mesdatas"
  size="small"
  max-height="460px"
  >
    <el-table-column
    type="selection"
    min-width="50px"
    align="center"
    ></el-table-column>
    <el-table-column
    min-width="20px"
    ></el-table-column>
    <el-table-column
    label="内容"
    prop="text"
    min-width="500px"
    class-name="msg-tabel-text"
    ></el-table-column>
    <el-table-column
    label="时间"
    prop="time"
    min-width="100px"
    align="center"
    ></el-table-column>
    <el-table-column
    label="状态"
    prop="state"
    min-width="50px"
    align="center"
    ></el-table-column>
  </el-table>
  <el-row
  type="flex"
  justify="space-between"
  align="bottom"
  class="msg-tool-row"
  >
    <el-col :span="7">
      <el-button size="small">全部已读</el-button>
      <el-button size="small">已读</el-button>
      <el-button size="small">全部删除</el-button>
      <el-button size="small">删除</el-button>
    </el-col>
    <el-col :span="3" style="text-align: right;">
      <el-button size="small">回复</el-button>
      <el-button size="small">写信</el-button>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'AllMsg',
  data () {
    return {
      mesdatas: [
        {
          text: '特别新闻，通知所有员工放假356天！',
          time: '2020/6/30',
          state: '已读'
        },
        {
          text: '特别新闻，通知所有员工放假356天！',
          time: '2020/6/30',
          state: '已读'
        },
        {
          text: '特别新闻，通知所有员工放假356天！',
          time: '2020/6/30',
          state: '已读'
        },
        {
          text: '特别新闻，通知所有员工放假356天！',
          time: '2020/6/30',
          state: '已读'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.all-msg {
  padding-bottom: 30px;
  .msg-tabel-text {
    padding: 0 30px;
  }
  .msg-tool-row {
    margin-top: 10px;
  }
}
</style>
