<template>
  <div class="data-table">
    <el-row>
      <el-col
        :span="7"
        >
        <el-button
        icon="el-icon-plus"
        size="small"
        class="add-btn"
        >添加</el-button>
        <el-button
        size="small"
        class="def-btn"
        >批量提交</el-button>
        <el-button
        size="small"
        class="def-btn"
        >批量删除</el-button>
      </el-col>
      <el-col
      :span="8"
      :offset="9"
      style="line-height: 35px;"
      >
      排序
      <el-select
        v-model="sorttype.value"
        placeholder="请选择"
        size="small"
        style="width: 150px; margin-left: 10px;margin-right: 20px;">
          <el-option
          v-for="type of sorttype.type"
          :key="type"
          :value="type"
          ></el-option>
      </el-select>
      显示
      <el-select
      v-model="diplaynub.default"
      size="small"
      style="width: 65px;"
      >
      <el-option
      v-for="number of diplaynub.number"
      :key="number"
      :value="number"
      ></el-option>
      </el-select>
      条
      </el-col>
    </el-row>
    <el-row>
      <el-table
      size="small"
      stripe
      border
      height="400px"
      :data="tabledatas"
      >
        <el-table-column
        type="selection"
        align="center"
        ></el-table-column>
        <el-table-column
        type="index"
        label="序号"
        width="60%"
        align="center"
        ></el-table-column>
        <el-table-column
        prop="type"
        label="分类"
        align="center"
        ></el-table-column>
        <el-table-column
        prop="pdname"
        label="名称"
        align="center"
        ></el-table-column>
        <el-table-column
        prop="id"
        label="ID"
        align="center"
        ></el-table-column>
        <el-table-column
        prop="reqtime"
        label="申请时间"
        align="center"
        ></el-table-column>
        <el-table-column
        prop="progress"
        label="审批进度"
        align="center"
        ></el-table-column>
        <el-table-column
        label="状态"
        align="center"
        >
        <template>
          <el-button type="warning" disabled size="mini">审核中</el-button>
        </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="165px"
          v-slot="scoped"
          >
          <template>
            <el-tooltip content="删除" placement="top-end" :enterable="false">
              <el-button
              type="danger"
              icon="el-icon-delete"
              circle size="mini"
              @click="handelDelete(scoped.$index)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-pagination
      background
      :total="100"
      hide-on-single-page
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  data () {
    return {
      sorttype: {
        value: '正常排序',
        type: ['正常排序', '反向排序', '时间排序', '拼音排序']
      },
      diplaynub: {
        default: 10,
        number: [10, 12, 14, 16, 18, 20]
      },
      tabledatas: [
        {
          type: '水果',
          pdname: '苹果',
          id: '678',
          reqtime: '2020/12/03',
          progress: '待审核'
        },
        {
          type: '水果',
          pdname: '苹果',
          id: '678',
          reqtime: '2020/12/03',
          progress: '待审核'
        },
        {
          type: '水果',
          pdname: '雪梨',
          id: '678',
          reqtime: '2020/12/03',
          progress: '待审核'
        },
        {
          type: '水果',
          pdname: '苹果',
          id: '678',
          reqtime: '2020/12/03',
          progress: '待审核'
        }
      ],
      radio: ''
    }
  },
  methods: {
    handelDelete () {
      this.$msgbox({
        title: '警告！',
        message: '确定要删除该消息吗？',
        showCancelButton: true,
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then((index) => {
        this.tabledatas.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功！'
        })
      }).catch(action => {
        if (action === 'cancel') {
          this.$message({
            type: 'info',
            message: '删除失败！'
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/css/common';
.data-table {
  width: 100%;
  padding-bottom: 50px;
  background-color: #FFFFFF;
  color: #CCCCCC;
  .add-btn {
    background-color: #0178d5;
    border-color: #4ab0ff;
    color: #FFFFFF;
    &:hover {
      background-color: #4ab0ff;
    }
  }
  .def-btn {
    color: #4ab0ff;
    border-color: #4ab0ff;
  }
  .el-row {
    padding-bottom: 15px;
  }
}
</style>
