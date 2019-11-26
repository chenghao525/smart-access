// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/Layout.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import { post, get } from './utils/axio'
import 'element-ui/lib/theme-chalk/index.css'
const API = require('./api/index')

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.axios = axios // 用于特定的axios，eg.上传
Vue.prototype.$post = post
Vue.prototype.$get = get
window.api = API

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
