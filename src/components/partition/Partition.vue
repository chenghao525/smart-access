<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="partition_container">
    <div class="partition_content">
      <div style="padding: 0 100px;">
        <div class="top-btn-container">
          <el-button class="top-btn" type="primary" size="large" @click="handleDelete">分区删除</el-button>
          <el-button class="top-btn" type="primary" size="large" @click="handleAdd">分区增加</el-button>
        </div>
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
              <el-radio :label="scope.$index" v-model="selectedPartition"
              @change.native="getTemplateRow(scope.$index,scope.row)" style="margin-left: 10px;">&nbsp;</el-radio>
            </template>
          </el-table-column>
          <el-table-column label="分区名称" prop="partitionName">
          </el-table-column>
          <el-table-column label="分区编号" prop="partitionNum">
          </el-table-column>
          <el-table-column label="分区下包含的门禁" prop="partitionEntranceGuard">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "Partition",
    data() {
      return {
        tableData: [
          {
          partitionName : "ss",
          partitionNum : "001",
          partitionEntranceGuard : "002"
          },
          {
          partitionName : "aa",
          partitionNum : "023",
          partitionEntranceGuard : "002"
          },
          {
          partitionName : "bb",
          partitionNum : "031",
          partitionEntranceGuard : "002"
          }
        ],
        selectedPartition: false
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
      handleDelete(){

      },
      handleAdd(){

      }
    },
    mounted() {
      this.initData();
    }
  }

</script>

<style scoped>
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
