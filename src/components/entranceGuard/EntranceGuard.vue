<template>
  <div class="entranceGuard_container">
    <div class="entranceGuard_content">
      <div style="padding: 0 100px;">
        <el-row class="above-row">
          <el-col :span="12">
            <div class="search-form">
              <el-form
                ref="form"
                :model="form"
                label-position="right"
                label-width="120px"
                :inline="true"
              >
                <el-form-item label="门禁名称:" prop="entranceGuardNameSearch">
                  <el-input
                    v-model="form.entranceGuardNameSearch"
                    placeholder="请填写门禁名"
                    class="search-input"
                  >
                  </el-input>
                </el-form-item>
                <el-button
                  class="search_btn"
                  type="primary"
                  size="large"
                  @click="handleSearch(1)"
                  style="margin-left: 38px"
                  >查询</el-button
                >
                <el-button
                  class="search_btn"
                  type="primary"
                  size="large"
                  @click="handleReset(form)"
                  style="margin-left: 18px"
                  >清空/刷新</el-button
                >
              </el-form>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="top-btn-container">
              <el-button
                class="top-btn"
                type="primary"
                size="large"
                @click="handleEdit"
                style="margin-left: 78px"
                >门禁修改</el-button
              >
              <el-button
                class="top-btn"
                type="primary"
                size="large"
                @click="handleDelete"
                >门禁删除</el-button
              >
              <el-button
                class="top-btn"
                type="primary"
                size="large"
                @click="handleAdd"
                >门禁增加</el-button
              >
            </div>
          </el-col>
        </el-row>

        <div>
          <el-table
            class="el-table-container"
            ref="filterTable"
            highlight-current-row
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
                  v-model="selectedEntrance"
                  @change.native="getSelectedEntranceGuard(scope.row)"
                  style="margin-left: 10px;"
                  >&nbsp;</el-radio
                >
              </template>
            </el-table-column>
            <el-table-column
              label="门禁ID"
              prop="entranceGuardId"
              min-width="15%"
              align="center"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              label="进向连接区域"
              prop="enterPartition"
              min-width="15%"
              align="center"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              label="出向连接区域"
              prop="exitPartition"
              min-width="15%"
              align="center"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              label="门禁名称"
              prop="entranceGuardName"
              min-width="15%"
              align="center"
              show-overflow-toolti
            >
            </el-table-column>
            <el-table-column
              label="操作"
              prop="partitionEntranceGuard"
              min-width="30%"
              align="center"
            >
              <template slot-scope="scope">
                <el-button
                  type="info"
                  @click="deviceInfoEdit(scope.row.entranceGuardId)"
                  >设备信息编辑</el-button
                >
                <el-button
                  type="info"
                  @click="showFacialRecDevice(scope.row.entranceGuardName)"
                  >人脸识别设备</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <CustomPagination
            :pagination="pagination"
            @currentPageChange="getCurrentPage"
          ></CustomPagination>
        </div>
        <EntranceGuardEditForm
          :show-dialog="showEntranceGuardEditDialog"
          :selectedEntranceGuard="selectedEntranceGuardData"
          @close="hideEntranceGuardEditDialog"
          @refresh="getEntranceGuard(1)"
          :form="JSON.stringify(form)"
        ></EntranceGuardEditForm>
        <EntranceGuardAddForm
          :show-dialog="showEntranceGuardAddDialog"
          @close="hideEntranceGuardAddDialog"
          @refresh="getEntranceGuard(1)"
        ></EntranceGuardAddForm>
        <EntranceGuardDeleteForm
          :show-dialog="showEntranceGuardDeleteDialog"
          :selectedEntranceGuard="selectedEntranceGuardID"
          @close="hideEntranceGuardDeleteDialog"
          @refresh="getEntranceGuard(1)"
        ></EntranceGuardDeleteForm>
      </div>
    </div>
  </div>
</template>

<script>
import EntranceGuardAddForm from "./components/EntranceGuardAddForm";
import EntranceGuardEditForm from "./components/EntranceGuardEditForm";
import EntranceGuardDeleteForm from "./components/EntranceGuardDeleteForm";
import CustomPagination from "../../custom_components/CustomPagination";
import { GET_ENTRANCEGUARD, GET_ENTRANCEGUARD_BY_NAME } from "../../api";

