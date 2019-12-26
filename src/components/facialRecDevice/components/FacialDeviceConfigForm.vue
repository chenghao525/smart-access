<template>
  <el-dialog
    class="facialDevice-config-container"
    :visible.sync="visible"
    :title="title"
    width="600px"
  >
    <div class="facialDevice-config-content">
      <el-form
        class="form-container"
        label-position="right"
        :model="facialDeviceConfigForm"
        ref="facialDeviceConfigForm"
        :rules="rules"
      >
        <el-form-item label="识别分数:" prop="identifyScores">
          <el-input
            v-model="facialDeviceConfigForm.identifyScores"
            size="medium"
            placeholder="请输入设备识别分数"
          ></el-input>
        </el-form-item>
        <el-form-item label="识别距离:" prop="identifyDistance">
          <el-select
            v-model="facialDeviceConfigForm.identifyDistance"
            size="medium"
            placeholder="请选择设备识别距离"
          >
            <el-option
              v-for="item in distanceList"
              :key="item.keyValue"
              :label="item.keyName"
              :value="item.keyValue"
            >
            {{item.keyName}}
            </el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="设备时间:" prop="time">
          <el-input
            v-model="facialDeviceConfigForm.time"
            size="medium"
            placeholder="请输入设备时间"
          ></el-input>
        </el-form-item> -->
        <el-form-item label="心跳上报地址:" prop="url">
          <el-input
            v-model="facialDeviceConfigForm.url"
            size="medium"
            placeholder="请输入心跳上报地址：Ip+端口"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn-container">
      <el-button
        type="primary"
        class="bottom-btn"
        size="large"
        @click="handleSave"
        >保存设置</el-button
      >
    </div>
    <div>
      <transition name="fade">
        <loading v-if="isLoading"></loading>
      </transition>
    </div>
  </el-dialog>
</template>

<script>
import {
  SET_FACEDEVICE_TIME,
  SET_FACEDEVICE_IDENTIFYSCORES,
  SET_FACEDEVICE_IDENTIFYDISTANCE,
  SET_FACEDEVICE_REPORTURL,
  SET_FACEDEVICE_IDENTIFYDISTANCE_SCORE
} from "../../../api";
import Loading from "../../../custom_components/loading";

