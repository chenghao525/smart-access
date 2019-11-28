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
          <el-form-item label="门禁名称" prop="entranceGuardName">
            <el-input v-model="entranceGuardEditForm.entranceGuardName" size="medium" placeholder="请输入门禁名称"></el-input>
          </el-form-item>
          <el-form-item label="进向连接区域" prop="enterPartition">
            <el-select v-model="entranceGuardEditForm.enterPartition" size="medium" placeholder="请输入进向连接区域">
              <!-- <el-option v-for="item in deptList"
                       :key="item.deptId"
                       :label="item.deptName"
                       :value="item.deptId">
            </el-option> -->
            </el-select>
          </el-form-item>
          <el-form-item label="出向连接区域" prop="exitrPartition">
            <el-select v-model="entranceGuardEditForm.enterPartition" size="medium" placeholder="请输入出向连接区域"></el-select>
          </el-form-item>
      </el-form>
    </div>
    <div class="btn-container" >
      <el-button type="primary" class="bottom-btn" size="large" @click="handleEdit">门禁修改</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "EntranceGuardEditForm",
    props: {
      showDialog: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        visible : this.showDialog,
        title: "修改门禁",
        entranceGuardEditForm:{

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
        console.log("edit");
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
  .entranceGuard-edit-content{
    display: flex;
    justify-content: center;
  }
</style>