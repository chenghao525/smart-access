<template>
    <el-dropdown trigger="click">
      <span class="dropdown-text">
        <Avatar class="avatar_img" src="../assets/account_icon.png"></Avatar>{{memberName}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>