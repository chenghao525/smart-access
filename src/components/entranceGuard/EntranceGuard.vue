<template>
  <div class="entranceGuard_container">
    <div class="entranceGuard_content">
      <div style="padding: 0 100px;">
      <el-row class="above-row">
      <el-col :span="12">
      <div class="search-form">
        <el-form ref="form"
              :model="form"
              label-position="right"
              label-width="120px"
              :rules="rules"
              :inline="true"
              style="margin:50px 0px;">
        <el-form-item label="门禁名称:"
                      prop="entranceGuardName"
                      >
          <el-input v-model="form.entranceGuardName"
                    placeholder="请填写门禁名"
                    class="search-input">
          </el-input>
        </el-form-item>
        <el-button class="search_btn" type="primary" size="large" @click="handleSearch(form)" style="margin-left: 38px">查询</el-button>
      </el-form>
      </div>
      </el-col>
      <el-col :span="12">
       <div class="top-btn-container">
            <el-button class="top-btn" type="primary" size="large" @click="handleEdit" style="margin-left: 78px">门禁修改</el-button>
            <el-button class="top-btn" type="primary" size="large" @click="handleDelete">门禁删除</el-button>
            <el-button class="top-btn" type="primary" size="large" @click="handleAdd">门禁增加</el-button>
        </div>
      </el-col>
      </el-row>

      <div>
        <el-table class="el-table-container"
                  ref="filterTable"
                  highlight-current-row
                  :data="tableData">
          <!-- <el-table-column type="index" 
                           label="序号"
                           header-align="center"
                           align="center">
          </el-table-column> -->
          <el-table-column label="选择" min-width="10%" align="center" header-align="center">
            <template slot-scope="scope">
              <el-radio :label="scope.$index" v-model="selectedEntranceGuard"
              @change.native="getTemplateRow(scope.$index,scope.row)" style="margin-left: 10px;">&nbsp;</el-radio>
            </template>
          </el-table-column>
          <el-table-column label="门禁ID" prop="entranceGuardId" min-width="15%" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="进向连接区域" prop="enterPartition" min-width="15%" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="出向连接区域" prop="exitPartition" min-width="15%" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="门禁名称" prop="entranceGuardName" min-width="15%" align="center" show-overflow-toolti>
          </el-table-column>
          <el-table-column label="操作" prop="partitionEntranceGuard" min-width="30%" align="center">
          <template slot-scope="scope">
  　　　　　　<el-button type="info" @click="deviceInfoEdit(scope.row.entranceGuardId)">设备信息编辑</el-button>
  　　　　　　<el-button type="info" @click="facialRecDevice(scope.row.entranceGuardId)">人脸识别设备</el-button>
　　　　    </template>
          </el-table-column>
        </el-table>
      </div>
       <EntranceGuardEditForm :show-dialog="showEntranceGuardEditDialog"
                        @close="hideEntranceGuardEditDialog"
      ></EntranceGuardEditForm>
      <EntranceGuardAddForm :show-dialog="showEntranceGuardAddDialog"
                        @close="hideEntranceGuardAddDialog"
      ></EntranceGuardAddForm>
      <EntranceGuardDeleteForm :show-dialog="showEntranceGuardDeleteDialog"
                        @close="hideEntranceGuardDeleteDialog"
      ></EntranceGuardDeleteForm>
    </div>
  </div>
  </div>
</template>


<script>
  import EntranceGuardAddForm from './components/EntranceGuardAddForm'
  import EntranceGuardEditForm from './components/EntranceGuardEditForm'
  import EntranceGuardDeleteForm from './components/EntranceGuardDeleteForm'

  export default {
    name: "EntranceGuard",
    components: {
      EntranceGuardAddForm,
      EntranceGuardEditForm,
      EntranceGuardDeleteForm
    },
    data() {
      return {
        showEntranceGuardEditDialog:false,
        showEntranceGuardAddDialog:false,
        showEntranceGuardDeleteDialog:false,
        tableData: [
          {
          entranceGuardId:'1',
          enterPartition: 'cc',
          exitPartition:'dd',
          entranceGuardName:'hgh'
          }
        ],
        form: {
          entranceGuardName:''
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
      deviceInfoEdit(entranceGuardId){
        this.$router.push({path: '/EntranceGuard/DeviceInfoEdit', query: {entranceGuardId: entranceGuardId}})
      },
      handleSearch(form){
      },
      handleEdit(){
        this.showEntranceGuardEditDialog = true
      },
      handleDelete(){
        this.showEntranceGuardDeleteDialog = true
      },
      handleAdd(){
        this.showEntranceGuardAddDialog = true
      },
      hideEntranceGuardEditDialog(){
        this.showEntranceGuardEditDialog = false
      },
      hideEntranceGuardAddDialog(){
        this.showEntranceGuardAddDialog = false
      },
      hideEntranceGuardDeleteDialog(){
        this.showEntranceGuardDeleteDialog = false
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
    padding: 50px 0;
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