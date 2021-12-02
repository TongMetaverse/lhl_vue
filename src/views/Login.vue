<template>
  <div class="main">
    <div class="content">
      <span>接口管理平台</span>
      <el-form class="form" ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <router-link to="/home"><el-button style="width:100%;border-radius: 28px;" type="info" >登录</el-button></router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        pwd: "",
      },
    };
  },
};
</script>
<style  scoped>
.main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url("../assets/imgs/bg@2x.png") no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
}
span {
  width: 100%;
  height: 73px;
  display: block;
  overflow-wrap: break-word;
  color: rgba(121, 230, 255, 1);
  font-size: 32px;
  white-space: nowrap;
  line-height: 73px;
  text-align: center;
  align-self: center;
}
.form {
  margin-top: 10vh;
  margin-left: -50px;
}

.form >>> .el-input__inner {
  border-radius: 28px;
  background-color: rgba(121, 230, 255, 0.3);
  width: 300px;
  color: rgba(255, 255, 255, 0.8);
}

.form >>> .el-form-item__label {
  color: rgba(255, 255, 255, 0.8);
}
</style>