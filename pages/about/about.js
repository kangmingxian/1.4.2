var app = getApp()
Page({
  data: {
    moto: [],//参数
  },
  onLoad: function () {
    this.getdata();

  },
  onReady: function () {
   this.drawBall()
  },
  drawBall: function () {
    var canvas = {
      width: 400,
      height: 300,
    };
    var boHeight = canvas.height / 10;
    var posHeight = canvas.height / 1.2;
    //初始角度为0 
    var step = 0;
    //定义三条不同波浪的颜色 
    var lines = ["rgba(0,222,255, 0.2)",
      "rgba(157,192,249, 0.2)",
      "rgba(0,168,255, 0.2)"];
    var context = wx.createContext();
    debugger
    let requestAnimFrame = (function () {
      return function (callback) {
        setTimeout(callback, 900 / 60);
      };
    })();
    function loop() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      step++;
      //画3个不同颜色的矩形 
      for (var j = lines.length - 1; j >= 0; j--) {
        context.fillStyle = lines[j];
        //每个矩形的角度都不同，每个之间相差45度 
        var angle = (step + j * 50) * Math.PI / 180;
        var deltaHeight = Math.sin(angle) * boHeight;
        var deltaHeightRight = Math.cos(angle) * boHeight;
        context.beginPath();
        context.moveTo(0, posHeight + deltaHeight);
        context.bezierCurveTo(canvas.width / 2, posHeight + deltaHeight - boHeight, canvas.width / 2, posHeight + deltaHeightRight - boHeight, canvas.width, posHeight + deltaHeightRight);
        context.lineTo(canvas.width, canvas.height);
        context.lineTo(0, canvas.height);
        context.lineTo(0, posHeight + deltaHeight);
        context.closePath();
        context.fill();
      }
      wx.drawCanvas({
        canvasId: 'canvas',
        actions: context.getActions()
      })

      requestAnimFrame(loop);
    }
    loop();
  },
  //自定义参数名字
  getdata: function () {
    var that = this;
    wx.request({
      url: 'https://www.inqingdao.cn/hitokoto/',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        that.setData({
          moto:res.data
        })
      },
      fail: function (err) { }, //请求失败
      complete: function () { } //请求完成后执行的函数
    })
  },

  gotoThank: function (param) {
    wx.navigateTo({
      url: '/pages/thank/thank',
    })
  }

})