<template>
  <div class="facialRecDevice_container">
    <div class="facialRecDevice_content">
      <div style="padding: 0 100px;">
        <el-row class="above-row">
          <el-col :span="18">
            <div class="search-form">
              <el-form
              class="face-form"
                ref="form"
                :model="form"
                label-position="left"
                label-width="auto"
                :rules="rules"
                :inline="true"
              >
                <el-form-item label="SN:" prop="SN">
                  <el-input
                    v-model="form.SN"
                    placeholder="请输入关键字"
                    @input="inputSN"
                    :disabled="disableSNSearch"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="IP:" prop="IP">
                  <el-input
                    v-model="form.IP"
                    placeholder="请输入关键字"
                    @input="inputIP"
                    :disabled="disableIPSearch"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="所属门禁:" prop="entranceGuard">
                  <el-input
                    v-model="form.entranceGuard"
                    placeholder="请输入关键字"
                    @input="inputName"
                    :disabled="disableNameSearch"
                  >
                  </el-input>
                </el-form-item>
                <div class="search-btn-container" style="display:inline">
                <el-button
                  class="search_btn"
                  type="primary"
                  size="large"
                  @click="handleSearch(form)"
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
                </div>
              </el-form>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="top-btn-container">
              <el-button
                class="top-btn"
                type="primary"
                size="large"
                @click="handleDelete"
                >设备删除</el-button
              >
              <el-button
                class="top-btn"
                type="primary"
                size="large"
                @click="handleAdd"
                >设备增加</el-button
              >
              <el-button
                class="top-btn"
                type="primary"
                size="large"
                @click="handleConfig"
                >设置</el-button
              >
            </div>
          </el-col>
        </el-row>

        <div>
          <el-table
            class="el-table-container"
            ref="facialRecDeviceTable"
            :data="tableData"
            :header-cell-style="{
              'background-color': '#CCCCCC',
              color: '#000000'
            }"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              label="选择"
              min-width="10%"
              align="center"
              header-align="center"
              type="selection"
            >
              <!-- <template slot-scope="scope">
                <el-radio
                  :label="scope.$index"
                  v-model="selectedDevice"
                  @change.native="getDeviceID(scope.row.d_device_id)"
                  style="margin-left: 10px;"
                  >&nbsp;</el-radio
                >
              </template> -->
            </el-table-column>
            <el-table-column
              label="SN"
              prop="d_device_id"
              min-width="10%"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="方向"
              prop="d_device_direction"
              min-width="10%"
              align="center"
            >
            <template v-slot="scope">
              <div v-for="(item,index) in allDirection" :key="index">
                <span v-if="item.typeId===scope.row.unitTypeSysNo">{{item.typeName}}</span>
              </div>
            </template>
            </el-table-column>
            <el-table-column
              label="IP"
              prop="d_device_address"
              min-width="10%"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="固件版本"
              prop="d_device_firmwareversion"
              min-width="10%"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="型号"
              prop="d_device_model"
              min-width="10%"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="品牌"
              prop="d_device_brand"
              min-width="10%"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              prop=""
              min-width="25%"
              align="center"
            >
              <template slot-scope="scope">
                <el-button
                  type="info"
                  @click="operateRecord(scope.row.d_device_id)"
                  >操作记录</el-button
                >
                <el-button
                  type="info"
                  @click="faceRecDevPerson(scope.row.d_device_address)"
                  >已录入人员</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <CustomPagination
            :pagination="pagination"
            @currentPageChange="getCurrentPage"
          ></CustomPagination>
        </div>
        <FacialDeviceAddForm
          :show-dialog="showFacialDeviceAddDialog"
          @close="hideFacialDeviceAddDialog"
          @refresh="getDeviceList(1)"
        ></FacialDeviceAddForm>
        <FacialDeviceDeleteForm
          :show-dialog="showFacialDeviceDeleteDialog"
          @close="hideFacialDeviceDeleteDialog"
          @refresh="getDeviceList(1)"
          :selectedDeleteDeviceID="multipleSelection"
        ></FacialDeviceDeleteForm>
        <FacialDeviceConfigForm
          :show-dialog="showFacialDeviceConfigDialog"
          @close="hideFacialDeviceConfigDialog"
          :selectedConfigDeviceID="multipleSelection"
          ></FacialDeviceConfigForm>
      </div>
    </div>
  </div>
