// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import { post, get } from './utils/axio'
const API = require('./api/index')
import 'element-ui/lib/theme-chalk/index.css'

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
  components: { App },
  template: '<App/>'
})
