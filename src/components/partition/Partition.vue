<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="partition_container">
    <div class="partition_content">
      <div style="padding: 0 100px;">
        <div class="top-btn-container">
          <el-button
            class="top-btn"
            type="primary"
            size="large"
            @click="handleDelete"
            >分区删除</el-button
          >
          <el-button
            class="top-btn"
            type="primary"
            size="large"
            @click="handleAdd"
            >分区增加</el-button
          >
        </div>
        <el-table
          class="el-table-container"
          ref="filterTable"
          :data="tableData"
          :header-cell-style="{
            'background-color': '#CCCCCC',
            color: '#000000'
          }"
        >
          <el-table-column
            label="选择"
            min-width="10%"
            align="center"
            header-align="center"
          >
            <template slot-scope="scope">
              <el-radio
                :label="scope.$index"
                v-model="selectedPartition"
                @change.native="getSelectedPartitionID(scope.row.partitionId)"
                style="margin-left: 10px;"
                >&nbsp;</el-radio
              >
            </template>
          </el-table-column>
          <el-table-column
            label="分区名称"
            min-width="10%"
            prop="partitionName"
            align="center"
          >
          </el-table-column>
          <el-table-column
            label="分区编号"
            min-width="10%"
            prop="partitionId"
            align="center"
          >
          </el-table-column>
          <el-table-column
            label="分区下包含的门禁"
            min-width="70%"
            prop="entranceName"
            align="center"
          >
            <template slot-scope="scope">
              <div v-if="Array.isArray(scope.row.entranceName)">
                <div
                  v-for="(item, index) in scope.row.entranceName"
                  :key="index"
                  style="display: inline-block"
                >
                  <span
                    ><a href="javascript:void(0);" @click="clickGuardName(item)">{{
                      item
                    }}</a></span
                  >
                  <span>&nbsp</span>
                  <span>&nbsp</span>
                </div>
              </div>
              <div v-else>
                <span
                  ><a
                    href=""
                    @click="clickGuardName(scope.row.entranceName)"
                    >{{ scope.row.entranceName }}</a
                  ></span
                >
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 增加分区弹窗 -->
      <PartitionAddForm
        :show-dialog="showPartitionAddDialog"
        @close="hideAddDialog"
        @refresh="getPartitionList"
      ></PartitionAddForm>
      <PartitionDeleteForm
        :show-dialog="showPartitionDeleteDialog"
        :seletedPartitionID="selectedPartitionID"
        @close="hideDeleteDialog"
        @refresh="getPartitionList"
      ></PartitionDeleteForm>
    </div>
  </div>
</template>

<script>
import { GET_PARTITION } from "../../api";
import PartitionAddForm from "./components/PartitionAddForm";
import PartitionDeleteForm from "./components/PartitionDeleteForm";

export default {
  name: "Partition",
  components: {
    PartitionAddForm,
    PartitionDeleteForm
  },
  data() {
    return {
      showPartitionAddDialog: false,
      showPartitionDeleteDialog: false,
      selectedPartitionID: "",
      respectGuardName: [
        // ["门禁1", "门禁2", "门禁3", "门禁4"],
        // ["门禁5", "门禁6", "门禁7", "门禁8"]
      ],
      tableData: [
        {
          partitionName: "ss",
          partitionId: "001",
          partitionEntranceGuard: ["002", "003", "004"]
        },
        {
          partitionName: "aa",
          partitionId: "023",
          partitionEntranceGuard: "002"
        },
        {
          partitionName: "bb",
          partitionId: "031",
          partitionEntranceGuard: "002"
        }
      ],
      selectedPartition: ""
    };
  },
  methods: {
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
      this.initData();
    },
    /**
     * 关闭弹窗
     */
    hideAddDialog() {
      this.showPartitionAddDialog = false;
    },
    hideDeleteDialog() {
      this.showPartitionDeleteDialog = false;
    },
    getSelectedPartitionID(partitionId) {
      this.selectedPartitionID = String(partitionId);
    },
    /**
     * 获取表单数据
     */
    getPartitionList() {
      this.tableData=[]
      this.$post(GET_PARTITION," ").then(res=>{
        if(res.code === '1'){
          console.log("获取成功！");
          this.tableData=res.data;
          console.log("DATA", res.data);
        } else if(res.code === '-1'){
            this.$message(res.msg)
          }
      }).catch(err=>{
        console.log(err);
      });
    },
    clickGuardName(val) {
      this.$router.push({
        path: "/EntranceGuard",
        query: { entranceName: val }
      });
    },
    handleAdd() {
      this.showPartitionAddDialog = true;
    },
    handleDelete() {
      this.showPartitionDeleteDialog = true;
    }
  },
  mounted() {
    this.initData();
    // this.$emit('hdindex',1)
  },
  watch: {
    // selectedPartitionID(val,oldVal){
    //   consolee.log("Current PID:",this.selectedPartitionID)
    // }
  }
};
</script>

<style scoped></style>
