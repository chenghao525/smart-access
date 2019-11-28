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

<style scoped>
  .facialDevice-add-content{
    display: flex;
    justify-content: center;
  }
</style>
