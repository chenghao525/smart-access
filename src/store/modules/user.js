const user = {

  // 状态申明
  state: {
    userInfo: {},
    showNotice: false,
    creator: null, // 创建人
    level: 0 // 用户是否有审核权限 0：无 1：有
  },

  // 更新状态
  mutations: {},
  /**
     * 存入用户所有信息，便于所有的组件之间使用
     * 登录后信息存入sessionStorage防止刷新后token消失跳回登录页面
     * 存入方式this.$store.commit('function (eg. SET_USERINFO)', data (eg. res.data))
     * 获取方式 this.$store.state.packageName.attribute(eg. this.$store.state.user.userInfo)
     * 初次登录时需要弹出通知公告
     * showNotice为1时需要弹公告
     * @param state
     * @param userInfo
     * @constructor
     */
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
      localStorage.setItem('token', state.userInfo.tokenId)
      localStorage.setItem('memberNo', state.userInfo.memberNo)
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
      state.showNotice = true
      localStorage.setItem('showNotice', '1')
    },

    /**
     * 处理用户审核权限
     * 使用localStorage而不是route是为了防止用户更改路径强行更换权限
     * @param state
     * @param level
     * @constructor
     */
    SET_AUTH: (state, level) => {
      state.level = level
      localStorage.setItem('level', level)
    },
    /**
     * 退出登录，清除userInfo以及所有sessionStorage
     * @param state
     * @constructor
     */
    LOGOUT: (state) => {
      state.userInfo = ''
      localStorage.clear()
    },
  }


export default user