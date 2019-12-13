<template>
  <div class="deviceInfo_container">
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
          inline="true"
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
              <div
                v-for="(item, index) in gateList"
                :key="index"
              >
                <el-button
                  class="button-list"
                  size="large"
                >{{gateList[index].g_name}}&nbsp&nbsp{{gateList[index].g_model}}
                  <!-- <i
                    slot="suffix"
                    class="el-icon-delete-solid"
                    @click="handleDelTeam(index)"
                  ></i> -->
                </el-button>
              </div>

              <el-button class="add-button" type="primary" size="small" @click="handleAddGate"
                >添加闸机</el-button
              >
            </el-form-item>
          </el-col>
          <el-col :span="12"> </el-col>
        </el-row>
        </el-form>
      </div>
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
      res: {},
      gateList:[],
      entranceGuardId: "",
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
        g_entranceGuardId: ""
      }
    };
  },
  methods: {
    initData() {
      this.res = {
        code: "1",
        msg: "",
        data: {
          devInfo: {
            e_model: "cc 型号",
            e_UPSInfo: "品牌 型号",
            e_NVRInfo: "品牌 型号",
            e_serverInfo: "品牌 型号",
            e_embeddedModuleInfo: "品牌 型号",
            e_switchInfo: "品牌 型号",
            e_televisionInfo: "品牌 型号",
            e_PDUInfo: "品牌 型号",
            e_routerInfo: "品牌 型号",
            e_LTERouterInfo: "品牌 型号",
            gateList: [
              //门禁下已添加的闸机信息列表
              {
                g_id: "01",
                g_entranceGuardId: "001",
                g_model: "S601",
                g_name: "通道1摆闸"
              },
              {
                g_id: "02",
                g_entranceGuardId: "001",
                g_model: "S801",
                g_name: "通道2翼闸"
              }
            ],
            cameraList: [
              //门禁下已添加的监控摄像头信息列表
              {
                c_id: "01",
                c_entranceGuardId: "001",
                c_model: "model",
                c_name: "进向监控"
              },
              {
                c_id: "02",
                c_entranceGuardId: "001",
                c_model: "model",
                c_name: "出向监控"
              }
            ]
          },
          gateList: [
            //可选的闸机信息列表
            {
              g_model: "model",
              g_brand: "brand",
              g_type: "type"
            },
            {
              g_model: "model",
              g_brand: "brand",
              g_type: "type"
            }
          ],
          cameraList: [
            //可选的监控摄像头信息列表
            {
              c_model: "model",
              c_brand: "brand"
            },
            {
              c_model: "model",
              c_brand: "brand"
            }
          ]
        }
      };
    },
    handleReturn() {
      this.$router.push({ path: "/EntranceGuard" });
    },
    getDeviceInfo() {
      let params = {
        entranceGuardId: this.entranceGuardId
      };
      let res = this.res;
      // this.$post(GET_ENTRANCEGUARD_DEVICES, params).then(res => {
      //   if (code === "1") {
      //   }
      // });
      this.deviceInfoForm.e_model= res.data.devInfo.e_model;
      this.deviceInfoForm.e_UPSInfo= res.data.devInfo.e_UPSInfo;
      this.deviceInfoForm.e_NVRInfo= res.data.devInfo.e_NVRInfo;
      this.deviceInfoForm.e_embeddedModuleInfo= res.data.devInfo.e_embeddedModuleInfo;
      this.deviceInfoForm.e_serverInfo= res.data.devInfo.e_serverInfo;
      this.deviceInfoForm.e_switchInfo= res.data.devInfo.e_switchInfo;
      this.deviceInfoForm.e_televisionInfo= res.data.devInfo.e_televisionInfo;
      this.deviceInfoForm.e_PDUInfo= res.data.devInfo.e_PDUInfo;
      this.deviceInfoForm.e_routerInfo= res.data.devInfo.e_routerInfo;
      this.deviceInfoForm.e_LTERouterInfo= res.data.devInfo.e_LTERouterInfo;
      this.gateList = res.data.devInfo.gateList;
    }
  },
  mounted() {
    this.initData();
    this.getDeviceInfo();
    if (this.$route.query.entranceGuardId) {
      this.entranceGuardId = this.$route.query.entranceGuardId;
    }
  }
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
.button-list{
  width: 200px;
}
.bottom-row{
  margin: auto 200px;
}
.add-button{
  background-color: #37C6C0;
  border-color: #37C6C0;
}
</style>
