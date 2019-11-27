<template>
  <el-dialog class="partition-add-container"
             :visible="visible"
             :title="title"
             width="800px">
    <div class="partition-add-content">
      <el-form class="form-container"
               label-position="right"
               label-width="160px"
               :model="partitionAddForm"
               ref="partitionAddForm"
               :rules="rules">
          <el-form-item label="分区名称" prop="partitionName">
            <el-input v-model="partitionAddForm.partitionName" size="small" placeholder="请输入分区名称"></el-input>
          </el-form-item>
          <el-form-item label="分区编号" prop="partitionNum">
            <el-input v-model="partitionAddForm.partitionNum" size="small" placeholder="请输入分区编号"></el-input>
          </el-form-item>
      </el-form>
    </div>
    <div class="btn_container" >
      <el-button type="primary" size="small" @click="handleCancel('userForm')">取消</el-button>
      <el-button type="primary" class="confirm" size="small" @click="handleSave('userForm')">保存</el-button>
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
        this.$emit('closeDialog')
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