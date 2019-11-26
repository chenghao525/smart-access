<template>
    <div class="navbar">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#37C6C0"
        text-color="#FFF"
        active-text-color="#FFF">
        <div class="navbar-container">
          <div class="web-name" style="float:left;font-size: 40px;padding:20px 0px;color:white;margin-left:1%">
              智慧门禁
          </div>
          <div class="user-menu-item">
            <el-menu-item index="1">分区</el-menu-item>
            <el-menu-item index="2" >门禁</el-menu-item>
            <el-menu-item index="3">人脸识别设备</el-menu-item>
          </div>
        </div>
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
      handleSelect(key, keyPath) {
        switch(key){
          case '1':
            this.$router.push('/').catch(err => {})
            break
          case '2':
            this.$router.push('/EntranceGuard').catch(err => {})
            break
          case '3':
            this.$router.push('/EntranceGuard').catch(err => {})
            break
        }
      }
    }
}
</script>
<style>
  .navbar-container{
    width: 100%;
    min-height: 90px;
  }
  .user-menu-item{
    display: flex;
    width: 50vw;
    font-size: 35px;
    margin-left: 5%;
    padding-left: 60px;
    margin-left: 18px;
    justify-content: space-between;
    align-items: center;
    height: 90px;
  }
  .el-menu-item.is-active {
    background-color: #FFCC00 !important;
    height: 90px;
  }
  .el-menu-item{
    height: 90px;
    display: flex;
    font-size: 35px;
    align-items: center;
  }
</style>