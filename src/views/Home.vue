<template>
  <el-container class="main">
    <el-header class="head-nav">
      <el-row type="flex" justify="space-between">
        <el-col style="width: 200px; padding-top: 15px; padding-left: 15px"
          ><span class="title">接口管理中心</span></el-col
        >
        <el-col class="flex1">
          <i class="el-icon-s-custom" style="font-size: 32px" />
          <span style="margin-left: 15px">admin</span>
          <i
            class="el-icon-s-unfold"
            style="font-size: 32px; margin-left: 15px"
          />
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="left-nav" width="200px">
        <el-menu class="left-menu" text-color="#D9E3ED">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="content"
        ><el-breadcrumb class="breadcrumb" separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        </el-breadcrumb></el-main
      >
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
};
</script>
<style scoped>
.main {
  width: 100%;
  height: 100vh;
}

.main >>> .el-header {
  padding: 0;
}

.head-nav {
  height: 64px;
  background: linear-gradient(to right, #1f3864, #0c4d8c 20%, #1f3864);
}
.left-nav {
  overflow: hidden;
}
.left-menu {
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, #1f3864, #294f7d);
}

.left-menu >>> .el-submenu .el-menu {
  background: none;
}

.left-menu >>> .el-submenu__title:hover {
  background: #4a81ad;
}

.left-menu >>> .el-menu-item:focus,
.el-menu-item:hover {
  background-color: #4a81ad;
}

.head-nav .title {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.8);
}

.content {
  background: linear-gradient(0deg, #102c5a, #2d6a9c);
  padding: 0;
}

.flex1 {
  width: 200px;
  color: #79e6ff;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  padding-top: 15px;
  padding-right: 15px;
}

.breadcrumb {
  height: 72px;
  background: linear-gradient(90deg, #306fa0 0%, #0b3b70 100%);
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 28px;
  display: flex;
  align-items: center;
}

.breadcrumb >>> .el-breadcrumb__inner{
  color: #fff !important;
  padding: 0 20px;
}
</style>