export default {
  name: "FacialDeviceConfigForm",
  components: { Loading },
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    selectedConfigDeviceID: {
      type: Array,
      default: {}
    }
  },
  data() {
    return {
      visible: this.showDialog,
      title: "设置人脸识别设备",
      isLoading: false,
      deviceConfig: {},
      preDeviceConfig: {},
      distanceList: [
        {
          keyValue: 0,
          keyName: "无限制"
        },
        {
          keyValue: 1,
          keyName: "0.5米以内"
        },
        {
          keyValue: 2,
          keyName: "1米以内"
        },
        {
          keyValue: 3,
          keyName: "1.5米以内"
        },
        {
          keyValue: 4,
          keyName: "2米以内"
        },
        {
          keyValue: 5,
          keyName: "3米以内"
        },
        {
          keyValue: 6,
          keyName: "4米以内"
        }
      ],
      selectedFaceDevices: [],
      facialDeviceConfigForm: {
        identifyScores: "",
        identifyDistance: "",
        time: "123",
        url: ""
      },
      rules: {
        time: [{ required: true, message: "请输入设备时间", trigger: "blur" }],
        identifyScores: [
          { required: true, message: "请输入识别分数", trigger: "blur" }
        ],
        identifyDistance: [
          { required: true, message: "请输入识别距离", trigger: "blur" }
        ],
        url: [
          { required: true, message: "请输入心跳上报地址", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //设置设备时间接口
    async setTime() {
      let params = {
        ipList: this.selectedFaceDevices,
        time: this.facialDeviceConfigForm.time
      };

      const success = await this.$post(SET_FACEDEVICE_TIME, params)
        .then(res => {
          // if (res.data) {
          //   res.data.forEach(msg=>{
          //     this.$message(msg)
          //   })
          // }
        })
        .catch(err => {
          console.log(err);
        });
        return success;
    },
    //设置心跳地址接口
    setUrl() {
      let success = false;
      let params = {
        ipList: this.selectedFaceDevices,
        url: this.facialDeviceConfigForm.url
      };

      this.$post(SET_FACEDEVICE_REPORTURL, params)
        .then(res => {
          if (res.data) {
           res.data.forEach(msg=>{
              this.$message(msg)
            })
          }
          if (res.code === "1") {
            success = true
          } else {
            success = false
          }
        })
        .catch(err => {
          console.log(err);
        });
        return success;
    },
    //设置设备距离接口
    // setDistance(val) {
    //   let success = false;
    //   let params = {
    //     ipList: this.selectedFaceDevices,
    //     identifyDistance: val
    //   };

    //   this.$post(SET_FACEDEVICE_IDENTIFYDISTANCE, params)
    //     .then(res => {
    //       if (res.data) {
    //         res.data.forEach(msg=>{
    //           this.$message(msg)
    //         })
    //       }
    //       if (res.code === "1") {
    //         success = true
    //       } else {
    //         success = false
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    //     return success;
    // },
    //设置设备分数接口
    setDistanceScore() {
      let success = false;
      let params = {
        ipList: this.selectedFaceDevices,
        identifyScores: this.facialDeviceConfigForm.identifyScores,
        identifyDistance: this.facialDeviceConfigForm.identifyDistance
      }; 
      this.$post(SET_FACEDEVICE_IDENTIFYDISTANCE_SCORE, params)
        .then(res => {
          if (res.data) {
            res.data.forEach(msg=>{
              this.$message(msg)
            })
          }
          if (res.code === "1") {
            success = true
          } else {
            success = false
          }
        })
        .catch(err => {
          console.log(err);
        });
        return success;
    },
    /**
     * 关闭弹框
     */
    handleCancel() {
      this.$refs["facialDeviceConfigForm"].resetFields();
      this.visible = false;
      this.$emit("close");
    },
    handleSave() {
      if (this.selectedFaceDevices.length === 0) {
        this.$message("请选择需要设置的设备");
        return false;
      }
      this.$refs["facialDeviceConfigForm"].validate(valid => {
        if (valid) {
          // this.isLoading = true;
          console.log("device", this.selectedFaceDevices);
          let timeSet = this.setTime();
          let urlSet = this.setUrl();
          let distanceScoreSet = this.setDistanceScore();
          // console.log(timeSet,urlSet,scoreSet)
          // if (timeSet && urlSet && scoreSet) {
            console.log("All success");
            for(let i=0;i<this.selectedFaceDevices.length;i++){
              let device = this.selectedFaceDevices[i]
              this.deviceConfig[device] = {
                url: this.facialDeviceConfigForm.url,
                identifyScores: this.facialDeviceConfigForm.identifyScores,
                identifyDistance: this.facialDeviceConfigForm.identifyDistance,
                time: this.facialDeviceConfigForm.time
              };
            }
            console.log("CCCCCCCCC", this.deviceConfig);
            this.$store.commit("SET_DEVICECONFIG", this.deviceConfig);
          // }
          this.handleCancel();
        }else{
          this.$message.warning('校验失败，请务必填写*标记内容')
            return false
        }
      });
    }
  },
  mounted() {},
  watch: {
    showDialog() {
      this.visible = this.showDialog;
    },
    visible(val, oldVal) {
      if (!val) {
        this.handleCancel();
      }
    },
    selectedConfigDeviceID(val, oldVal) {
      this.selectedFaceDevices = [];
      val.forEach(device => {
        this.selectedFaceDevices.push(device.d_device_address);
      });
      this.preDeviceConfig = JSON.parse(localStorage.getItem("deviceConfig"));
       console.log("LocalStore1", this.preDeviceConfig);
      if (this.preDeviceConfig) {
        for (let i = 0; i < this.selectedFaceDevices.length; i++) {
          let device = this.selectedFaceDevices[i]
          if (device in this.preDeviceConfig) {
            this.facialDeviceConfigForm.url = this.preDeviceConfig[device].url;
            this.facialDeviceConfigForm.time = this.preDeviceConfig[device].time;
            this.facialDeviceConfigForm.identifyScores = this.preDeviceConfig[device].identifyScores;
            this.facialDeviceConfigForm.identifyDistance = this.preDeviceConfig[device].identifyDistance;
            break;
          } else {
            this.facialDeviceConfigForm.url = "";
            this.facialDeviceConfigForm.time = "";
            this.facialDeviceConfigForm.identifyScores = "";
            this.facialDeviceConfigForm.identifyDistance = "";
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.facialDevice-config-content {
  display: flex;
  justify-content: center;
}

.form-container >>> .el-form-item__label {
  width: 140px;
}
</style>
