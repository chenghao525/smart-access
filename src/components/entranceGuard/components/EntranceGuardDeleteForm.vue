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
  export default {
    name: "EntranceGuardDeleteForm",
    props: {
      showDialog: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        visible : this.showDialog,
        title: "删除门禁",
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
 .btn-container >>> .bottom-btn{
    width: 8em !important;
    border-radius: 8px !important;
    margin: 0px 10px;
  }
</style>