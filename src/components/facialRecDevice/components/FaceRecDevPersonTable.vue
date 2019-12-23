<template>
  <div class="faceRecDevPerson_container">
    <div class="faceRecDevPerson_content">
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
                <el-form-item label="人员ID:" prop="personId">
                  <el-input
                    v-model="form.personId"
                    placeholder="请填写人员ID"
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
                @click="handleReturn"
                >返回</el-button
              >
            </div>
          </el-col>
        </el-row>
        <div>
          <el-table
            class="el-table-container"
            ref="faceDevPersonTable"
            :data="tableData"
            :header-cell-style="{
              'background-color': '#CCCCCC',
              color: '#000000'
            }"
          >
            <el-table-column label="录入时间" prop="d_addTime" align="center">
            </el-table-column>
            <el-table-column label="姓名" prop="d_name" align="center">
            </el-table-column>
            <el-table-column label="工号" prop="d_workerId" align="center">
            </el-table-column>
            <el-table-column label="人员ID" prop="d_PersonId" align="center">
            </el-table-column>
            <el-table-column
              label="操作"
              prop="operate"
              min-width="30%"
              align="center"
            >
              <template slot-scope="scope">
                <el-popover
                  placement="bottom-start"
                  width="180"
                  v-model="confirmVisible"
                >
                  <div style="text-align:center;font-weight:bold">
                    <p>确认删除此人员？</p>
                  </div>
                  <div style="text-align: center; margin: 0">
                    <el-button
                      size="small"
                      type="text"
                      @click="confirmVisible = false"
                      style="font-weight:bold"
                      >取消</el-button
                    >
                    <el-button
                      type="primary"
                      size="small"
                      @click="
                        confirmVisible = false;
                        handleDelete(scope.row.personId);
                      "
                      style="font-weight:bold"
                      >确认</el-button
                    >
                  </div>
                  <el-button slot="reference" type="info">删除</el-button>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
          <CustomPagination
            :pagination="pagination"
            @currentPageChange="getCurrentPage"
          ></CustomPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_FACEDEVICE_PERSON, DELETE_FACEDEVICE_PERSON } from "../../../api";
import CustomPagination from "../../../custom_components/CustomPagination";

export default {
  name: "FaceRecDevPersonTable",
  components: {
    CustomPagination
  },
  data() {
    return {
      tableData: [],
      confirmVisible: false,
      deviceIp: "",
      form: {
        personId: ""
      },
      pagination: {
        currentPage: 1,
        total: 0,
        numOfSinglePages: 10
      }
    };
  },
  methods: {
    handleReturn() {
      this.$router.push({ path: "/FacialRecDevice" });
    },
    //通过人员ID查找人员方法
    handleSearch(val) {
      console.log(this.form.personId);
    },
    //删除人员操作按钮
    handleDelete(personId) {
      console.log("Deleting!", personId);
      this.$post(DELETE_FACEDEVICE_PERSON,{personId:personId}).then(res=>{
        if(res.code==='1'){
          this.$message(res.msg);
        }
      }).catch(err=>{
        this.$message(err);
      })
    },
    //清楚查询记录，刷新表格
    handleReset(form) {
      this.$refs["form"].resetFields();
      this.getFaceDeviceRecPerson(1);
    },
    getCurrentPage(val) {
      this.pagination.currentPage = val;
      this.getFaceDeviceRecPerson(val);
    },
    getFaceDeviceRecPerson(val) {
      let params = {
        d_device_address: this.deviceIp,
        currentPage: val
      };
      this.$post(GET_FACEDEVICE_PERSON, params)
        .then(res => {
          if (res.code === "1") {
            if (res.data) {
              this.tableData = res.data.personList;
              this.pagination.total = res.data.total;
              this.pagination.currentPage = res.data.currentPage;
              this.pagination.numOfSinglePages = res.data.numOfSinglePages;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.deviceIp = this.$route.query.deviceIp;
    this.getFaceDeviceRecPerson(1);
  },
  watch: {
    deviceIp(val, oldVal) {
      console.log("bbb", val);
    }
  }
};
</script>

<style scoped>
.search-form {
  padding: 60px 0 !important;
}
</style>
