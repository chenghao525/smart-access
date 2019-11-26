import Vue from 'vue'
import Router from 'vue-router'
import Partition from '../components/partition/Partition'
import EntranceGuard from '../components/entranceGuard/EntranceGuard'

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
  ]
})
