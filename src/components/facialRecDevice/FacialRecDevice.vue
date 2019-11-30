<template>
  <div class="facialRecDevice_container">
    <div class="facialRecDevice_content">
      <div style="padding: 0 100px;">
      <el-row class="above-row">
      <el-col :span="18">
      <div class="search-form">
      <el-form ref="form"
              :model="form"
              label-position="right"
              label-width="auto"
              :rules="rules"
              :inline="true">
        <el-form-item label="SN:"
                      prop="SN"
                      >
          <el-input v-model="form.SN"
                    placeholder="请输入关键字"
                    @input="inputSN"
                    :disabled="disableSNSearch">
          </el-input>
        </el-form-item>
        <el-form-item label="IP:"
                      prop="IP"
                      >
          <el-input v-model="form.IP"
                    placeholder="请输入关键字"
                    @input="inputIP"
                    :disabled="disableIPSearch">
          </el-input>
        </el-form-item>
        <el-form-item label="所属门禁:"
                      prop="entranceGuard"
                      >
          <el-input v-model="form.entranceGuard"
                    placeholder="请输入关键字"
                    @input="inputName"
                    :disabled="disableNameSearch">
          </el-input>
        </el-form-item>
        <el-button class="search_btn" type="primary" size="large" @click="handleSearch(form)" style="margin-left: 38px">查询</el-button>
      </el-form>
      </div>
      </el-col>
      <el-col :span="6">
       <div class="top-btn-container">
            <el-button class="top-btn" type="primary" size="large" @click="handleDelete">设备删除</el-button>
            <el-button class="top-btn" type="primary" size="large" @click="handleAdd">设备增加</el-button>
        </div>
      </el-col>
      </el-row>

      <div>
        <el-table class="el-table-container"
                  ref="facialRecDeviceTable"
                  :data="tableData"
                   header-row-style="background-color:#CCCCCC; color:#000000">
          <el-table-column label="选择" min-width="10%" align="center" header-align="center">
            <template slot-scope="scope">
              <el-radio :label="scope.$index" v-model="selectedDevice"
              @change.native="getDeviceID(scope.row.d_device_id)" style="margin-left: 10px;">&nbsp;</el-radio>
            </template>
          </el-table-column>
          <el-table-column label="SN" prop="d_device_id" min-width="10%" align="center">
          </el-table-column>
          <el-table-column label="方向" prop="d_device_direction" min-width="10%" align="center">
          </el-table-column>
          <el-table-column label="IP" prop="d_device_address" min-width="10%" align="center">
          </el-table-column>
          <el-table-column label="固件版本" prop="d_device_firmwareversion" min-width="10%" align="center">
          </el-table-column>
          <el-table-column label="型号" prop="d_device_model" min-width="10%" align="center">
          </el-table-column>
          <el-table-column label="品牌" prop="d_device_brand" min-width="10%" align="center">
          </el-table-column>
          <el-table-column label="操作" prop="" min-width="30%" align="center">
            <template slot-scope="scope">
  　　　　　　<el-button type="info" @click="operateRecord(scope.row.d_device_id)">操作记录</el-button>
  　　　　　　<el-button type="info" @click="faceRecDevPerson(scope.row.d_device_id)">已录入人员</el-button>
　　　　   </template>
          </el-table-column>
        </el-table>
        <CustomPagination :pagination="pagination" @currentPageChange="getCurrentPage"></CustomPagination>
      </div>
       <FacialDeviceAddForm :show-dialog="showFacialDeviceAddDialog"
                        @close="hideFacialDeviceAddDialog"
                        @refresh="getDeviceList(1)"
      ></FacialDeviceAddForm>
      <FacialDeviceDeleteForm :show-dialog="showFacialDeviceDeleteDialog"
                        @close="hideFacialDeviceDeleteDialog"
                        @refresh="getDeviceList(1)"
                        :selectedDeleteDeviceID="seletedDeleteDeviceID"
      ></FacialDeviceDeleteForm>
    </div>
  </div>
  </div>
</template>


