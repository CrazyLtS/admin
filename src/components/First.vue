<template>
  <el-row class="card-wrap">
    <Card name="数据1" :amount="3435" :percentage="80" style="background: #a52e01;"></Card>
    <Card name="数据2" :amount="455" :percentage="60" style="background: #011da5;"></Card>
    <Card name="数据3" :amount="6654" :percentage="70" style="background: #84a501;"></Card>
  </el-row>
</template>

<script>
import Card from 'components/Card'
export default {
  name: 'First',
  components: {
    Card
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .card-wrap {
    display: flex;
    justify-content: space-around;
  }
</style>
