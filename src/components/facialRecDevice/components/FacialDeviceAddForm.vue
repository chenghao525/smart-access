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
          <el-form-item label="设备型号：" prop="enterPartition">
            <el-select v-model="facialDeviceAddForm.enterPartition" size="medium" placeholder="请选择设备型号">
              <!-- <el-option v-for="item in deptList"
                       :key="item.deptId"
                       :label="item.deptName"
                       :value="item.deptId">
            </el-option> -->
            </el-select>
          </el-form-item>
          <el-form-item label="IP:" prop="facialDeviceName">
            <el-input v-model="facialDeviceAddForm.facialDeviceName" size="medium" placeholder="请输入IP"></el-input>
          </el-form-item>
          <el-form-item label="方向" prop="enterPartition">
            <el-select v-model="facialDeviceAddForm.enterPartition" size="medium" placeholder="请选择方向">
              <!-- <el-option v-for="item in deptList"
                       :key="item.deptId"
                       :label="item.deptName"
                       :value="item.deptId">
            </el-option> -->
            </el-select>
          </el-form-item>
          <el-form-item label="设备所属门禁" prop="enterPartition">
            <el-select v-model="facialDeviceAddForm.enterPartition" size="medium" placeholder="请选择设备所属门禁">
              <!-- <el-option v-for="item in deptList"
                       :key="item.deptId"
                       :label="item.deptName"
                       :value="item.deptId">
            </el-option> -->
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

        },
        rules: {
          partitionName: [
            {required: true, message: '请输入分区名称', trigger: 'blur'}
          ],
          partitionNum: [
            {required: true, message: '请输入分区编号', trigger: 'blur'}
          ]
        }
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
      handleAdd(){
        console.log("Add");
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

<style>
  .el-dialog{
    border-radius: 30px;
  }
  .el-form-item__label{
    width: 130px;
  }
  .el-form-item__content {
    display: inline-block !important;
  }
  .el-dialog__header{
    padding: 20px !important;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    text-align: center;
    background-color: #37C6C0;
    height: 28px;
  }
  .el-dialog__title{
    line-height: 28px !important;
    font-size: 25px;
    font-weight: bold;
    color: #ffffff;
  }
  .el-form-item__label{
    font-size: 18px;
    font-weight: bold;
  }
  .el-input__inner{
    height: 2em;
    }
  .facialDevice-add-content{
    display: flex;
    justify-content: center;
  }
  .el-input{
     width: 217px;
  }
  .btn-container{
    padding-top: 30px;
    text-align: center;
  }
</style>
<style scoped>
  .bottom-btn{
    width: 16em;
    height: 3em;
    background-color: #37C6C0;
    border: transparent;
    border-radius: 60px;
  }
  .bottom-btn:hover{
    color: #FFFFFF;
    background: #FFCC00;
  }
</style>