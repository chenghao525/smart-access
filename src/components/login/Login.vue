<template>
  <div>
    <input type="text" v-model="loginForm.username" placeholder="用户名" />
    <input type="text" v-model="loginForm.password" placeholder="密码" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      userToken: ""
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    login() {
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
