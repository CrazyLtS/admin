<template>
  <div class="find-box">
    <el-row style="padding: 30px 0px">
      <el-select
        v-model="seletorValues1.value"
        :clearable="true"
        size="small"
        :placeholder="seletorValues1.placeholder"
        >
          <el-option
          v-for="item of seletorValues1.valueItems"
          :key="item"
          :value="item"
          >
          </el-option>
      </el-select>
      - -
      <el-date-picker
        v-model="datevalue"
        type="daterange"
        placeholder="选择日期"
        :editable="false"
        size="small"
        :unlink-panels="true"
        class="date-box"
        >
      </el-date-picker>
      其他操作
      <el-select
        class="other-action"
        size="small"
        placeholder="其他操作"
        v-model="othervalue"
        >
      </el-select>
    </el-row>
    <el-row>
      <el-col :span="5">
        <el-select
        size="small"
        v-model="seletorValues2.value"
        :clearable="true"
        placeholder="请输入类型："
        >
        <el-option
        v-for="value of seletorValues2.valueItems"
        :key="value"
        :value="value"
        ></el-option>
        </el-select>
      </el-col>
      <el-col :span="10">
        <el-input
        class="search-input"
        v-model="inputvalue"
        size="small"
        maxlength="30"
        clearable
        ></el-input>
        <el-button
        size="small"
        type="primary"
        style="margin-left: 15px;"
        >查找</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'FindBox',
  data () {
    return {
      seletorValues1: {
        id: 1,
        placeholder: '日期',
        value: '类型1',
        valueItems: ['类型1', '类型2', '类型3', '类型4', '类型5', '类型6']
      },
      seletorValues2: {
        id: 1,
        placeholder: '日期',
        value: '类型1',
        valueItems: ['类型1', '类型2', '类型3', '类型4', '类型5', '类型6']
      },
      datevalue: '',
      othervalue: '',
      inputvalue: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/css/common';
.find-box {
  padding-bottom: 30px;
  color: @title-color;
  font-size: @sm-font-size;
  background: #FFFFFF;
//   padding: 25px 15px;
  .date-box {
    margin-right: 30px;
  }
  .other-action {
    margin-left: 20px;
  }
  .search-input {
    width: 80%;
  }
}
</style>
