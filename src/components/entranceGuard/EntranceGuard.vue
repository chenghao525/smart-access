<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="partition_container">
    <div class="partition_content">
      <el-form ref="form"
              :model="form"
              label-position="right"
              label-width="120px"
              :rules="rules"
              :inline="true"
              style="margin-top:30px;">
        <el-form-item label="门禁名称:"
                      prop="entranceGuardName"
                      >
          <el-input v-model="form.entranceGuardName"
                    placeholder="请填写门禁名">
          </el-input>
        </el-form-item>
        <el-button class="search_btn" type="primary" size="medium" @click="handleSearch(form)" style="margin-left: 78px">查询</el-button>
        <el-button class="top_btn" type="primary" size="medium" @click="handleEdit()" style="margin-left: 78px">门禁修改</el-button>
        <el-button class="top_btn" type="primary" size="medium" @click="handleDelete()" style="margin-left: 38px">门禁删除</el-button>
         <el-button class="top_btn" type="primary" size="medium" @click="handleAdd()" style="margin-left: 38px">门禁增加</el-button>
      </el-form>

      <div style="padding: 0 5px;">
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
    </div>
  </div>
</template>


<script>
  export default {
    name: "EntranceGuard",
    data() {
      return {
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
        this.initData()
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
    },
    handleSearch(form){

    },
    handleEdit(){

    },
    handleDelete(){

    },
    handleAdd(){

    },
    mounted() {
      this.initData();
    }
  }

</script>


