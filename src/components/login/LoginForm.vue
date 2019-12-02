<template>
<div class="login-page-container">
  <div class="login-container">
    <div class="login-form" v-show="!isRegister">
      <input type="text" v-model="loginForm.username" placeholder="用户名" />
      <input type="text" v-model="loginForm.password" placeholder="密码" />
      <button @click="handleLogin">登录</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      userToken: "",
      isRegister: false
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    handleLogin() {
      let _this = this;
      let params = {};
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        alert("账号或密码不能为空");
      } else {
        this.$post(USER_LOGIN, params)
          .then(res => {
            if (res.code === "1") {
              _this.userToken = "Bearer " + res.data.token;
              // 将用户token保存到vuex中
              _this.changeLogin({ Authorization: _this.userToken });
              _this.$router.push("/");
              alert("登陆成功");
            }
          })
          .catch(error => {
            alert("账号或密码错误");
            console.log(error);
          });
      }
    }
  }
};
</script>

<style scoped>
  .login-page-container{
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 40% 60%;
  }
</style>