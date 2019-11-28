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
                  :data="tableData"
                  header-row-style="background-color:#CCCCCC; color:#000000">
          <el-table-column label="选择" min-width="10%" align="center" header-align="center">
            <template slot-scope="scope">
              <el-radio :label="scope.$index" v-model="selectedPartition"
              @change.native="getSelectedPartitionID(scope.row)" style="margin-left: 10px;">&nbsp;</el-radio>
            </template>
          </el-table-column>
          <el-table-column label="分区名称" min-width="10%" prop="partitionName" align="center">
          </el-table-column>
          <el-table-column label="分区编号" min-width="10%" prop="partitionID" align="center">
          </el-table-column>
          <el-table-column label="分区下包含的门禁" min-width="70%" prop="partitionEntranceGuard" align="center">
          </el-table-column>
        </el-table>
      </div>
      <!-- 增加分区弹窗 -->
      <PartitionAddForm :show-dialog="showPartitionAddDialog"
                        @close="hideAddDialog"
                        @refresh="getPartitionList"
      ></PartitionAddForm>
      <PartitionDeleteForm :show-dialog="showPartitionDeleteDialog"
                          :seletedPartitionID="selectedPartitionID"
                          @close="hideDeleteDialog"
                          @refresh="getPartitionList"
      ></PartitionDeleteForm>
    </div>
  </div>
</template>
  

<script>
  import {GET_PARTITION} from '../../api'
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
        selectedPartitionID: "",
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
        selectedPartition: ""
      }
    },
    methods:{
       /**
       * 获取数据
       */
      initData() {
        this.getPartitionList();
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
      getSelectedPartitionID(partitionID){
        this.selectedPartitionID = partitionID;
      },
      /**
       * 获取表单数据
       */
      getPartitionList(){
        console.log("Cha!!")
        this.tableData=[]
        this.$post(GET_PARTITION," ").then(res=>{
          if(res.code === '1'){
            console.log("获取成功！");
            this.tableData=res.data;
            console.log("DATA", res.data);
          }
        }).catch(err=>{
          console.log(err);
        });
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