<script>
  import FacialDeviceAddForm from './components/FacialDeviceAddForm'
  import FacialDeviceDeleteForm from './components/FacialDeviceDeleteForm'
  import OperateRecordTable from './components/OperateRecordTable'
  import FaceRecDevPerson from './components/FaceRecDevPersonTable'
  import CustomPagination from '../../custom_components/CustomPagination'
  import {GET_FACEDEVICEINFO,GET_FACEDEVICEINFO_IP,GET_FACEDEVICEINFO_SN,GET_FACEDEVICEINFO_GUARD} from '../../api'

  export default {
    name: "FacialRecDevice",
    components: {
     FacialDeviceAddForm,
     FacialDeviceDeleteForm,
     OperateRecordTable,
     FaceRecDevPerson,
     CustomPagination
    },
    data() {
      return {
        showFacialDeviceAddDialog:false,
        showFacialDeviceDeleteDialog:false,
        disableSNSearch:false,
        disableIPSearch:false,
        disableNameSearch:false,
        selectedDevice:"",
        seletedDeleteDeviceID:"",
        tableData: [
          {
            "d_device_id":"1",
            "d_device_address":"34",
            "d_device_brand":"er",
            "d_device_model":"654",
            "d_device_firmwareversion":"123",
            "d_device_direction":"22"
          }
        ],
        form: {
          SN:'',
          IP:'',
          entranceGuard:''
        },
        pagination:{
          currentPage:1,
          total:0,
          numOfSinglePages:10
        },
        rules: {},
      }
    },
    methods:{
       /**
       * 获取数据
       */
      initData() {
        this.getDeviceList(this.pagination.currentPage);
      },
      /**
       * 点击重载按钮后重载数据
       * @param val
       */
      clickedRefresh(val) {
      },
       /**
       * 获取搜索框状态
       */
      inputSN(e){
          if(e.length !== 0){
            this.disableIPSearch = true;
            this.disableNameSearch = true;
          }
          else{
            this.disableIPSearch = false;
            this.disableNameSearch = false;
          }
      },
      inputIP(e){
        if(e.length !== 0){
            this.disableSNSearch = true;
            this.disableNameSearch = true;
          }
          else{
            this.disableSNSearch = false;
            this.disableNameSearch = false;
          }
      },
      inputName(e){
        if(e.length !== 0){
            this.disableIPSearch = true;
            this.disableSNSearch = true;
          }
          else{
            this.disableIPSearch = false;
            this.disableSNSearch = false;
          } 
      },
      /**
       * 获取表单数据
       */
      getDeviceList(currentPage){
       this.tableData=[]
        const params = {
          currentPage: this.pagination.currentPage
        }
        this.$post(GET_FACEDEVICEINFO, params).then(res => {
          if (res.code === '1') {
            if(res.data){
              this.tableData = res.data.devList
              this.pagination.total = res.data.totalCount
              this.pagination.numOfSinglePages = res.data.numOfSinglePages
              this.pagination.currentPage = res.data.currentPage
            }      
          }
        }).catch(err => {
          console.log(err)
        })
      }, 
      /**
       * 获取操作记录
       */
      operateRecord(deviceID){
        this.$router.push({path: '/FacialRecDevice/OperateRecordTable', query: {deviceID: deviceID}})
      },
      /**
       * 获取已录入人员记录
       */
      faceRecDevPerson(deviceID){
        this.$router.push({path: '/FacialRecDevice/FaceRecDevPersonTable', query: {deviceID: deviceID}})
      },
      getCurrentPage(val){
        this.pagination.currentPage = val;
        this.getDeviceList(val)
      },
       /**
       * 获取选中行设备id
       */
      getDeviceID(deviceID){
        this.seletedDeleteDeviceID = deviceID
      },
      handleSearch(form){
      },
      handleAdd(){
        this.showFacialDeviceAddDialog = true
      },
      handleDelete(){
        this.showFacialDeviceDeleteDialog = true
      },
      hideFacialDeviceAddDialog(){
        this.showFacialDeviceAddDialog = false
      },
      hideFacialDeviceDeleteDialog(){
        this.showFacialDeviceDeleteDialog = false
      },
    },
    mounted() {
      this.initData();
      this.$emit('hdindex',3)
    }
  }
</script>


<style scoped>
.el-form-item{
  margin-bottom: 0px !important;
}
 .search-form{
    padding: 60px 0 !important;
  }
</style>