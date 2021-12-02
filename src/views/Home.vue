<template>
  <div class="main">
    <el-menu
      :default-active="activeIndex"
      class="nav"
      mode="horizontal"
      @select="handleSelect"
      background-color="#112D60"
    >
      <el-row type="flex" justify="space-between">
        <el-col style="width: 200px"
          ><el-menu-item index="1"
            ><span class="title">接口管理中心</span></el-menu-item
          ></el-col
        >
        <el-col style="width: 200px"
          >
          <span><i class="el-icon-s-custom" s/>admin</span>
          </el-col
        >
      </el-row>
    </el-menu>
    <router-view />
  </div>
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
.nav .title {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.8);
}
</style>