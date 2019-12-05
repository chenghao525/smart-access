<template>
  <div class="faceRecDevPerson_container">
    <div class="faceRecDevPerson_content">
      <div style="padding: 0 100px;">
        <div class="top-btn-container">
          <el-button
            class="top-btn"
            type="primary"
            size="large"
            @click="handleReturn"
            >返回</el-button
          >
        </div>
        <div>
          <el-table
            class="el-table-container"
            ref="faceDevPersonTable"
            :data="tableData"
            :header-cell-style="{
              'background-color': '#CCCCCC',
              color: '#000000'
            }"
          >
            <el-table-column label="录入时间" prop="d_addTime" align="center">
            </el-table-column>
            <el-table-column label="姓名" prop="d_name" align="center">
            </el-table-column>
            <el-table-column label="工号" prop="d_workerId" align="center">
            </el-table-column>
          </el-table>
          <CustomPagination
            :pagination="pagination"
            @currentPageChange="getCurrentPage"
          ></CustomPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {GET_FACEDEVICE_PERSON} from '../../../api'
import CustomPagination from '../../../custom_components/CustomPagination'

export default {
  name: "FaceRecDevPersonTable",
  data() {
    return {
      tableData: [],
      deviceIp:"",
      pagination: {
        currentPage:1,
        total:0,
        numOfSinglePages:10
      }
    };
  },
  methods: {
    initData(){
      this.getFaceDeviceRecPerson(1);
    },
    handleReturn() {
      this.$router.push({ path: "/FacialRecDevice" });
    },
    getCurrentPage(val){
      this.pagination.currentPage = val;
      this.getFaceDeviceRecPerson(val)
    },
    getFaceDeviceRecPerson(val){
      let params = {
        d_device_address:this.deviceIp,
        currentPage:val
      }
      this.$post(GET_FACEDEVICE_PERSON,params).then(res=>{
        if(res.code === '1'){
          if(res.data){
            this.tableData = res.data.personList;
            this.pagination.total = res.data.total;
            this.pagination.currentPage = res.data.currentPage;
            this.pagination.numOfSinglePages = res.data.numOfSinglePages;
          }
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  mounted(){
    this.initData();
    this.deviceIp = this.$route.query.deviceIp;
  }
};
</script>

<style scoped></style>
