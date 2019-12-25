const deviceConfig = {

  // 状态申明
  state: {
    deviceConfig: {},
  },

  // 更新状态
  mutations: {
  /**
     * 存入每个人脸识别系统的设置
     * @param state
     * @param deviceConfig
     * @constructor
     */
    SET_DEVICECONFIG: (state, deviceConfig) => {
      state.deviceConfig = Object.assign(state.deviceConfig, deviceConfig)
      localStorage.setItem('deviceConfig', JSON.stringify(state.deviceConfig))
    },
  },
}


export default deviceConfig