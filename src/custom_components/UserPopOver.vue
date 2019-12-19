<template>
<div class="userPopover-container" style="height:80px">
  <div class="userPopover-content">
    <img class="avatar-img" src="../assets/account_icon.png"></img>
    <el-dropdown trigger="click">
      <span class="dropdown-text">
        {{memberName}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu class="dropdown-menu" slot="dropdown">
        <el-dropdown-item icon="el-icon-plus"><i class="iconfont icon-mima2"></i>&nbsp&nbsp&nbsp&nbsp修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus"><i class="iconfont icon-jianchagengxin"></i>&nbsp&nbsp&nbsp&nbsp更新检测</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline"><i class="iconfont icon-dengchuzhanghao"></i>&nbsp&nbsp&nbsp&nbsp退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
</div>
  <!-- <el-popover
    :visible-arrow="false"
    v-model="visible"
    width="200"
    popper-class="user_popover">
    <div class="user_dropdown_content">
      <div class="user_dropdown_line">
        <div class="user_dropdown_item" @click="modifyPassword"><i class="icon_password"></i> 修改密码</div>
        <div class="user_dropdown_item" @click="goToMyAccount"><i class="icon-account"></i> 我的账号</div>
        <div class="user_dropdown_item" @click="logout"><i class="icon_switch"></i> 退出登录</div>
      </div>
    </div>
    <span class="user_popover_container" slot="reference">
      <el-avatar class="avatar_img"></el-avatar>{{memberName}}
      <i class="el-icon-caret-bottom"></i>
    </span>
  </el-popover> -->
</template>


<script>
import Avatar from 'vue-avatar'

  export default {
    name: 'UserPopover',
    comments:{
      Avatar
    },
    data() {
      return {
        memberName:'',
        visible: false
      }
    },
    methods: {

      // 退出登录
      logout() {
        this.$router.push('/logout')
        this.visible = false
      },

      // 进入我的账号
      goToMyAccount() {
        this.$router.push('/my/account')
        this.visible = false
      },

      // 修改密码
      modifyPassword(){
        this.visible = false
        console.log("修改密码！")
      },
      initDate() {
        this.memberName=JSON.parse(localStorage.getItem('userInfo')).name
      }
    },
    mounted() {
      this.initDate()
    }
  }
</script>

<style scoped>
  .userPopover-content{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 20px;
  }
  .dropdown-text{
    display: table-cell;
    vertical-align: middle;
    cursor: pointer;
    font-size: 18px;
    padding-bottom:4px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .avatar-img{
    height: 35px;
  }
  .el-dropdown-menu__item{
    width: 100px !important;
    text-align: center;
  }
</style>