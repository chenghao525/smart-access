<template>
  <div class="faceRecDevPerson_container">
    <div class="faceRecDevPerson_content">
      <div style="padding: 0 100px;">
        <div class="top-btn-container">
            <el-button class="top-btn" type="primary" size="large" @click="handleReturn">返回</el-button>
        </div>
         <div>
          <el-table class="el-table-container"
                    ref="faceDevPersonTable"
                    :data="tableData"
                     header-row-style="background-color:#CCCCCC; color:#000000">
          <el-table-column label="录入时间" prop="d_addTime" align="center">
          </el-table-column>
          <el-table-column label="姓名" prop="d_name" align="center">
          </el-table-column>
          <el-table-column label="工号" prop="d_workerId" align="center">
          </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name:"FaceRecDevPersonTable",
  data(){
    return{
     tableData:[
       {
         d_addTime:"2019.11.11. 08：28",
         d_name: "0001",
         d_workerId:'000000001'
       },
       {
         d_addTime:"2019.11.11. 08：28",
         d_name: "0001",
         d_workerId:'000000001'
       },
       {
         d_addTime:"2019.11.11. 08：28",
         d_name: "0001",
         d_workerId:'000000001'
       },
       {
         d_addTime:"2019.11.11. 08：28",
         d_name: "0001",
         d_workerId:'000000001'
       },
       {
         d_addTime:"2019.11.11. 08：28",
         d_name: "0001",
         d_workerId:'000000001'
       },
       {
         d_addTime:"2019.11.11. 08：28",
         d_name: "0001",
         d_workerId:'000000001'
       },
       {
         d_addTime:"2019.11.11. 08：28",
         d_name: "0001",
         d_workerId:'000000001'
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
