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
          <el-form-item label="分区编号" prop="partitionNum">
            <el-input v-model="partitionAddForm.partitionNum" size="medium" placeholder="请输入分区编号"></el-input>
          </el-form-item>
      </el-form>
    </div>
    <div class="btn-container" >
      <!-- <el-button type="primary" class="bottom-btn" size="large" @click="handleCancel()">取消</el-button> -->
      <el-button type="primary" class="bottom-btn" size="large" @click="handleSave()">分区添加</el-button>
    </div>
  </el-dialog>
</template>

<script>
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
          partitionNum: "",
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
