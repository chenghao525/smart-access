<template>
  <el-dialog class="facialDevice-add-container"
             :visible.sync="visible"
             :title="title"
             width="600px">
    <div class="facialDevice-add-content">
      <el-form class="form-container"
               label-position="right"
               :model="facialDeviceAddForm"
               ref="facialDeviceAddForm"
               :rules="rules">
          <el-form-item label="设备型号：" prop="d_device_model">
            <el-select v-model="facialDeviceAddForm.d_device_model" size="medium" placeholder="请选择设备型号">
              <el-option
                    v-for="item in deviceModelOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="IP:" prop="d_device_ip">
            <el-input v-model="facialDeviceAddForm.d_device_ip" size="medium" placeholder="请输入IP"></el-input>
          </el-form-item>
          <el-form-item label="方向" prop="d_device_direction">
            <el-select v-model="facialDeviceAddForm.d_device_direction" size="medium" placeholder="请选择方向">
              <el-option
                    v-for="item in directionOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备所属门禁" prop="d_entranceGuardId">
            <el-select v-model="facialDeviceAddForm.d_entranceGuardId" size="medium" placeholder="请选择设备所属门禁">
              <el-option
                    v-for="item in entranceGuardOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
            </el-select>
          </el-form-item>
      </el-form>
    </div>
    <div class="btn-container" >
      <el-button type="primary" class="bottom-btn" size="large" @click="handleAdd">添加设备</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {ADD_FACEDEVICE} from '../../../api'

  export default {
    name: "FacialDeviceAddForm",
    props: {
      showDialog: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        visible : this.showDialog,
        title: "新增设备",
        facialDeviceAddForm:{
          d_device_ip:"",
          d_device_model:"",
          d_device_direction:"",
          d_entranceGuardId:""
        },
        rules: {
          // partitionName: [
          //   {required: true, message: '请输入分区名称', trigger: 'blur'}
          // ],
          // partitionNum: [
          //   {required: true, message: '请输入分区编号', trigger: 'blur'}
          // ]
        },
        deviceModelOptions: [
          {
          value: 'zz',
          label: 'zz'
          }, 
          {
          value: 'AAA',
          label: 'AAA'
          }, 
        ],
        directionOptions: [
          {
          value: '0',
          label: '0'
          }, 
          {
          value: '1',
          label: '1'
          }, 
          {
          value: '2',
          label: '2'
          }, 
        ],
        entranceGuardOptions: [
          {
          value: '123',
          label: '123'
          }, 
          {
          value: '456',
          label: '456'
          }, 
        ],
      }
    },
    methods:{
       /**
       * 关闭弹框
       */
      handleCancel() {
        this.$refs['facialDeviceAddForm'].resetFields()
        this.visible = false,
        this.$emit('close')
      },
      //TODO: get url data
      handleAdd(){
        console.log("Add");
        let params = {
          d_device_ip:this.facialDeviceAddForm.d_device_ip,
          d_device_direction:this.facialDeviceAddForm.d_device_direction,
          d_device_model:this.facialDeviceAddForm.d_device_model,
          d_entranceGuardId:this.facialDeviceAddForm.d_entranceGuardId
        }
        this.$post(ADD_FACEDEVICE,params).then(res=>{
          if(res.code === '1'){
            console.log("添加成功！");
            this.$emit('refresh');
            this.handleCancel();
          }
        }).catch(err=>{
          console.log(err);
        });
      }
    },
    mounted() {
    },
    watch: {
      showDialog() {
        this.visible = this.showDialog
      },
      visible(val, oldVal){
        if (!val) {
          this.handleCancel()
        }
      }
    }
  }
</script>

<style scoped>
  .facialDevice-add-content{
    display: flex;
    justify-content: center;
  }
</style>
