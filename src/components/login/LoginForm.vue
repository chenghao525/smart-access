<template>
  <div class="login-page-container note" :style="note">
    <!-- <div class="navbar" style="width:100%">
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
    </div> -->
    <div class="main-content-container">
      <div class="login-container">
        <img class="login_logo" src="../../assets/company_logo.png" alt="scg logo">
        <div class="login-header">用户登录</div>
        <el-form
          :model="loginForm"
          :rules="rules"
          status-icon
          ref="loginForm"
          label-position="top"
        >
          <el-form-item label="" prop="username">
            <el-input
              prefix-icon="iconfont icon-user"
              type="text"
              class="user-input"
              placeholder="用户名称/手机号码"
              v-model="loginForm.username"
            >
            <!-- <i class="icon-user"></i> -->
              <!-- <i slot="prefix" class="el-input__icon el-icon-user-solid"></i> -->
            </el-input>
          </el-form-item>
          <el-form-item label="" prop="loginPwd">
            <el-input
              prefix-icon="iconfont icon-mima"
              type="password"
              class="user-input"
              placeholder="输入登录密码"
              v-model="loginForm.loginPwd"
              @keyup.enter.native="checkLogin('loginForm')"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <div>
              <el-button
                class="login_btn"
                @click="handleLogin('loginForm')"
                type="primary"
                size="medium"
              >
                登录
              </el-button>
            </div>
          </el-form-item>
          <div class="link-region">
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
import Cookies from 'js-cookie'
import {USER_LOGIN} from '../../api'


export default {
  name: "LoginForm",
  data() {
    return {
      note: {
          backgroundImage: "url(" + require("../../assets/big_background.png") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        },
      loginForm: {
        username: "",
        password: ""
      },
      rules:{},
      userToken: "",
      isRegister: false
    };
  },
  methods: {
    checkLogin(){
      console.log("Check")
    },
    handleLogin(loginForm) {
      let userInfo = {
        'tokenId': "1111",
        'userInfo': {
          'name': this.loginForm.username,
          'password': this.loginForm.password
        }
      }
      this.$store.commit('SET_USERINFO', userInfo.userInfo)
      this.$router.push("/");
      this.$message("登陆成功");
      // let params = {};
      // if (this.loginForm.username === "" || this.loginForm.loginPwd === "") {
      //   alert("账号或密码不能为空");
      // } else {
      //   this.$post(USER_LOGIN, params)
      //     .then(res => {
      //       if (res.code === "1") {
      //         // 将用户token保存到vuex中
      //         let userInfo = res.data;
      //         this.$store.commit('SET_USERINFO', userInfo)
      //         this.$router.push("/");
      //         this.$message("登陆成功");
      //       } else if(res.code === '-1'){
      //       this.$message(res.msg)
      //     }
      //     })
      //     .catch(error => {
      //       alert("账号或密码错误");
      //       console.log(error);
      //     });
      // }
    },
    goToRegister(){

    },
    goToForgetPwd(){

    }
  }
};
</script>

<style scoped>
/* .main-content-container {
} */
.user-input>>>.el-input__inner{
  height: 50px !important;
  font-size: initial;
}
.user-input>>>.el-input__prefix{
  left: 10px !important;
}
.login-container{
  position: absolute;
  margin-left: 60%;
  margin-top: 14%;
}
.login-page-container{
  height: 100vh;
}
.user-input{
  width:300px;
  height: 50px;
}
.login_btn{
  background-color: #409EFF !important;
  border-color: #409EFF !important;
  width:300px;
  height: 50px;
  font-size: 20px;
  margin-top: 20px;
}
.login-header{
  font-size: 20PX;
  font-family: Georgia;
  text-align: left;
  width: 300px;
  color: white;
  margin: 15px auto;
}
.register_region{
  float: left;
  color:white;
  cursor:pointer;
}
.forget_span{
  float: right;
  color:white;
  cursor:pointer;
}
.el-col-6[data-v-663841b2] {
  padding-left: 5%;
  height: 80px;
}
.login-input {
  margin: 10px 10px 5px 0px;
  width: 20%;
  height: 50px;
}
</style>
