Page({
  data: {
    listData: [
      { "code": "福建", "text": "5月6日", "type": "5月20日" },
      { "code": "重庆", "text": "5月11日", "type": "另行通知" }, 
      { "code": "青海", "text": "4月1日", "type": "4月1日" },
      { "code": "新疆", "text": "4月8日", "type": "4月8日" },
      { "code": "山西", "text": "4月10日", "type": "一周之内" },
      { "code": "甘肃", "text": "4月13日", "type": "4月20日" },
      { "code": "江苏", "text": "4月13日后", "type": "4月13日后" },
      { "code": "广西", "text": "4月18日", "type": "另行通知" },
      { "code": "宁夏", "text": "4月20日", "type": "另行通知" },
      { "code": "贵州", "text": "4月21日", "type": "5月中旬后" },
      { "code": "江西", "text": "4月23日", "type": "5月7日" },
      { "code": "河南", "text": "4月25日", "type": "5月6日" },
      { "code": "浙江", "text": "4月26日起", "type": "到5月10日" },
      { "code": "陕西", "text": "4月27日", "type": "5月6日" },
      { "code": "上海", "text": "4月27日", "type": "5月6日" },
      { "code": "四川", "text": "5月6日", "type": "5月6日" },
      { "code": "云南", "text": "5月6日", "type": "5月11日" },
      { "code": "安徽", "text": "5月6日", "type": "一两周后" },
      { "code": "内蒙古", "text": "5月7日", "type": "5月3日" },
      { "code": "广东", "text": "5月11日", "type": "5月18日" },
      { "code": "吉林", "text": "5月11日", "type": "待通知" }, 
      { "code": "天津", "text": "5月上旬或中旬", "type": "另行通知" },
      { "code": "湖北", "text": "继续推迟", "type": "继续推迟" },
      { "code": "海南", "text": "另行通知", "type": "另行通知" },
      { "code": "西藏", "text": "另行通知", "type": "另行通知" },
      { "code": "山东", "text": "另行通知", "type": "另行通知" },
      { "code": "香港", "text": "待通知", "type": "待通知" },
      { "code": "台湾", "text": "待通知", "type": "待通知" },
      { "code": "黑龙江", "text": "待通知", "type": "待通知" },
      { "code": "澳门", "text": "待通知", "type": "待通知" },
      { "code": "辽宁", "text": "待通知", "type": "待通知" },
      { "code": "河北", "text": "待通知", "type": "待通知" },
      { "code": "湖南", "text": "待通知", "type": "待通知" }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  },
  /**
   * 显示弹窗
   */
  buttonTap: function () {
    this.setData({
      modalHidden: false
    })
  },

  /**
   * 点击取消
   */
  modalCandel: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  /**
   *  点击确认
   */
  modalConfirm: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },
  gotoLog: function(param){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  gotoCx: function (param) {
    wx.navigateTo({
      url: '/pages/chaxun/chaxun',
    })
  },
  onShareAppMessage: function (res) {
    var that = this;
    return {
      title: '高校开学时间',
      path: '/pages/index/index?id=' + that.data.scratchId,
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
