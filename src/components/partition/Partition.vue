<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="partition_container">
    <div class="partition_content">
      <div style="padding: 0 100px;">
        <div class="top-btn-container">
          <el-button class="top-btn" type="primary" size="large" @click="handleDelete">分区删除</el-button>
          <el-button class="top-btn" type="primary" size="large" @click="handleAdd">分区增加</el-button>
        </div>
        <el-table class="el-table-container"
                  ref="filterTable"
                  :data="tableData">
          <!-- <el-table-column type="index" 
                           label="序号"
                           header-align="center"
                           align="center">
          </el-table-column> -->
          <el-table-column label="选择" min-width="10%" align="center" header-align="center">
            <template slot-scope="scope">
              <el-radio :label="scope.$index" v-model="selectedPartition"
              @change.native="getTemplateRow(scope.$index,scope.row)" style="margin-left: 10px;">&nbsp;</el-radio>
            </template>
          </el-table-column>
          <el-table-column label="分区名称" min-width="10%" prop="partitionName" align="center">
          </el-table-column>
          <el-table-column label="分区编号" min-width="10%" prop="partitionNum" align="center">
          </el-table-column>
          <el-table-column label="分区下包含的门禁" min-width="70%" prop="partitionEntranceGuard" align="center">
          </el-table-column>
        </el-table>
      </div>
      <!-- 增加分区弹窗 -->
      <PartitionAddForm :show-dialog="showPartitionAddDialog"
                        @close="hideAddDialog"
      ></PartitionAddForm>
      <PartitionDeleteForm :show-dialog="showPartitionDeleteDialog"
                        @close="hideDeleteDialog"
      ></PartitionDeleteForm>
    </div>
  </div>
</template>
  

<script>
  import PartitionAddForm from './components/PartitionAddForm'
  import PartitionDeleteForm from './components/PartitionDeleteForm'

  export default {
    name: "Partition",
    components: {
      PartitionAddForm,
      PartitionDeleteForm
    },
    data() {
      return {
        showPartitionAddDialog : false,
        showPartitionDeleteDialog: false,
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
       * 关闭弹窗
       */
      hideAddDialog(){
        this.showPartitionAddDialog = false
      },
      hideDeleteDialog(){
        this.showPartitionDeleteDialog = false
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
      handleAdd(){
        this.showPartitionAddDialog = true;
      },
      handleDelete(){
        this.showPartitionDeleteDialog = true;
      }
    },
    mounted() {
      this.initData();
    }
  }

</script>

<style scoped>

</style>
