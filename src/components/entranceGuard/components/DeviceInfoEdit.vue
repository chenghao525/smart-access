<template>
  <div class="deviceInfo_container">
    <div class="deviceInfo_content">
      <div style="margin: 0 200px;">
        <div class="top-btn-container">
            <el-button class="top-btn" type="primary" size="large" @click="handleReturn">返回</el-button>
        </div>
        <el-form  class="device-info-form" 
                  ref="deviceInfoForm" 
                  :model="deviceInfoForm" 
                  inline="true"
                  label-width="200px" 
                  label-position="left">
          <el-row>
            <el-col :span="12">
              <el-form-item label="门禁型号:" prop="e_model">
                <el-input v-model="deviceInfoForm.e_model" placeholder="品牌+型号"></el-input>
              </el-form-item>
              <el-form-item label="Ups:" prop="e_UPSInfo">
                <el-input v-model="deviceInfoForm.e_UPSInfo" placeholder="品牌+型号"></el-input>
              </el-form-item>
              <el-form-item label="Nvr:" prop="e_NVRInfo">
                <el-input v-model="deviceInfoForm.e_NVRInfo" placeholder="品牌+型号"></el-input>
              </el-form-item>
              <el-form-item label="掉电自启模块:" prop="e_embeddedModuleInfo">
                <el-input v-model="deviceInfoForm.e_embeddedModuleInfo" placeholder="品牌+型号"></el-input>
              </el-form-item>
              <el-form-item label="服务器:" prop="e_serverInfo">
                <el-input v-model="deviceInfoForm.e_serverInfo" placeholder="品牌+型号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="交换机:" prop="e_switchInfo">
                <el-input v-model="deviceInfoForm.e_switchInfo" placeholder="品牌+型号"></el-input>
              </el-form-item>
              <el-form-item label="电视机:" prop="e_televisionInfo">
                <el-input v-model="deviceInfoForm.e_televisionInfo" placeholder="品牌+型号"></el-input>
              </el-form-item>
              <el-form-item label="Pdu:" prop="e_PDUInfo">
                <el-input v-model="deviceInfoForm.e_PDUInfo" placeholder="品牌+型号"></el-input>
              </el-form-item>
              <el-form-item label="路由器:" prop="e_routerInfo">
                <el-input v-model="deviceInfoForm.e_routerInfo" placeholder="品牌+型号"></el-input>
              </el-form-item>
              <el-form-item label="4g无线路由器:" prop="e_LTERouterInfo">
                <el-input v-model="deviceInfoForm.e_LTERouterInfo" placeholder="品牌+型号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name:"DeviceInfoEdit",
  data(){
    return{
      deviceInfoForm:{
        e_model:''
      }
    }
  },
  methods:{
    handleReturn(){
        this.$router.push({path:'/EntranceGuard'})
    },
  }
}
</script>


<style scoped>
  .el-form-item{
    width: 100%;
  }
  .device-info-form >>> .el-input__inner {
    margin-left: 10% !important;
    height: 3em !important;
  }
</style>
