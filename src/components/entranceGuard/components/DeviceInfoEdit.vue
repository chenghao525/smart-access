<template>
  <div class="deviceInfo_container" style="margin-bottom:30px">
    <div class="deviceInfo_content">
      <div style="margin: 0 200px;">
        <div class="top-btn-container">
          <el-button
            class="top-btn"
            type="primary"
            size="large"
            @click="handleReturn"
            >返回</el-button
          >
        </div>
        <el-form
          class="device-info-form"
          ref="deviceInfoForm"
          :model="deviceInfoForm"
          :inline="true"
          label-width="200px"
          label-position="left"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="门禁型号:" prop="e_model">
                <el-input
                  v-model="deviceInfoForm.e_model"
                  placeholder="品牌+型号"
                ></el-input>
              </el-form-item>
              <el-form-item label="Ups:" prop="e_UPSInfo">
                <el-input
                  v-model="deviceInfoForm.e_UPSInfo"
                  placeholder="品牌+型号"
                ></el-input>
              </el-form-item>
              <el-form-item label="Nvr:" prop="e_NVRInfo">
                <el-input
                  v-model="deviceInfoForm.e_NVRInfo"
                  placeholder="品牌+型号"
                ></el-input>
              </el-form-item>
              <el-form-item label="掉电自启模块:" prop="e_embeddedModuleInfo">
                <el-input
                  v-model="deviceInfoForm.e_embeddedModuleInfo"
                  placeholder="品牌+型号"
                ></el-input>
              </el-form-item>
              <el-form-item label="服务器:" prop="e_serverInfo">
                <el-input
                  v-model="deviceInfoForm.e_serverInfo"
                  placeholder="品牌+型号"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="交换机:" prop="e_switchInfo">
                <el-input
                  v-model="deviceInfoForm.e_switchInfo"
                  placeholder="品牌+型号"
                ></el-input>
              </el-form-item>
              <el-form-item label="电视机:" prop="e_televisionInfo">
                <el-input
                  v-model="deviceInfoForm.e_televisionInfo"
                  placeholder="品牌+型号"
                ></el-input>
              </el-form-item>
              <el-form-item label="Pdu:" prop="e_PDUInfo">
                <el-input
                  v-model="deviceInfoForm.e_PDUInfo"
                  placeholder="品牌+型号"
                ></el-input>
              </el-form-item>
              <el-form-item label="路由器:" prop="e_routerInfo">
                <el-input
                  v-model="deviceInfoForm.e_routerInfo"
                  placeholder="品牌+型号"
                ></el-input>
              </el-form-item>
              <el-form-item label="4g无线路由器:" prop="e_LTERouterInfo">
                <el-input
                  v-model="deviceInfoForm.e_LTERouterInfo"
                  placeholder="品牌+型号"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <div class="divider" />
          <el-row class="bottom-row">
            <el-col :span="12">
              <el-form-item label="闸机:" prop="gateList">
                <div v-for="(item, index) in deviceInfoForm.gateList" :key="index">
                  <el-button class="button-list" size="large"
                    >{{ deviceInfoForm.gateList[index].g_name }}&nbsp&nbsp{{
                      deviceInfoForm.gateList[index].g_brandModel
                    }}
                  </el-button>
                  <i
                    slot="suffix"
                    class="iconfont icon-shanchu2"
                    @click="handleDelGate(index)"
                  ></i>
                </div>
                <el-button
                  class="add-button"
                  type="primary"
                  size="small"
                  @click="openGateDialog"
                  >添加闸机</el-button
                >
              </el-form-item>
            </el-col>
            <el-col :span="12"> 
              <el-form-item label="摄像头:" prop="cameraList">
                <div v-for="(item, index) in deviceInfoForm.cameraList" :key="index">
                  <el-button class="button-list" size="large"
                    >{{ deviceInfoForm.cameraList[index].c_name }}&nbsp&nbsp{{
                      deviceInfoForm.cameraList[index].c_brandModel
                    }}
                  </el-button>
                  <i
                    slot="suffix"
                    class="iconfont icon-shanchu2"
                    @click="handleDelCamera(index)"
                  ></i>
                </div>
                <el-button
                  class="add-button"
                  type="primary"
                  size="small"
                  @click="openCameraDialog"
                  >添加摄像头</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <el-dialog
      class="gate-dialog-container"
      :visible.sync="gateVisible"
      title="添加闸机"
      width="600px"
    >
     <div class="gate-dialog-content">
        <div class="gate-input-area" style="margin-bottom:2%">
          <span class="gate-input-label" style="font-weight:bold">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名称:</span>
          <el-input placeholder="请输入闸机名称" v-model="newGate.g_name"> </el-input>
        </div>
        <div class="gate-list-area">
          <span class="gate-input-label" style="font-weight:bold">品牌-型号:</span>
          <el-select class="gate-list-selector" placeholder="请选择闸机品牌-型号" v-model="newGate.g_brandModel">
            <el-option
              v-for="item in gateListOptions"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="btn-container">
        <el-button
          type="primary"
          class="bottom-btn"
          size="large"
          @click="handleAddGate"
          >添加闸机</el-button
        >
      </div>
    </el-dialog>
    <el-dialog
      class="camera-dialog-container"
      :visible.sync="cameraVisible"
      title="添加摄像头"
      width="600px"
    >
     <div class="camera-dialog-content">
        <div class="camera-input-area" style="margin-bottom:2%">
          <span class="camera-input-label" style="font-weight:bold">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名称:</span>
          <el-input placeholder="请输入摄像头名称" v-model="newCamera.c_name"> </el-input>
        </div>
        <div class="camera-list-area">
          <span class="camera-input-label" style="font-weight:bold">品牌-型号:</span>
          <el-select class="camera-list-selector" placeholder="请选择摄像头品牌-型号" v-model="newCamera.c_brandModel">
            <el-option
              v-for="item in cameraListOptions"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="btn-container">
        <el-button
          type="primary"
          class="bottom-btn"
          size="large"
          @click="handleAddCamera"
          >添加摄像头</el-button
        >
      </div>
    </el-dialog>
    <div class="btn-container">
      <el-button
        type="primary"
        class="bottom-btn"
        size="large"
        @click="handleSave"
        >保存</el-button
      >
    </div>
  </div>
