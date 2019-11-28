<template>
  <el-dialog class="partition-add-container"
             :visible.sync="visible"
             :title="title"
             width="600px">
    <div class="partition-add-content">
      <el-form class="form-container"
               label-position="right"
               :model="partitionAddForm"
               ref="partitionAddForm"
               :rules="rules">
          <el-form-item label="分区名称" prop="partitionName">
            <el-input v-model="partitionAddForm.partitionName" size="medium" placeholder="请输入分区名称"></el-input>
          </el-form-item>
          <el-form-item label="分区编号" prop="partitionId">
            <el-input v-model="partitionAddForm.partitionId" size="medium" placeholder="请输入分区编号"></el-input>
          </el-form-item>
      </el-form>
    </div>
    <div class="btn-container" >
      <el-button type="primary" class="bottom-btn" size="large" @click="handleSave()">分区添加</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {ADD_PARTITION, DELETE_PARTITION} from '../../../api'

  export default {
    name: "PartitionAddForm",
    props: {
      showDialog: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        visible : this.showDialog,
        title: "新增分区",
        partitionAddForm:{
          partitionName: "",
          partitionId: "",
        },
        rules: {
          partitionName: [
            {required: true, message: '请输入分区名称', trigger: 'blur'}
          ],
          partitionId: [
            {required: true, message: '请输入分区编号', trigger: 'blur'}
          ]
        }
      }
    },
    methods:{
      /**
       * 表单提交按钮监听
       */
      handleSave() {
        this.$refs['partitionAddForm'].validate((valid) => {
          if (valid) {
            this.submitForm();
          } else {
            this.$message.warning('校验失败，请务必填写*标记内容')
            return false
          }
        })
      },
       /**
       * 表单提交
       */
      submitForm(){
        let params = {
          partitionId: this.partitionAddForm.partitionId,
          partitionName: this.partitionAddForm.partitionName
        }
        this.$post(ADD_PARTITION,params).then(res=>{
          if(res.code === '1'){
            console.log("添加成功！");
            this.$emit('refresh');
            this.handleCancel();
          }
        }).catch(err=>{
          console.log(err);
        });
      },
       /**
       * 关闭弹框
       */
      handleCancel() {
        this.$refs['partitionAddForm'].resetFields()
        this.visible = false,
        this.$emit('close')
      },
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
  .partition-add-content{
    display: flex;
    justify-content: center;
  }
</style>
