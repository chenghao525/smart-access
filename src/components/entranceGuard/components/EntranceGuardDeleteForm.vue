<template>
  <el-dialog class="entranceGuard-delete-container"
             :visible.sync="visible"
             :title="title"
             width="600px">
    <div class="entranceGuard-delete-content">
      <h2>是否确认删除？</h2>
    </div>
    <div class="btn-container" >
      <el-button type="primary" class="bottom-btn" size="large" @click="handleCancel">取消</el-button>
      <el-button type="primary" class="bottom-btn" size="large" @click="handleDelete">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {DELETE_ENTRANCEGUARD} from '../../../api'


  export default {
    name: "EntranceGuardDeleteForm",
    props: {
      showDialog: {
        type: Boolean,
        default: false
      },
      selectedEntranceGuard:{
        type: String,
        default:""
      }
    },
    data() {
      return {
        visible : this.showDialog,
        title: "删除门禁",
        deletedEntranceGuardID:""
      }
    },
    methods:{
       /**
       * 关闭弹框
       */
      handleCancel() {
        this.visible = false,
        this.$emit('close')
      },
      handleDelete(){
        console.log("Delete");
        if(this.deletedEntranceGuardID === ""){
          this.$message("请选择需要删除的门禁")
        }
         let params = {
          entranceGuardId: this.deletedEntranceGuardID,
        }
        this.$post(DELETE_ENTRANCEGUARD,params).then(res=>{
          if(res.code === '1'){
            console.log("删除成功！");
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
      },
      selectedEntranceGuard(val,oldVal){
        this.deletedEntranceGuardID = val;
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