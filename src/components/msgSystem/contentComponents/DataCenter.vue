<template>
<Scroll>
  <div class="data-center">
    <div class="data-inner">
      <find-box></find-box>
      <data-table></data-table>
    </div>
  </div>
</Scroll>
</template>

<script>
import FindBox from 'otherComponents/dataCenter/FindBox.vue'
import DataTable from 'otherComponents/dataCenter/DataTable.vue'
import Scroll from 'otherComponents/Scroll.vue'
export default {
  name: 'DataCenter',
  components: {
    FindBox,
    DataTable,
    Scroll
  }
}
</script>

<style lang="less" scoped>
.data-center {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  min-height: 528px;
  min-width: 1165px;
  padding: 20px 15px;
  overflow: hidden;
  .data-inner {
    padding: 0 20px;
    border-radius: 5px;
    background-color: #FFFFFF;
  }
}
</style>
