import Vue from 'vue'
import Router from 'vue-router'
import Partition from '../components/partition/Partition'
import EntranceGuard from '../components/entranceGuard/EntranceGuard'
import FacialRecDevice from '../components/FacialRecDevice/FacialRecDevice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Partition',
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
  ]
})
