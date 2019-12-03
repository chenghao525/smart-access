<template>
  <el-dialog class="entranceGuard-edit-container"
             :visible.sync="visible"
             :title="title"
             width="600px">
    <div class="entranceGuard-edit-content">
      <el-form class="form-container"
               label-position="right"
               :model="entranceGuardEditForm"
               ref="entranceGuardEditForm"
               :rules="rules">
          <el-form-item label="门禁名称:" prop="entranceGuardName">
            <el-input v-model="entranceGuardEditForm.entranceGuardName" size="medium" placeholder="请输入门禁名称"></el-input>
          </el-form-item>
          <el-form-item label="进向连接区域:" prop="enterPartition">
            <el-select v-model="entranceGuardEditForm.enterPartition" size="medium" placeholder="请输入进向连接区域">
              <el-option
                    v-for="item in allPartitionName"
                    :key="item"
                    :label="item"
                    :value="item">
            </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出向连接区域:" prop="exitPartition">
            <el-select v-model="entranceGuardEditForm.exitPartition" size="medium" placeholder="请输入出向连接区域">
              <el-option
                    v-for="item in allPartitionName"
                    :key="item"
                    :label="item"
                    :value="item">
            </el-option>
            </el-select>
          </el-form-item>
      </el-form>
    </div>
    <div class="btn-container" >
      <el-button type="primary" class="bottom-btn" size="large" @click="handleEdit">门禁修改</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {UPDATE_ENTRANCEGUARD, GET_ALL_PARTITION_NAME} from '../../../api'

  export default {
    name: "EntranceGuardEditForm",
    props: {
      showDialog: {
        type: Boolean,
        default: false
      },
      selectedEntranceGuard:{
        type:Object,
        default:{}
      }
    },
    data() {
      return {
        visible : this.showDialog,
        title: "修改门禁",
        allPartitionName: [],
        selectedGuardID:"",
        entranceGuardEditForm: {
          entranceGuardName:"",
          enterPartition:"",
          exitPartition:""
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
        this.$refs['entranceGuardEditForm'].resetFields()
        this.visible = false,
        this.$emit('close')
      },
      handleEdit(){
        if(this.selectedGuardID === ""){
          this.$message("请选择需要修改的门禁")
          return false
        }
        let params = {
          entranceGuardId: this.selectedGuardID,
          entranceGuardName: this.entranceGuardEditForm.entranceGuardName,
          enterPartition: this.entranceGuardEditForm.enterPartition,
          exitPartition: this.entranceGuardEditForm.exitPartition
        };
        this.$post(UPDATE_ENTRANCEGUARD,params).then(res=>{
          if(res.code === '1'){
            console.log("获取成功！");
            this.$emit('refresh');
            this.handleCancel();
          }
        }).catch(err=>{
          console.log(err);
        });
      },
      /**
       * 获取所有分区名称
       */
      getAllPartitionName(){
        this.$post(GET_ALL_PARTITION_NAME,{}).then(res=>{
          if(res.code === '1'){
            console.log("获取成功！");
            this.allPartitionName = res.data;
          }
        }).catch(err=>{
          console.log(err);
        });
      }
    },
    mounted() {
      this.getAllPartitionName()
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
      selectedEntranceGuard(val, oldVal){
        if(val){
          this.selectedGuardID = val.entranceGuardId;
        }
        this.entranceGuardEditForm.entranceGuardName = val.entranceGuardName;
        this.entranceGuardEditForm.enterPartition = val.enterPartition;
        this.entranceGuardEditForm.exitPartition = val.exitPartition;
      }
    }
  }
</script>


<style scoped>
  .entranceGuard-edit-content{
    display: flex;
    justify-content: center;
  }
</style>