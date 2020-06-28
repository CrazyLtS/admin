<template>
  <div class="news-card">
    <card-header title="信息"></card-header>
    <div class="news-content">
      <header class="content-header">
        <span class="news-tab">
          <p>News</p>
          <el-badge
          class="tab-item"
          :value="200"
          :max="99"
          >
            <i class="love-icon el-icon-star-on"></i>
          </el-badge>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span class="news-tab">
          <p>News</p>
          <el-badge class="tab-item" :value="200" :max="99" type="success">
            <i class="news-icon el-icon-s-comment"></i>
          </el-badge>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span class="news-tab">
          <p>News</p>
          <el-badge class="tab-item" :value="200" :max="99" type="primary">
            <i class="friend-icon el-icon-s-custom"></i>
          </el-badge>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span class="news-tab">
          <p>News</p>
          <el-badge class="tab-item" :value="200" :max="99" type="warning">
            <i class="notice-icon el-icon-message-solid"></i>
          </el-badge>
        </span>
      </header>
      <main class="content-body">
        <div class="main-metrics">
          指标1：
          <el-progress :percentage="56" color="#7acb43"></el-progress>
          指标2：
          <el-progress :percentage="80" color="#7acb43"></el-progress>
        </div>
        <div class="main-side">
          <el-progress
          type="circle"
          :percentage="85"
          color="#7acb43"
          :width="50"
          ></el-progress>
          健康指数
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import CardHeader from 'otherComponents/userComponents/CardHeader.vue'
export default {
  name: 'NewsCard',
  components: {
    CardHeader
  }
}
</script>

<style lang="less" scoped>
@import '~assets/css/common';
.news-content {
  .content-header {
    display: flex;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #cccccc;
    .el-divider--vertical {
      height: auto;
    }
    .news-tab {
      flex: 1;
      height: 100%;
      font-size: 14px;
      &>p {
        text-align: center;
        color: @content-card-color;
      }
      .tab-item {
        margin-top: 20px;
        margin-left: 20px;
        font-size: 25px;
        .love-icon {
          color: #f1526e;
        }
        .news-icon {
          color: #7cd247;
        }
        .friend-icon {
          color: #7cdad6;
        }
        .notice-icon {
          color: #f87762;
        }
      }
    }
  }
  .content-body {
      width: 100%;
    .main-metrics {
      float: left;
      box-sizing: border-box;
      font-size: 12px;
      width: 65%;
      margin-top: 10px;
      padding-left: 15px;
      color: @title-color;
    }
    .main-side {
      float: left;
      width: 23%;
      margin-top: 20px;
      margin-left: 30px;
      font-size: 12px;
      color: @title-color;
    }
  }
}
</style>
