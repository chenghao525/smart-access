<template>
  <el-dialog class="facialDevice-config-container"
             :visible.sync="visible"
             :title="title"
             width="600px">
    <div class="facialDevice-config-content">
      <el-form class="form-container"
               label-position="right"
               :model="facialDeviceConfigForm"
               ref="facialDeviceConfigForm"
               :rules="rules">
          <el-form-item label="识别分数:" prop="identifyScores">
            <el-input v-model="facialDeviceConfigForm.identifyScores" size="medium" placeholder="请输入设备识别分数"></el-input>
          </el-form-item>
          <el-form-item label="识别距离:" prop="identifyDistance">
            <el-select v-model="facialDeviceConfigForm.identifyDistance" size="medium" placeholder="请选择设备识别距离">
              <el-option
                    v-for="item in distanceList"
                    :key="item.keyValue"
                    :label="item.keyName"
                    :value="item.keyValue">
            </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备时间:" prop="time">
            <el-input v-model="facialDeviceConfigForm.time" size="medium" placeholder="请输入设备时间"></el-input>
          </el-form-item>
          <el-form-item label="心跳上报地址:" prop="url">
            <el-input v-model="facialDeviceConfigForm.url" size="medium" placeholder="请输入心跳上报地址：Ip+端口"></el-input>
          </el-form-item>
      </el-form>
    </div>
    <div class="btn-container" >
      <el-button type="primary" class="bottom-btn" size="large" @click="handleSave">保存设置</el-button>
    </div>
  </el-dialog>
</template>

<script>

  export default {
    name: "FacialDeviceConfigForm",
    props: {
      showDialog: {
        type: Boolean,
        default: false
      },
      selectedConfigDeviceID:{
        type:Array,
        default:{}
      }
    },
    data() {
      return {
        visible : this.showDialog,
        title: "设置人脸识别设备",
        distanceList: [
          {
            keyValue:0,
            keyName:'无限制'
          },
          {
            keyValue:1,
            keyName:'0.5米以内'
          },
          {
            keyValue:2,
            keyName:'1米以内'
          },
          {
            keyValue:3,
            keyName:'1.5米以内'
          },
          {
            keyValue:4,
            keyName:'2米以内'
          },
          {
            keyValue:5,
            keyName:'3米以内'
          },
          {
            keyValue:6,
            keyName:'4米以内'
          },
        ],
        selectedFaceDevices:[],
        facialDeviceConfigForm: {
          identifyScores:"",
          identifyDistance:"",
          time:"",
          url:""
        },
        rules: {
          // partitionName: [
          //   {required: true, message: '请输入分区名称', trigger: 'blur'}
          // ],
          // partitionNum: [
          //   {required: true, message: '请输入分区编号', trigger: 'blur'}
          // ]
        }
      }
    },
    methods:{
       /**
       * 关闭弹框
       */
      handleCancel() {
        this.visible = false,
        this.$emit('close')
      },
      handleSave(){
        if(this.selectedFaceDevices.length === 0){
          this.$message("请选择需要设置的设备")
          return false
        }
        console.log("device",this.selectedFaceDevices)
        let params = {
          ipList: this.selectedFaceDevices,
        };
      },
    },
    watch: {
      showDialog() {
        this.visible = this.showDialog
      },
      visible(val, oldVal){
        if (!val) {
          this.handleCancel()
        }
      },
      selectedConfigDeviceID(val, oldVal){
          this.selectedFaceDevices = [];
          val.forEach(device=>{
            this.selectedFaceDevices.push(device.d_device_address)
          })
      }
    }
  }
</script>


<style scoped>
  .facialDevice-config-content{
    display: flex;
    justify-content: center;
  }
</style>