<template>
  <div class="operateRecord_container">
    <div class="operateRecord_content">
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
            ref="operateRecordTable"
            :data="tableData"
            header-row-style="background-color:#CCCCCC; color:#000000"
          >
            <el-table-column
              label="操作时间"
              prop="d_optTime"
              min-width="25%"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="操作类型"
              prop="d_optType"
              min-width="25%"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="返回代码"
              prop="d_optResultCode"
              min-width="25%"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="返回信息"
              prop="d_optResultMsg"
              min-width="25%"
              align="center"
            >
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
import { GET_FACEDEVICE_OPT_RECORD } from "../../../api";

export default {
  name: "OperateRecordTable",
  props:{
    selectedOptDeviceID:{
      type: String,
      default:""
    }
  },
  data() {
    return {
      deviceID : "",
      pagination: {
        total:0,
        numOfSinglePage:10,
        currentPage: 1,
      },
      tableData: []
    };
  },
  methods: {
    getCurrentPage(val){
      this.pagination.currentPage = val;
      this.getFaceDeviceRecord(val);
    },
    getFaceDeviceRecord(val) {
      let params = {
       d_device_id : this.deviceID,
       currentPage : val 
      }
      this.$post(GET_FACEDEVICE_OPT_RECORD, params).then(res=>{
        if(res.code === '1'){
          if(res.data){
            this.tableData = res.data.recordList;
            this.pagination.currentPage = res.data.currentPage;
            this.pagination.total = res.data.total;
            this.pagination.numOfSinglePage = res.data.numOfSinglePage;
          }
        }
      }).catch(err=>{
        console.log(err);
      })
    },
    handleReturn() {
      this.$router.push({ path: "/FacialRecDevice" });
    }
  },
  mounted(){
    if(this.$route.query.deviceId){
      console.log("YYY")
      this.deviceID = this.$router.query.deviceId;
    }
    this.getFaceDeviceRecord(1);
  },
}
</script>

<style scoped></style>
