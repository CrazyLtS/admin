<template>
<div class="content">
  <div class="main-content">
    <el-scrollbar wrapStyle="height: calc(100% + 17px);">
      <slot></slot>
    </el-scrollbar>
  </div>
</div>
</template>

<script>
export default {
  name: 'Scroll'
}
</script>

<style lang="less" scoped>
.content {
  height: 100%;
  overflow: hidden;
  .main-content {
    height: 100%;
    .el-scrollbar {
      height: 100%;
    }
  }
}
</style>
