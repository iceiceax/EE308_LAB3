//main.js
//获取应用实例
const app = getApp()


Page({
  data: {
    motto: 'Hello World',
    company: "博饼饼",
    lesson: " ",
    lessons: " ",
    //position: "\n\n\n\n ",
    imgalist: ['https://img-blog.csdnimg.cn/20190109104518898.jpg'],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  logBtn1:function(){
    wx.navigateTo({
      url:'/pages/single/single',
  })
},

switchChange: function(e) {
  let switchStatus = e.detail.value//获取switch开关状态
    this.setData({
    switchStatus: switchStatus
  })
  if (switchStatus) {
    backgroundAudioManager.play()//播放
  } else {
    backgroundAudioManager.pause()//暂停
  }
},


logBtn2:function(){
  wx.navigateTo({
    url:'/pages/mul-cover/mul-cover',
})
},

  previewImage: function (e) {
    wx.previewImage({
      current: this.data.imgalist,  // 当前显示图片的http链接
      urls: this.data.imgalist      // 需要预览的图片http链接列表
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})