const db = wx.cloud.database();
var getArr = new Array();
// pages/chaxun/chaxun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //
  pushIpt: function (e) {
    var val = e.detail.value;
    this.setData({
      val: val
    });
  },
  //查询
  btnGet: function () {
    var that = this;
    if (that.data.val) {
      db.collection("clouddemo").where({
        name: {
          $regex: '.*' + that.data.val,
          $options:'1'
        }
      }).get()
        .then(res => {
          if(res.data.length == 0){
            wx.showToast({
              title: '试试输入学校全称或\n留意学校通知',
              icon: 'none',
              duration: 3000
            })
          }
          that.setData({
            getArr: res.data,
          })
        })
    }
    else {
      wx.showToast({
        title: '校名不能为空',
        image: '/images/tx2.png',
        duration: 2000
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    var that = this;
    return {
      title: '高校开学时间',
      path: '/pages/chax/chax?id=' + that.data.scratchId,
      success: function (res) {
        // 转发成功
        if (res.errMsg == 'shareAppMessage:ok') {
        }
        //that.shareClick();
      },
      fail: function (res) {
        // 转发失败
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {
          // 转发失败，其中 detail message 为详细失败信息
        }
      }
    }
  }
  
})