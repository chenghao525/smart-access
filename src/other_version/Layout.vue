<template>
    <div class="navbar">
      <el-menu
        :default-active="activeIndex"
        class="my-el-menu"
        mode="horizontal"
        @select="handleSelect"
        router :unique-opened="true"
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
              <div>
                <el-menu-item index="/" class="{'active':activeIndex == 1">分区</el-menu-item>
                <el-menu-item index="/EntranceGuard" class="{'active':activeIndex == 2">门禁</el-menu-item>
                <el-menu-item index="/FacialRecDevice" class="{'active':activeIndex == 3">人脸识别设备</el-menu-item>
              </div>
            </div>
          </el-col>
          <el-col :span = "6">
            <div>
              <div class="login">人员姓名</div>
            </div>
          </el-col>
        </el-row>
      </el-menu>
      <router-view @hdindex="getHeadIndex"/>
    </div>
</template>


<script>
export default {
  name: 'Layout',
  // props:{
  //   activeIndex: Number
  // },
  data() {
      return {
        activeIndex: '/'
      };
    },
    methods: {
      defaultIdex(){
        this.activeIndex = this.$route.path; 
      },
      handleSelect: function(key, keyPath) {
        switch(key){
          case '/':
            this.$router.push('/').catch(err => {})
            this.activeIndex = '/'
            break
          case '/EntranceGuard':
            this.$router.push('/EntranceGuard').catch(err => {})
            this.activeIndex = '/EntranceGuard'
            break
          case '/FacialRecDevice':
            this.$router.push('/FacialRecDevice').catch(err => {})
            this.activeIndex = '/FacialRecDevice'
            break
          default:
            break
        }
      },
      clickName: function(){
        this.$router.push('/').catch(err => {})
        // this.activeIndex = '1'
      },
      getHeadIndex(num){
        console.log("GETTTTTTT")
        this.activeIndex = num;
      }
    },
    created(){  //vue生命周期创建时
        this.defaultIdex()
    },
    beforeUpdate(){
        this.activeIndex = this.$route.matched[2].path  //重要的点，this.$route.matched[2].path 就是父路由的地址，使用的是路由钩子。
    },
    update(){ //vue生命周期改变时
        this.defaultIdex()
    },
    // watch:{
    //   activeIndex(val, oldVal){
    //     console.log(val);
    //   }
    }
</script>
<style scoped>
 .el-col-12[data-v-005bfc5a]{
   padding:0 8% 0 1% !important;
 }
 .el-col-6[data-v-005bfc5a]{
   padding-left: 5%;
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
  margin-left:1%
}

</style>