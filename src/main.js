// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import store from '../src/store/index'
import { post, get } from './utils/axio'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import './style/common.css'
import "./mockData/index.js"
import App from './App'
import router from './router'
const API = require('./api/index')

Vue.config.productionTip = false
Vue.use(ElementUI)
// 引入mockjs
require('./mockData/index.js')

Vue.prototype.axios = axios // 用于特定的axios，eg.上传
Vue.prototype.$post = post
Vue.prototype.$get = get
window.api = API


router.beforeEach((to, from, next) =>{
  //路由防守，需要验证的router添加meta
  if (to.matched.some(record => record.meta.requireAuth)) {
    // 通过是否接收到token来验证是否已登录
    let token  = localStorage.getItem('authToken')
    console.log("token", token)
    if (token) {
      next()
    }
    else {
      next({
        path: '/LoginForm',
        query: {redirect: to.fullPath}
      })
    }
  }else if (to.matched.length === 0) {
      from.name ? next({ name: from.name }) : next('/')
    } else {
      next()
    }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
