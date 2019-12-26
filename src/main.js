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



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
