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
            <el-select v-model="entranceGuardAddForm.exitrPartition" size="medium" placeholder="请输入出向连接区域"></el-select>
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
          entranceGuardName:"",
          enterPartition:"",
          exitrPartition:""
        },
        rules: {
          entranceGuardName: [
            {required: true, message: '请输入门禁名称', trigger: 'blur'}
          ],
          enterPartition: [
            {required: true, message: '请输入进向连接区域', trigger: 'blur'}
          ],
          exitrPartition: [
            {required: true, message: '请输入出向连接区域', trigger: 'blur'}
          ],
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
        let params = {
          entranceGuardName:""
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
.entranceGuard-add-content{
  display: flex;
  justify-content: center;
}
</style>