<template>
  <div class="news">
  <el-table
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
  class="msg-tool-row"
  >
    <el-col :span="7">
      <el-button size="small">全部已读</el-button>
      <el-button size="small">已读</el-button>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'News'
}
</script>

<style lang="less" scoped>
.news {
  padding-bottom: 30px;
  .msg-tabel-text {
    padding: 0 30px;
  }
  .msg-tool-row {
    margin-top: 10px;
  }
}
</style>
