<template>
<div class="layout-container">
    <!-- <div class="navbar" v-if="$route.meta.requireAuth"> -->
      <div class="navbar">
      <el-menu
        :default-active="defaultActive"
        class="my-el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#37C6C0"
        text-color="#FFF"
        active-text-color="#FFF">
        <el-row class="navbar-container">
          <el-col :span = "6">
            <div class="web-name-container">
              <button class="web-name" v-on:click="clickName">智慧门禁</button>
            </div>
          </el-col>
          <el-col :span = "12">
            <div class="user-menu-item" style="overflow: hidden;">
                <el-menu-item index="/Partition" >分区</el-menu-item>
                <el-menu-item index="/EntranceGuard" >门禁</el-menu-item>
                <el-menu-item index="/FacialRecDevice" >人脸识别设备</el-menu-item>
            </div>
          </el-col>
          <el-col :span = "6">
            <div class="user-popover">
              <div class="login" style="font-weight:bold">管理员</div>
              <!-- <UserPopover ></UserPopover> -->
            </div>
          </el-col>
        </el-row>
      </el-menu>
      </div>
      <router-view />
</div>
</template>


<script>
import UserPopover from '../custom_components/UserPopover'

export default {
  name: 'Layout',
  components:{
    UserPopover 
  },
  data() {
      return {
        isLoginPage: false,
        defaultIndex: '1',
        activeIndex: '1',
        defaultActive: ''
      };
    },
    methods: {
      handleSelect: function(key, keyPath) {
        switch(key){
          case '/Partition':
            this.$router.push('/Partition').catch(err => {})
            break
          case '/EntranceGuard':
            this.$router.push('/EntranceGuard').catch(err => {})
            break
          case '/FacialRecDevice':
            this.$router.push('/FacialRecDevice').catch(err => {})
            break
          default:
            break
        }
      },
      clickName: function(){
        console.log("Clicked!")
        this.$router.push('/Partition').catch(err => {})
        this.defaultActive = '/Partition'
      },
    },
    mounted(){
      let _this = this
      let href = window.location.href
      href = href.split('/#')[1]
      _this.defaultActive = href
    },
    watch: {
        '$route': (to) => {
            var self = this;
            console.log("Got it!")
            setTimeout(() => {
                self.defaultActive = to.fullPath;
            }, 200);
        },
    },
}
</script>
<style scoped>
 /* .el-col-12[data-v-005bfc5a]{
   padding:0 8% 0 1% !important;
 } */
 .el-col-6[data-v-005bfc5a]{
   height: 80px;
 }
 .user-menu-item{
   display: flex;
   justify-content: center;
   height: 80px;
   white-space:nowrap;
 }

 .web-name{
  float:left;
  background: #37C6C0;
  border:0em;
  height: 80px;
  font-size: 35px;
  font-weight: bold;
  color:white;
  margin-left:100px;
}
.user-popover{
  height: 80px;
}
</style>