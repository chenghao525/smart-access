<template>
  <el-dialog class="facialDevice-delete-container"
             :visible.sync="visible"
             :title="title"
             width="600px">
    <div class="facialDevice-delete-content">
      <h2>是否确认删除？</h2>
    </div>
    <div class="btn-container" >
      <el-button type="primary" class="bottom-btn" size="large" @click="handleCancel">取消</el-button>
      <el-button type="primary" class="bottom-btn" size="large" @click="handleDelete">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {DELETE_FACEDEVICE} from '../../../api'

  export default {
    name: "FacialDeviceDeleteForm",
    props: {
      showDialog: {
        type: Boolean,
        default: false
      },
      selectedDeleteDeviceID:{
        type: Array,
        default:[]
      }
    },
    data() {
      return {
        visible : this.showDialog,
        title: "删除设备",
        deleteDeviceID:[]
      }
    },
    methods:{
       /**
       * 关闭弹框
       */
      handleCancel() {
        this.visible = false;
        this.$emit('close')
      },
      handleDelete(){
        if(this.deleteDeviceID.length === 0){
          this.$message("请选择需要删除的设备")
          return false
        }
        let params = {
          d_device_id : this.deleteDeviceID
        }
        this.$post(DELETE_FACEDEVICE,params).then(res=>{
          if(res.code === '1'){
            this.$message("设备删除成功")
            this.$emit('refresh');
            this.handleCancel();
          } else if(res.code === '-1'){
            this.$message(res.msg)
          }
        }).catch(err=>{
          this.$message("设备删除失败")
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
      },
      selectedDeleteDeviceID(val, oldVal){
        this.deleteDeviceID = []
        val.forEach(device=>{
          this.deleteDeviceID.push(device.d_device_id)
        })
        // this.deleteDeviceID = val;
      }
    }
  }
</script>

<style scoped>
 .btn-container >>> .bottom-btn{
    width: 8em !important;
    border-radius: 8px !important;
    margin: 0px 10px;
  }

</style>