import Vue from 'vue'
import Vuex from 'vuex'
import deviceConfig from './modules/deviceConfig'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    deviceConfig
  }
})

export default store