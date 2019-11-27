<template>
  <el-dialog class="entranceGuard-add-container"
             :visible.sync="visible"
             :title="title"
             width="600px">
    <div class="entranceGuard-add-content">
      <el-form class="form-container"
               label-position="right"
               :model="entranceGuardAddForm"
               ref="entranceGuardAddForm"
               :rules="rules">
          <el-form-item label="门禁名称" prop="entranceGuardName">
            <el-input v-model="entranceGuardAddForm.entranceGuardName" size="medium" placeholder="请输入门禁名称"></el-input>
          </el-form-item>
          <el-form-item label="进向连接区域" prop="enterPartition">
            <el-select v-model="entranceGuardAddForm.enterPartition" size="medium" placeholder="请输入进向连接区域">
              <!-- <el-option v-for="item in deptList"
                       :key="item.deptId"
                       :label="item.deptName"
                       :value="item.deptId">
            </el-option> -->
            </el-select>
          </el-form-item>
          <el-form-item label="出向连接区域" prop="exitrPartition">
            <el-select v-model="entranceGuardAddForm.enterPartition" size="medium" placeholder="请输入出向连接区域"></el-select>
          </el-form-item>
      </el-form>
    </div>
    <div class="btn-container" >
      <el-button type="primary" class="bottom-btn" size="large" @click="handleAdd">添加门禁</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "EntranceGuardAddForm",
    props: {
      showDialog: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        visible : this.showDialog,
        title: "新增门禁",
        entranceGuardAddForm:{

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
        this.$refs['entranceGuardAddForm'].resetFields()
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
  .el-input__inner{
    height: 2em;
    }
  .entranceGuard-add-content{
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
  .el-form-item__label{
    width: 130px;
  }
  .el-form-item__label{
    font-size: 18px;
    font-weight: bold;
  }
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