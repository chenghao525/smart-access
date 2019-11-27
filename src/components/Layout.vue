<template>
    <div class="navbar">
      <el-menu
        :default-active="activeIndex2"
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
                <el-menu-item index="1">分区</el-menu-item>
                <el-menu-item index="2" >门禁</el-menu-item>
                <el-menu-item index="3">人脸识别设备</el-menu-item>
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
        <router-view/>
    </div>
</template>


<script>
export default {
  name: 'Layout',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect: function(key, keyPath) {
        switch(key){
          case '1':
            this.$router.push('/Partition').catch(err => {})
            break
          case '2':
            this.$router.push('/EntranceGuard').catch(err => {})
            break
          case '3':
            this.$router.push('/FacialRecDevice').catch(err => {})
            break
          default:
            break
        }
      }
    }
}
</script>
<style>
  .my-el-menu{
    height: 80px;
    padding-left: 100px;
  }
  .web-name{
    float:left;
    font-size: 35px;
    font-weight: bold;
    padding:20px 0px;
    color:white;
    margin-left:1%
  }
  .el-menu-item{
    display: flex;
    padding: 0 50px;
    font-size: 25px;
    height: 80px !important;
    border-bottom-color: transparent !important;
    align-items: center;
  }
  .el-menu-item.is-active {
    background-color: #FFCC00 !important;
  }
  .login{
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 80px !important;
    padding: 0 100px;
  }

</style>