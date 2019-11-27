<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="facialRecDevice_container">
    <div class="facialRecDevice_content">
      <div style="padding: 0 100px;">
      <el-row class="above-row">
      <el-col :span="18">
      <el-form ref="form"
              :model="form"
              label-position="right"
              label-width="auto"
              :rules="rules"
              :inline="true"
              style="margin-top:30px;">
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
                  fixed
                  ref="filterTable"
                  :data="tableData">
          <!-- <el-table-column type="index" 
                           label="序号"
                           header-align="center"
                           align="center">
          </el-table-column> -->
          <el-table-column label="选择" width="60px" align="center" header-align="center">
            <template slot-scope="scope">
              <el-radio :label="scope.$index" v-model="selectedEntranceGuard"
              @change.native="getTemplateRow(scope.$index,scope.row)" style="margin-left: 10px;">&nbsp;</el-radio>
            </template>
          </el-table-column>
          <el-table-column label="SN" prop="d_device_id">
          </el-table-column>
          <el-table-column label="方向" prop="d_device_direction">
          </el-table-column>
          <el-table-column label="IP" prop="d_device_address">
          </el-table-column>
          <el-table-column label="固件版本" prop="d_device_firmwareversion">
          </el-table-column>
          <el-table-column label="型号" prop="d_device_model">
          </el-table-column>
          <el-table-column label="品牌" prop="d_device_brand">
          </el-table-column>
          <el-table-column label="操作" prop="">
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

  export default {
    name: "FacialRecDevice",
    components: {
     FacialDeviceAddForm,
     FacialDeviceDeleteForm
    },
    data() {
      return {
        showFacialDeviceAddDialog:false,
        showFacialDeviceDeleteDialog:false,
        tableData: [],
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
  .search_btn{
    height: 40px;
    width: 120px;
    font-size: 15px;
    background-color: #37C6C0 !important;
    border: #37C6C0 !important;
  }
  .top-btn-container{
    display: flex;
    justify-content:flex-end;
    padding: 30px 0;
  }
  .top-btn{
    font-size: 15px;
    background-color: #37C6C0 !important;
    border: #37C6C0 !important;
    border-radius: 60px;
    margin: 0 1em;
    height: 40px;
    width: 120px;
  }
</style>