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
                    placeholder="请输入关键字">
          </el-input>
        </el-form-item>
        <el-form-item label="IP:"
                      prop="IP"
                      >
          <el-input v-model="form.IP"
                    placeholder="请输入关键字">
          </el-input>
        </el-form-item>
        <el-form-item label="所属门禁:"
                      prop="entranceGuard"
                      >
          <el-input v-model="form.entranceGuard"
                    placeholder="请输入关键字">
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
              <el-radio :label="scope.$index" v-model="selectedEntranceGuard"
              @change.native="getTemplateRow(scope.$index,scope.row)" style="margin-left: 10px;">&nbsp;</el-radio>
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
      </div>
       <FacialDeviceAddForm :show-dialog="showFacialDeviceAddDialog"
                        @close="hideFacialDeviceAddDialog"
      ></FacialDeviceAddForm>
      <FacialDeviceDeleteForm :show-dialog="showFacialDeviceDeleteDialog"
                        @close="hideFacialDeviceDeleteDialog"
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

  export default {
    name: "FacialRecDevice",
    components: {
     FacialDeviceAddForm,
     FacialDeviceDeleteForm,
     OperateRecordTable,
     FaceRecDevPerson
    },
    data() {
      return {
        showFacialDeviceAddDialog:false,
        showFacialDeviceDeleteDialog:false,
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
        rules: {},
      }
    },
    methods:{
       /**
       * 获取数据
       */
      initData() {
      },
      /**
       * 点击重载按钮后重载数据
       * @param val
       */
      clickedRefresh(val) {
      },
      /**
       * 获取表单数据
       */
      getPartitionList(){
      //  this.tableData=[]
      //   const params = {
      //     projectCode: JSON.parse(localStorage.getItem('projectInfo')).projectCode,
      //     memberNo:this.$route.query.memberNo
      //   }
      //   this.$post(ATTENDANCE_ALONE_LIST, params).then(res => {
      //     if (res.code === 200) {
      //       if(res.data){
      //         this.tableData = res.data.attendanceStatisBeans
      //         this.pagination.total = res.data.totalCount
      //         this.pagination.pageSize = res.data.pageSize
      //         this.pagination.currentPage = res.data.pageNum
      //       }
      //       // console.log(res)
            
      //     }
      //   }).catch(err => {
      //     console.log(err)
      //   })
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