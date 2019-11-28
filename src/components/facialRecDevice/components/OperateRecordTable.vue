<template>
  <div class="operateRecord_container">
    <div class="operateRecord_content">
      <div style="padding: 0 100px;">
        <div class="top-btn-container">
            <el-button class="top-btn" type="primary" size="large" @click="handleReturn">返回</el-button>
        </div>
        <div>
          <el-table class="el-table-container"
                    ref="operateRecordTable"
                    :data="tableData"
                     header-row-style="background-color:#CCCCCC; color:#000000">
          <el-table-column label="操作时间" prop="d_optTime" min-width="25%" align="center">
          </el-table-column>
          <el-table-column label="操作类型" prop="d_optType" min-width="25%" align="center">
          </el-table-column>
          <el-table-column label="返回代码" prop="d_optResultCode" min-width="25%" align="center">
          </el-table-column>
          <el-table-column label="返回信息" prop="d_optResultMsg" min-width="25%" align="center">
          </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name:"OperateRecordTable",
  data(){
    return{
     tableData:[
      {
        d_optTime:"1231112",
        d_optType:"000000001",
        d_optResultCode:"1/-1",
        d_optResultMsg:"新增xxx成功/新增xxx失败"
      },
       {
        d_optTime:"1231112",
        d_optType:"000000001",
        d_optResultCode:"1/-1",
        d_optResultMsg:"新增xxx成功/新增xxx失败"
      },
       {
        d_optTime:"1231112",
        d_optType:"000000001",
        d_optResultCode:"1/-1",
        d_optResultMsg:"新增xxx成功/新增xxx失败"
      },
       {
        d_optTime:"1231112",
        d_optType:"000000001",
        d_optResultCode:"1/-1",
        d_optResultMsg:"新增xxx成功/新增xxx失败"
      },
       {
        d_optTime:"1231112",
        d_optType:"000000001",
        d_optResultCode:"1/-1",
        d_optResultMsg:"新增xxx成功/新增xxx失败"
      },
     ]
    }
  },
  methods:{
    handleReturn(){
        this.$router.push({path:'/FacialRecDevice'})
    },
  }
}
</script>


<style scoped>
 
</style>
