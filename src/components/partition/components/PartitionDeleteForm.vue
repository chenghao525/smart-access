<template>
  <el-dialog class="partition-delete-container"
             :visible.sync="visible"
             :title="title"
             width="600px">
    <div class="partition-delete-content">
      <h2>是否确认删除？</h2>
    </div>
    <div class="btn-container" >
      <el-button type="primary" class="bottom-btn" size="large" @click="handleCancel">取消</el-button>
      <el-button type="primary" class="bottom-btn" size="large" @click="handleDelete">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {DELETE_PARTITION} from '../../../api'

  export default {
    name: "partitionDeleteForm",
    props: {
      showDialog: {
        type: Boolean,
        default: false
      },
      seletedPartitionID: {
        type: String,
        default:""
      }
    },
    data() {
      return {
        visible : this.showDialog,
        deletePartitionID: this.seletedPartitionID,
        title: "删除分区",
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
        if(this.deletePartitionID === ""){
          this.$message("请选择需要删除的分区")
          return false
        }
        let params = {
          partitionId: this.deletePartitionID,
        }
        this.$post(DELETE_PARTITION,params).then(res=>{
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
      seletedPartitionID(val, oldVal){
        console.log("PID!!",val)
        this.deletePartitionID = val
      }
    }
  }
</script>

<style scoped>
  .partition-delete-content{
    display: flex;
    justify-content: center;
  }
 .bottom-btn{
    width: 8em;
    height: 3em;
    background-color: #37C6C0;
    border: transparent;
    border-radius: 8px;
    margin: 0px 10px;
  }
  .bottom-btn:hover{
    color: #FFFFFF;
    background: #FFCC00;
  }
</style>