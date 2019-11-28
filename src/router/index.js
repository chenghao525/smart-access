import Vue from 'vue'
import Router from 'vue-router'
import Partition from '../components/partition/Partition'
import EntranceGuard from '../components/entranceGuard/EntranceGuard'
import FacialRecDevice from '../components/FacialRecDevice/FacialRecDevice'
import DeviceInfoEdit from '../components/entranceGuard/components/DeviceInfoEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Partition',
      component: Partition
    },
    {
      path: '/EntranceGuard',
      name: 'EntranceGuard',
      component: EntranceGuard
    },
    {
      path: '/FacialRecDevice',
      name: 'FacialRecDevice',
      component: FacialRecDevice
    },
    {
      path: '/EntranceGuard/DeviceInfoEdit',
      name: 'DeviceInfoEdit',
      component: DeviceInfoEdit
    },
  ]
})
