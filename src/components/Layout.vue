<template>
    <div class="navbar">
      <el-menu
        :default-active="defaultIndex"
        class="my-el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#37C6C0"
        text-color="#FFF"
        active-text-color="#FFF">
        <el-row class="navbar-container">
          <el-col :span = "6">
            <div  class="web-name">智慧门禁</div>
          </el-col>
          <el-col :span = "12">
            <div class="user-menu-item">
              <div>
                <el-menu-item index="1" class="{'active':activeIndex == 1">分区</el-menu-item>
                <el-menu-item index="2" class="{'active':activeIndex == 2">门禁</el-menu-item>
                <el-menu-item index="3" class="{'active':activeIndex == 3">人脸识别设备</el-menu-item>
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
        defaultIndex: '1',
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect: function(key, keyPath) {
        switch(key){
          case '1':
            this.$router.push('/').catch(err => {})
            this.activeIndex = '1'
            break
          case '2':
            this.$router.push('/EntranceGuard').catch(err => {})
            this.activeIndex = '2'
            break
          case '3':
            this.$router.push('/FacialRecDevice').catch(err => {})
            this.activeIndex = '3'
            break
          default:
            break
        }
      },
      getHeadIndex(num){
        console.log("GETTTTTTT")
        this.activeIndex = num;
      }
    },
    watch:{
      activeIndex(val, oldVal){
        console.log(val);
      }
    }
}
</script>
<style scoped>
 .el-col-12[data-v-005bfc5a]{
   padding:0 8% 0 1% !important;
 }
 .user-menu-item{
   display: flex;
   justify-content: center;
   height: 80px;
   white-space:nowrap;
 }

</style>