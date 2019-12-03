<template>
  <div class="login-page-container">
    <div class="navbar" style="width:100%">
      <el-menu
        class="my-el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#37C6C0"
        text-color="#FFF"
        active-text-color="#FFF"
      >
        <el-row class="navbar-container">
          <el-col :span="6">
            <div class="web-name-container">
              <button class="web-name" v-on:click="clickName">智慧门禁</button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="user-menu-item" style="overflow: hidden;"></div>
          </el-col>
          <el-col :span="6">
            <div>
              <div class="login">人员姓名</div>
            </div>
          </el-col>
        </el-row>
      </el-menu>
    </div>
    <div class="main-content-container">
      <div class="login-container">
        <el-form
          :model="loginForm"
          :rules="rules"
          status-icon
          ref="loginForm"
          label-position="top"
          v-show="!isWechat"
        >
          <el-form-item label="" prop="userLogin">
            <el-input
              type="text"
              class="username_input"
              placeholder="用户名称/手机号码"
              v-model="loginForm.username"
            >
              <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="" prop="loginPwd">
            <el-input
              type="password"
              class="password_input"
              placeholder="输入登录密码"
              v-model="loginForm.loginPwd"
              @keyup.enter.native="checkLogin('loginForm')"
            >
              <i slot="prefix" class="el-input__icon el-icon-s-goods"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <div>
              <el-button
                class="login_btn"
                @click="checkLogin('loginForm')"
                type="primary"
                size="medium"
              >
                登录
              </el-button>
            </div>
          </el-form-item>
          <div class="forget-region">
            <div class="register_region" @click="goToRegister">
              新用户注册
            </div>
            <div class="forget_region">
              <span class="forget_span" @click="goToForgetPwd"
                >忘记密码?</span>
            </div>
          </div>
        </el-form>
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
.main-content-container {
}
.el-col-6[data-v-663841b2] {
  padding-left: 5%;
  height: 80px;
}
.user-menu-item {
  display: flex;
  justify-content: center;
  height: 80px;
  white-space: nowrap;
}
.web-name {
  float: left;
  background: #37c6c0;
  border: 0em;
  height: 80px;
  font-size: 35px;
  font-weight: bold;
  color: white;
  margin-left: 1%;
}
.login-input {
  margin: 10px 10px 5px 0px;
  width: 20%;
  height: 50px;
}
</style>