export default {
  name: "EntranceGuard",
  components: {
    EntranceGuardAddForm,
    EntranceGuardEditForm,
    EntranceGuardDeleteForm,
    CustomPagination
  },
  data() {
    return {
      showEntranceGuardEditDialog: false,
      showEntranceGuardAddDialog: false,
      showEntranceGuardDeleteDialog: false,
      selectedEntranceGuardID: "",
      selectedEntrance: "",
      selectedEntranceGuardData: {},
      searchingByName: false,
      tableData: [],
      pagination: {
        currentPage: 1,
        numOfSinglePages: 10, //pagesize
        total: 10
      },
      form: {
        entranceGuardNameSearch: ""
      },
    };
  },
  methods: {
    /**
     * 获取数据
     */
    initData() {
      this.tableData = [
        {
							"entranceGuardId":"0001",
							"entranceGuardName":"施工区门禁",
							"enterPartition":"生活区",
							"exitPartition":"施工区"
        },
        {
        "entranceGuardId":"0002",
                      "entranceGuardName":"办公区门禁",
                      "enterPartition":"生活区",
                      "exitPartition":"办公区"
        }
      ]
      this.getEntranceGuard(1);
    },
    /**
     * 获取表单数据
     */
    getEntranceGuard(val) {
      this.tableData = [];
      let params = {
        currentPage: val
      };
      this.$post(GET_ENTRANCEGUARD, params)
        .then(res => {
          if (res.code === "1") {
            console.log("获取成功！");
            this.tableData = res.data.entranceGuardList;
            this.pagination.currentPage = res.data.currentPage;
            this.pagination.numOfSinglePages = res.data.numOfSinglePages;
            this.pagination.total = res.data.total;
          } else if(res.code === '-1'){
            this.$message(res.msg)
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getCurrentPage(val) {
      this.pagination.currentPage = val;
      if (this.searchingByName) {
        this.handleSearch(val);
      } else {
        this.getEntranceGuard(val);
      }
    },
    handleAdd() {
      this.showPartitionAddDialog = true;
    },
    handleDelete() {
      this.showPartitionDeleteDialog = true;
    },
    deviceInfoEdit(entranceGuardId) {
      this.$router.push({
        path: "/EntranceGuard/DeviceInfoEdit",
        query: { entranceGuardId: entranceGuardId }
      });
    },
    /**
     * 跳转到门禁下的设备列表
     */
    showFacialRecDevice(entranceGuardName) {
      this.$router.push({
        path: "/FacialRecDevice",
        query: { entranceGuardName: entranceGuardName }
      });
    },
    /**
     * 获取选中门禁ID
     */
    getSelectedEntranceGuard(row) {
      this.selectedEntranceGuardID = row.entranceGuardId;
      this.selectedEntranceGuardData = row;
    },
    handleSearch(val) {
      if(this.form.entranceGuardNameSearch===""){
        this.$message("请输入关键字")
        return false
      }
      this.searchingByName = true;
      let params = {
        entranceGuardName: this.form.entranceGuardNameSearch,
        currentPage: val
      };
      this.$post(GET_ENTRANCEGUARD_BY_NAME, params)
        .then(res => {
          if (res.code === "1") {
            if (res.data.entranceGuardList) {
              this.tableData = res.data.entranceGuardList;
              this.pagination.total = res.data.total;
              this.pagination.numOfSinglePages = res.data.numOfSinglePages;
              this.pagination.currentPage = res.data.currentPage;
            } else if(res.code === '-1'){
            this.$message(res.msg)
          }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleReset(form) {
      this.$refs["form"].resetFields();
      this.getEntranceGuard(1);
      this.searchingByName = false;
    },
    handleEdit() {
      this.showEntranceGuardEditDialog = true;
    },
    handleDelete() {
      this.showEntranceGuardDeleteDialog = true;
    },
    handleAdd() {
      this.showEntranceGuardAddDialog = true;
    },
    hideEntranceGuardEditDialog() {
      this.showEntranceGuardEditDialog = false;
    },
    hideEntranceGuardAddDialog() {
      this.showEntranceGuardAddDialog = false;
    },
    hideEntranceGuardDeleteDialog() {
      this.showEntranceGuardDeleteDialog = false;
    }
  },
  mounted() {
    if(this.$route.query.entranceName){
      this.form.entranceGuardNameSearch = this.$route.query.entranceName;
      this.handleSearch(1)
    }else{
      this.initData();
    }
    // this.$emit("hdindex", 2);
  },
};
</script>

<style scoped>
.el-form-item {
  margin-bottom: 0px !important;
}
.search-form {
  padding: 60px 0 !important;
}
</style>
