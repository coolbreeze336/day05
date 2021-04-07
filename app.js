// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log("1111");

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(){
    // console.log("222");
  },
  onHide(){
    // console.log("333");
  },
  onError(){
    // console.log("xxx");
  },
  globalData: {
    userInfo: null
  }
})