</template>

<script>
import {
  GET_ENTRANCEGUARD_DEVICES,
  MODIFY_ENTRANCEGUARD_DEVICES
} from "../../../api";

export default {
  name: "DeviceInfoEdit",
  data() {
    return {
      gateVisible: false,
      cameraVisible:false,
      res: {},
      entranceGuardId: "",
      newGate:{},
      newCamera:{},
      deviceInfoForm: {
        e_model: "",
        e_UPSInfo: "",
        e_NVRInfo: "",
        e_embeddedModuleInfo: "",
        e_serverInfo: "",
        e_switchInfo: "",
        e_televisionInfo: "",
        e_PDUInfo: "",
        e_routerInfo: "",
        e_LTERouterInfo: "",
        g_name: "",
        g_model: "",
        g_entranceGuardId: "",
        gateList: [],
        cameraList:[],
      },
      gateListOptions: [],
      cameraListOptions:[],
    };
  },
  methods: {
    initData() {
    },
    //监听打开添加闸机弹框按钮
    openGateDialog() {
      this.gateVisible = true;
    },
    //监听打开添加摄像头弹框按钮
    openCameraDialog(){
      this.cameraVisible = true;
    },
    //监听添加闸机按钮
    handleAddGate(){
      console.log("ccc",this.newGate)
      this.deviceInfoForm.gateList.push(this.newGate)
      this.newGate = {}
      this.gateVisible = false;
    },
    //监听添加摄像头按钮
    handleAddCamera(){
      this.deviceInfoForm.cameraList.push(this.newCamera)
      this.newCamera = {}
      this.cameraVisible = false;
    },
    //删除单一闸机按钮
    handleDelGate(index){
      this.deviceInfoForm.gateList.splice(index,1)
    },
    //删除单一摄像头按钮
    handleDelCamera(index){
      this.deviceInfoForm.cameraList.splice(index,1)
    },
    //返回上一级按钮
    handleReturn() {
      this.$router.push({ path: "/EntranceGuard" });
    },
    getDeviceInfo(val) {
      let params = {
        entranceGuardId: val
      };
      // let res = this.res;
      this.$post(GET_ENTRANCEGUARD_DEVICES, params).then(res => {
        if (res.code === "1") {
          this.deviceInfoForm.e_model = res.data.devInfo.e_model;
          this.deviceInfoForm.e_UPSInfo = res.data.devInfo.e_UPSInfo;
          this.deviceInfoForm.e_NVRInfo = res.data.devInfo.e_NVRInfo;
          this.deviceInfoForm.e_embeddedModuleInfo = res.data.devInfo.e_embeddedModuleInfo;
          this.deviceInfoForm.e_serverInfo = res.data.devInfo.e_serverInfo;
          this.deviceInfoForm.e_switchInfo = res.data.devInfo.e_switchInfo;
          this.deviceInfoForm.e_televisionInfo = res.data.devInfo.e_televisionInfo;
          this.deviceInfoForm.e_PDUInfo = res.data.devInfo.e_PDUInfo;
          this.deviceInfoForm.e_routerInfo = res.data.devInfo.e_routerInfo;
          this.deviceInfoForm.e_LTERouterInfo = res.data.devInfo.e_LTERouterInfo;
          this.deviceInfoForm.gateList = res.data.devInfo.gateList;
          this.deviceInfoForm.cameraList = res.data.devInfo.cameraList;
          this.gateListOptions = res.data.g_brandModel;
          this.cameraListOptions = res.data.c_brandModel;
        }
      }).catch(err=>{
        console.log(err);
      })
    },
    //修改门禁设备信息按钮保存表单
    handleSave(){
      let params = {
          e_entranceGuardId: this.entranceGuardId,
          e_model: this.deviceInfoForm.e_model,
          e_UPSInfo: this.deviceInfoForm.e_UPSInfo,
          e_NVRInfo: this.deviceInfoForm.e_NVRInfo,
          e_embeddedModuleInfo: this.deviceInfoForm.e_embeddedModuleInfo,
          e_serverInfo: this.deviceInfoForm.e_serverInfo,
          e_switchInfo: this.deviceInfoForm.e_switchInfo,
          e_televisionInfo: this.deviceInfoForm.e_televisionInfo,
          e_PDUInfo: this.deviceInfoForm.e_PDUInfo,
          e_routerInfo: this.deviceInfoForm.e_routerInfo,
          e_LTERouterInfo: this.deviceInfoForm.e_LTERouterInfo,
          e_addGateList: this.deviceInfoForm.gateList,
          e_addCameraList: this.deviceInfoForm.cameraList,
      };
      this.$post(MODIFY_ENTRANCEGUARD_DEVICES, params).then(res=>{
        if(res.code === '1'){
          this.$message(res.msg)
          this.$router.push({
          path: "/EntranceGuard"
        });
        }
      }).catch(err=>{
        console.log(err)
        this.$message(res.msg)
      })
    },
  },
  mounted() {
    this.initData();
    if (this.$route.query.entranceGuardId) {
      this.getDeviceInfo(this.$route.query.entranceGuardId);
      this.entranceGuardId = this.$route.query.entranceGuardId;
    }
    
  },
};
</script>

<style scoped>
.el-form-item {
  width: 100%;
}
.device-info-form >>> .el-input__inner {
  margin-left: 10% !important;
  height: 3em !important;
}
.divider {
  height: 1px;
  border-top: 1px solid #cccccc;
  margin: 40px 40px;
}
.button-list {
  min-width: 200px;
}
.bottom-row {
  margin: 0 200px  0 130px;
}
.add-button {
  background-color: #37c6c0;
  border-color: #37c6c0;
}
</style>
