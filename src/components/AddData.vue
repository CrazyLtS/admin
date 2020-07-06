<template>
<div>
  <el-form>
    <el-form-item label="姓名">
      <input class="data-input" type="text" :value="newName" @change="handleNameChange($event.target.value)">
    </el-form-item>
    <el-form-item label="事务">
      <input class="data-input" type="text" :value="newMatter" @change="handleMatterChange($event.target.value)">
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'AddData',
  computed: {
    ...mapGetters([
      'newName',
      'newMatter'
    ])
  },
  methods: {
    ...mapMutations([
      'handleNameChange',
      'handleMatterChange'
    ])
  }
}
</script>

<style lang="less" scoped>
  .data-input {
    border-radius: 5px;
    border: 1px solid;
    outline: none;
    text-indent: .5em;
    width: 60%;
    height: 23px;
    color: #CCCCCC;
    transition: color .5s;
    &:focus{
      color: #dc5f07;
    }
  }
</style>
