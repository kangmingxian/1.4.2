const amapFile = require('utils/amap-wx.js');
//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'openday-s5yfn',
      traceUser: true
    })

    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    mapInfo: "",
    mapApi: "https://restapi.amap.com/v3/",
    history: [],
    historyRoute: [],
    homePart: {
      homeText: '设置一个地址',
      homePoint: ''

    },
    companyPart: {
      companyText: '设置一个地址',
      companyPoint: '',
    },
  }
})