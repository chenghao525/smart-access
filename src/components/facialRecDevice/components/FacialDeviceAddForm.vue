<template>
  <el-dialog
    class="facialDevice-add-container"
    :visible.sync="visible"
    :title="title"
    width="600px"
  >
    <div class="facialDevice-add-content">
      <el-form
        class="form-container"
        label-position="right"
        :model="facialDeviceAddForm"
        ref="facialDeviceAddForm"
        label-width="140px"
        :inline="true"
        :rules="rules"
      >
        <el-form-item label="设备型号:" prop="d_device_model">
          <el-select
            v-model="facialDeviceAddForm.d_device_model"
            size="medium"
            placeholder="请选择设备型号"
          >
            <el-option
              v-for="item in deviceModelOptions"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="IP:" prop="d_device_ip">
          <el-input
            v-model="facialDeviceAddForm.d_device_ip"
            size="medium"
            placeholder="请输入IP"
          ></el-input>
        </el-form-item>
        <el-form-item label="方向:" prop="d_device_direction">
          <el-select
            v-model="facialDeviceAddForm.d_device_direction"
            size="medium"
            placeholder="请选择方向"
          >
            <el-option
              v-for="item in allDirection"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="设备所属门禁:" prop="d_entranceGuardName">
          <el-select
            v-model="facialDeviceAddForm.d_entranceGuardName"
            size="medium"
            placeholder="请选择设备所属门禁"
          >
            <el-option
              v-for="item in entranceGuardOptions"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn-container">
      <el-button
        type="primary"
        class="bottom-btn"
        size="large"
        @click="handleAdd"
        >添加设备</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import {
  ADD_FACEDEVICE,
  GET_ALL_PARTITION_NAME,
  GET_ALL_DEVICE_MODEL,
  GET_ALL_ENTRANCE_NAME
} from "../../../api";

export default {
  name: "FacialDeviceAddForm",
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: this.showDialog,
      title: "新增设备",
      allDirection: [],
      deviceModelOptions: [],
      entranceGuardOptions:[],
      facialDeviceAddForm: {
        d_device_ip: "",
        d_device_model: "",
        d_device_direction: "",
        d_entranceGuardName: ""
      },
      rules: {
        d_device_model: [
          { required: true, message: "请选择设备型号", trigger: "blur" }
        ],
        d_device_ip: [{ required: true, message: "请输入IP", trigger: "blur" }],
        d_device_direction: [
          { required: true, message: "请选择分区", trigger: "blur" }
        ],
        d_entranceGuardName: [
          { required: true, message: "请选择设备所属门禁", trigger: "blur" }
        ]
      },
    };
  },
  methods: {
    /**
     * 关闭弹框
     */
    handleCancel() {
      this.$refs["facialDeviceAddForm"].resetFields();
      (this.visible = false), this.$emit("close");
    },
    //TODO: get url data
    handleAdd() {
      console.log("Add");
      this.$refs["facialDeviceAddForm"].validate(valid => {
        if (valid) {
          this.handleUpdate();
        } else {
          this.$message.warning("校验失败，请务必填写*标记内容");
          return false;
        }
      });
    },
    handleUpdate() {
      let params = {
        d_device_ip: this.facialDeviceAddForm.d_device_ip,
        d_device_direction: this.facialDeviceAddForm.d_device_direction,
        d_device_model: this.facialDeviceAddForm.d_device_model,
        d_entranceGuardName: this.facialDeviceAddForm.d_entranceGuardName
      };
      this.$post(ADD_FACEDEVICE, params)
        .then(res => {
          if (res.code === "1") {
            console.log("添加成功！");
            this.$emit("refresh");
            this.handleCancel();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * 获取所有分区名称
     */
    getAllPartitionName() {
      this.$post(GET_ALL_PARTITION_NAME, {})
        .then(res => {
          if (res.code === "1") {
            console.log("获取成功！");
            this.allPartitionName = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAllDeviceModel() {
      this.$post(GET_ALL_DEVICE_MODEL, {})
        .then(res => {
          if (res.code === "1") {
            console.log("获取成功！");
            this.deviceModelOptions = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAllGuardName(){
      this.$post(GET_ALL_ENTRANCE_NAME, {})
        .then(res => {
          if (res.code === "1") {
            console.log("获取成功！");
            this.entranceGuardOptions = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getAllPartitionName();
    this.getAllDeviceModel();
    this.getAllGuardName();
  },
  watch: {
    showDialog() {
      this.visible = this.showDialog;
    },
    visible(val, oldVal) {
      if (!val) {
        this.handleCancel();
      }
    }
  }
};
</script>

<style scoped>
.facialDevice-add-content {
  display: flex;
  justify-content: center;
}
</style>
