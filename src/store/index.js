import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import deviceConfig from './modules/deviceConfig'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    deviceConfig
  }
})

export default store