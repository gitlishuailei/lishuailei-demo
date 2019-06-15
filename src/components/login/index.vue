<template>
  <div class="login">
    <div class="content">
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login_btn" @click="handleLogin()">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import cookie from "js-cookie";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },

  methods: {
    ...Vuex.mapActions({
      handleUserLogin: "handleUserLogin"
    }),
    handleLogin() {
      let userInfo = {
        username: this.username,
        password: this.password
      };
      this.handleUserLogin(userInfo).then(()=>{
        this.$router.push({path:"/index"});
      });
      
    }
  }
};
</script>


<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: blue;
  opacity: 0.8;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login > .content {
  width: 420px;
  height: 300px;
  background: #fff;
  border-radius: 20px;
  padding: 30px 28px;
}
.login_btn {
  width: 100%;
}
</style>