</template>

<script>
import FacialDeviceAddForm from "./components/FacialDeviceAddForm";
import FacialDeviceDeleteForm from "./components/FacialDeviceDeleteForm";
import FacialDeviceConfigForm from "./components/FacialDeviceConfigForm";
// import OperateRecordTable from "./components/OperateRecordTable";
import FaceRecDevPerson from "./components/FaceRecDevPersonTable";
import CustomPagination from "../../custom_components/CustomPagination";
import {
  GET_FACEDEVICEINFO,
  GET_FACEDEVICEINFO_IP,
  GET_FACEDEVICEINFO_SN,
  GET_FACEDEVICEINFO_GUARD
} from "../../api";

export default {
  name: "FacialRecDevice",
  components: {
    FacialDeviceAddForm,
    FacialDeviceDeleteForm,
    FacialDeviceConfigForm,
    // OperateRecordTable,
    FaceRecDevPerson,
    CustomPagination
  },
  data() {
    return {
      showFacialDeviceAddDialog: false,
      showFacialDeviceDeleteDialog: false,
      showFacialDeviceConfigDialog:false,
      disableSNSearch: false,
      disableIPSearch: false,
      disableNameSearch: false,
      multipleSelection:[],
      selectedDevice: "",
      seletedDeleteDeviceID: "",
      searchMethod: "",
      tableData: [],
      allDirection: [
        {
            typeId:'0',
            typeName:'出'
         },{
            typeId:'1',
            typeName:'进'
         },
      ],
      form: {
        SN: "",
        IP: "",
        entranceGuard: ""
      },
      pagination: {
        currentPage: 1,
        numOfSinglePages: 10, //pagesize
        total: 10
      },
      rules: {}
    };
  },
  methods: {
    /**
     * 获取数据
     */
    initData() {
      this.getDeviceList(1);
    },
    /**
     * 点击重载按钮后重载数据
     * @param val
     */
    clickedRefresh(val) {},
    /**
     * 获取搜索框状态
     */
    inputSN(e) {
      if (e.length !== 0) {
        this.disableIPSearch = true;
        this.disableNameSearch = true;
        this.searchMethod = GET_FACEDEVICEINFO_SN;
      } else {
        this.disableIPSearch = false;
        this.disableNameSearch = false;
        this.searchMethod = "";
      }
    },
    inputIP(e) {
      if (e.length !== 0) {
        this.disableSNSearch = true;
        this.disableNameSearch = true;
        this.searchMethod = GET_FACEDEVICEINFO_IP;
      } else {
        this.disableSNSearch = false;
        this.disableNameSearch = false;
        this.searchMethod = "";
      }
    },
    inputName(e) {
      if (e.length !== 0) {
        this.disableIPSearch = true;
        this.disableSNSearch = true;
        this.searchMethod = GET_FACEDEVICEINFO_GUARD;
      } else {
        this.disableIPSearch = false;
        this.disableSNSearch = false;
        this.searchMethod = "";
      }
    },
    /**
     * 获取表单数据
     */
    //TODO: currentpage 
    getDeviceList(currentPage) {
      this.tableData = [];
      const params = {
        currentPage: currentPage
      };
      this.$post(GET_FACEDEVICEINFO, params)
        .then(res => {
          if (res.code === "1") {
            if (res.data) {
              this.tableData = res.data.devList;
              this.pagination.total = res.data.totalCount;
              this.pagination.numOfSinglePages = res.data.numOfSinglePages;
              this.pagination.currentPage = res.data.currentPage;
            }
          } else if(res.code === '-1'){
            this.$message(res.msg)
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * 获取操作记录
     */
    operateRecord(deviceID) {
      this.$router.push({
        path: '/FacialRecDevice/OperateRecordTable',
        query: { deviceId: deviceID }
      });
    },
    /**
     * 获取已录入人员记录
     */
    faceRecDevPerson(deviceIP) {
      this.$router.push({
        path: '/FacialRecDevice/FaceRecDevPersonTable',
        query: { deviceIp: deviceIP }
      });
    },
    /**
     * 设置设备
     */
    // configDevice(deviceID){
    //   this.$router.push({
    //     path: '/FacialRecDevice/FaceDeviceConfigForm',
    //     query: { deviceId: deviceID }
    //   });
    // },
    getCurrentPage(val) {
      // if (!this.$route.query.entranceGuardName) {
        this.pagination.currentPage = val;
        this.getDeviceList(val);
      // }
    },
    /**
     * 获取选中行设备id
     */
    getDeviceID(deviceID) {
      this.seletedDeleteDeviceID = deviceID;
    },
    getDeviceByGuard(val) {
      let params = {
        entranceGuardName: val,
        currentPage: 1
      };
      this.$post(GET_FACEDEVICEINFO_GUARD, params)
        .then(res => {
          if (res.code === "1") {
            if (res.data) {
              this.tableData = res.data.devList;
              this.pagination.total = res.data.total;
              this.pagination.numOfSinglePages = res.data.numOfSinglePages;
              this.pagination.currentPage = res.data.currentPage;
            }
          } else if(res.code === '-1'){
            this.$message(res.msg)
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSearch(form) {
      if (this.searchMethod === "") {
        this.$message("请输入关键字");
        this.getDeviceList(1);
        return false;
      }
      if (this.searchMethod === GET_FACEDEVICEINFO_GUARD) {
        this.getDeviceByGuard(this.form.entranceGuard);
      } else {
        let params = {};
        if (this.searchMethod === GET_FACEDEVICEINFO_IP) {
          params = { d_device_address: this.form.IP };
        } else if (this.searchMethod === GET_FACEDEVICEINFO_SN) {
          params = { d_device_id: this.form.SN };
        }
        this.$post(this.searchMethod, params)
          .then(res => {
            if (res.code === "1") {
              if (res.data) {
                this.tableData = res.data;
              }
            } else if(res.code === '-1'){
            this.$message(res.msg)
          }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    handleReset(form) {
      this.$refs["form"].resetFields();
      this.inputSN("");
      this.inputIP("");
      this.inputName("");
      this.getDeviceList(1);
    },
    //表格多选
    handleSelectionChange(val) {
      console.log("sele",val)
      this.multipleSelection = val;
    },
    handleAdd() {
      this.showFacialDeviceAddDialog = true;
    },
    handleDelete(){
      this.showFacialDeviceDeleteDialog = true;
    },
    handleConfig(){
      this.showFacialDeviceConfigDialog = true;
    },
    hideFacialDeviceAddDialog() {
      this.showFacialDeviceAddDialog = false;
    },
    hideFacialDeviceDeleteDialog() {
      this.showFacialDeviceDeleteDialog = false;
    },
    hideFacialDeviceConfigDialog() {
      this.showFacialDeviceConfigDialog = false;
    }
  },
  mounted() {
    if (this.$route.query.entranceGuardName) {
      this.getDeviceByGuard(this.$route.query.entranceGuardName);
      this.form.entranceGuard = this.$route.query.entranceGuardName;
      this.searchMethod = GET_FACEDEVICEINFO_GUARD;
    } else {
      this.initData();
    }
    // this.$emit("hdindex", 3);
  }
  // created() {
  //   this.$route.replace({ path: "/FacialRecDevice" });
  // }
};
</script>

<style scoped>
.el-form-item {
  margin-bottom: 0px !important;
}
.search-form {
  padding: 60px 0 !important;
}
.face-form{
  float: left;
}
.face-form>>>.el-form-item__label-wrap{
  margin-left: 0px !important;
}
.face-form>>>.el-input{
  width: 150px;
}
</style>
