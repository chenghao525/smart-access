<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="entranceGuard_container">
    <div class="entranceGuard_content">
      <div style="padding: 0 100px;">
      <el-row class="above-row">
      <el-col :span="12">
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
                    placeholder="请填写门禁名">
          </el-input>
        </el-form-item>
        <el-button class="search_btn" type="primary" size="large" @click="handleSearch(form)" style="margin-left: 38px">查询</el-button>
      </el-form>
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
          <el-table-column label="门禁ID" prop="partitionName">
          </el-table-column>
          <el-table-column label="进向连接区域" prop="patitionNum">
          </el-table-column>
          <el-table-column label="出向连接区域" prop="partitionEntranceGuard">
          </el-table-column>
          <el-table-column label="门禁名称" prop="partitionEntranceGuard">
          </el-table-column>
          <el-table-column label="操作" prop="partitionEntranceGuard">
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
        tableData: [],
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

<style>
  .el-input__inner{
    height: 3em !important;
  }
</style>

<style scoped>
  .el-input__inner{
    height: 3em !important;
  }
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