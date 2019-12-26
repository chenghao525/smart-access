import Vue from "vue";
import Router from "vue-router";
import Layout from "../components/Layout";
import Partition from "../components/partition/Partition";
import EntranceGuard from "../components/entranceGuard/EntranceGuard";
import FacialRecDevice from "../components/facialRecDevice/FacialRecDevice";
import DeviceInfoEdit from "../components/entranceGuard/components/DeviceInfoEdit";
import OperateRecordTable from "../components/facialRecDevice/components/OperateRecordTable";
import FaceRecDevPersonTable from "../components/facialRecDevice/components/FaceRecDevPersonTable";

Vue.use(Router);

export default new Router({
  base: "/",
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      redirect: "/Partition"
    },
    {
      path: "/Partition",
      name: "Partition",
      component: Partition
    },
    {
      path: "/EntranceGuard",
      name: "EntranceGuard",
      component: EntranceGuard
    },
    {
      path: "/FacialRecDevice",
      name: "FacialRecDevice",
      component: FacialRecDevice
    },
    {
      path: "/EntranceGuard/DeviceInfoEdit",
      name: "DeviceInfoEdit",
      component: DeviceInfoEdit
    },
    {
      path: "/FacialRecDevice/OperateRecordTable",
      name: "OperateRecordTable",
      component: OperateRecordTable
    },
    {
      path: "/FacialRecDevice/FaceRecDevPersonTable",
      name: "FaceRecDevPersonTable",
      component: FaceRecDevPersonTable
    }
  ]
});
