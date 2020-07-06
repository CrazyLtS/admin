<template>
  <div class="second">
    <el-row>
      <el-button size="small" type="primary" @click="handleAdd">添加</el-button>
      <el-button size="small" type="warning" @click="handleBigDel">批量删除</el-button>
      <!-- <el-button size="small" type="primary">上传数据</el-button> -->
    </el-row>
    <el-row style="height: 82%;margin-bottom: 10px;">
      <el-table
      ref="table"
      :data="tableData"
      highlight-current-row
      size="small "
      height="100%"
      @selection-change="handleSelecte"
      >
        <el-table-column
        type="selection"
        align="center"
        ></el-table-column>
        <el-table-column
        property="date"
        label="日期"
        width="150px"
        ></el-table-column>
        <el-table-column
        property="name"
        label="姓名"
        width="150px"
        ></el-table-column>
        <el-table-column
        property="matter"
        label="事务"
        ></el-table-column>
        <el-table-column
        label="操作"
        width="200px"
        >
        <template v-slot="scope">
          <el-button size="mini" type="primary" @click="handleEditBtn(scope)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelBtn(scope)">删除</el-button>
        </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-pagination
      :page-size="pageSize"
      :pager-count="7"
      layout="prev, pager, next"
      :total="listData.length - 1"
      @current-change="currentChange"
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import AddData from 'components/AddData'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Second',
  data () {
    return {
      current: 1,
      pageSize: 1,
      selecteList: []
    }
  },
  computed: {
    ...mapGetters([
      'newName',
      'newMatter',
      'listData'
    ]),
    tableData () {
      const datas = this.listData.slice((this.current - 1) * this.pageSize, this.pageSize * this.current)
      return datas
    }
  },
  methods: {
    ...mapMutations([
      'handleNameChange',
      'handleMatterChange'
    ]),
    handleEditBtn ({ row, $index }) {
      this.$prompt('请输入新的事务', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPlaceholder: row.matter,
        inputPattern: /^\S+$/,
        inputErrorMessage: '格式错误'
      }).then((res) => {
        row.matter = res.value
        this.$message({
          message: '修改成功！',
          type: 'success',
          duration: 1000
        })
      }).catch(() => {})
    },
    handleDelBtn ({ row }) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        type: 'warning'
      }).then(() => {
        this.listData.splice(this.listData.indexOf(row), 1)
        this.$message({
          message: '删除成功！',
          type: 'success'
        })
      }).catch(() => {})
    },
    currentChange (index) {
      this.current = index
    },
    handleAdd () {
      const h = this.$createElement
      this.$msgbox({
        title: '新数据',
        message: h(AddData),
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            if (/\S/.test(this.$store.state.newDataName) && /\S/.test(this.$store.state.newDataMatter)) {
              instance.confirmButtonLoading = true
              instance.confirmButtonText = '执行中...'
              setTimeout(() => {
                // 模拟ajax
                done()
                instance.confirmButtonLoading = false
                this.$message({
                  message: '添加成功！',
                  type: 'success',
                  duration: 1000
                })
              }, 500)
            } else {
              this.$message({
                message: '填入信息错误！',
                type: 'error',
                duration: 1000
              })
            }
          } else {
            done()
          }
        }
      }).then((action) => {
        if (action === 'confirm') {
          const newData = {
            date: new Date().toLocaleDateString(),
            name: this.newName,
            matter: this.newMatter
          }
          this.listData.unshift(newData)
          this.handleNameChange('')
          this.handleMatterChange('')
        }
      }).catch(() => {})
    },
    handleSelecte (selection) {
      this.selecteList = selection
    },
    handleBigDel () {
      this.$confirm('此操作将永久删除大量选项，是否继续？', '警告', {
        type: 'error'
      }).then((action) => {
        if (action === 'confirm') {
          this.selecteList.forEach((ele) => {
            this.listData.splice(this.listData.indexOf(ele), 1)
          })
        }
      }).catch(() => {})
    }
  },
  mounted () {
    AddData.store = this.$store
    setTimeout(() => {
      this.pageSize = Math.floor(this.$refs.table.$refs.bodyWrapper.clientHeight / 45)
    }, 100)
  }
}
</script>

<style lang="less" scoped>
  .second {
    height: 100%;
    /deep/ .el-pagination {
      text-align: center;
    }
  }
</style>
