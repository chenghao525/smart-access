<template>
  <el-popover
    :visible-arrow="false"
    v-model="visible"
    popper-class="user_popover">
    <div class="user_dropdown_content">
      <div class="user_dropdown_line">
        <div class="user_dropdown_item" @click="modifyPassword"><i class="icon_password"></i> 修改密码</div>
        <!-- <div class="user_dropdown_item" @click="goToMyAccount"><i class="icon-account"></i> 我的账号</div> -->
        <div class="user_dropdown_item" @click="logout"><i class="icon_switch"></i> 退出登录</div>
      </div>
    </div>
    <span class="user_popover_container" slot="reference">
      <el-avatar class="avatar_img"></el-avatar>{{memberName}}
<!--        <el-avatar style="margin: 0 15px 0 35px">{{realName.split('')[0]}}</el-avatar>-->
      <i class="el-icon-caret-bottom"></i>
    </span>
  </el-popover>
</template>

<script>
  export default {
    name: "UserPopOver",
    data() {
      return {
        memberName:'',
        visible: true
      }
    },
    methods: {

      // 退出登录
      logout() {
        this.$router.push('/logout')
        this.visible = false
      },

      // // 进入我的账号
      // goToMyAccount() {
      //   this.$router.push('/my/account')
      //   this.visible = false
      // },

      // 修改密码
      modifyPassword(){
        this.visible = false
        console.log("修改密码！")
      },
      initDate() {
        // this.memberName=JSON.parse(localStorage.getItem('userInfo')).memberName
        this.memberName = "SunChengh"
      }
    },
    mounted() {
      this.initDate()
    }
  }
</script>

<style lang="stylus" scoped>
  .user_popover_container
    cursor pointer
    display flex
    align-items center
    font-size 16px
    // font-family $txt-family
    font-weight 400
    color #ffffff
    padding-right 10px
    margin-left 15px
    border-left solid 1px #c4c8cf

    .avatar_img
      width 28px
      height 28px
      background-image url("../assets/icon/user.png")
      margin 0 15px 0 15px
      background-size cover
      background-position center // 完全居中

  .user_dropdown_content
    font-size $small-txt-size
    // padding-left 10px
    // padding-right 10px
    .user_dropdown_view_line
      color #909399
    .user_dropdown_line
      text-align left
      .user_dropdown_item
        cursor pointer
        padding 5px
        font-size 16px
        line-height 50px
        text-align center
        border-bottom  1px solid #efefef

        &:last-child
          color #fb2422 !important
        &:hover
          background-color #ececec
        i
          font-weight bold
          margin-right 10px
          display inline-block
        .icon-account
          width 18px
          height 21px
          // background url('../assets/icon/icon_account.png') no-repeat center bottom

        .icon_password
          width 18px
          height 21px
          // background url('../assets/icon/icon_password.png') no-repeat center bottom

        .icon_switch
          width 18px
          height 21px
          // background url('../assets/icon/icon_switch.png') no-repeat center bottom
</style>
<style lang="stylus">
  .user_popover
    min-width 168px !important
    padding 0 !important
    border 1px solid #d5d5d5 !important
    background-color #fafafa !important
</style>