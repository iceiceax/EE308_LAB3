//mul-cover.js
//获取应用实例
App({
  onLaunch: function () {
    console.log("load");
    wx.setStorageSync('num', 0)
  }
})
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    motto: 'Hello World',
    lesson: " ",
    lessons: " ",
    imgalist: ['https://img-blog.csdnimg.cn/20190109104518898.jpg'],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    muti: 0,
    // RoomName: "",
    // Roomcode: "",
    // People: 0,
    hiddenmodalput:true,
    inputValue: '',
    inputShowed: false,
  },
  logBtn1:function(){
    wx.navigateTo({
      url:'/pages/room/room',
  })
  },
    
    //多人模式
  //弹框
  mulitplayer: function(){  
    let num = wx.getStorageSync('num');
    console.log(num);
    this.setData ({
      inputShowed:true,
    })
    if (num > 0) {
      console.log(num);
      wx.navigateTo({
        url:'/pages/mulitplayer/mulitplayer?num='+0,
      })
    } else {
      this.setData({  
        hiddenmodalput: false,
      })  
    }
    
  },  
  //取消按钮  
  cancel: function(){  
    this.setData({  
      hiddenmodalput: true,  
      inputValue: '',
    });  
  },  
  //确认按钮
  confirm: function(options){  
    //判断输入人数是否大于两人
    if (Number(this.data.inputValue)>=2){
      wx.navigateTo({
        url:'/pages/mulitplayer/mulitplayer?num='+this.data.inputValue,
      })
      this.setData({  
        hiddenmodalput: true,
        inputValue: '',
      })
    } else {
      wx.showToast({
        title: '人数需不少于两人！',
        icon: "none",
      })
    }
    
  },

  input: function (options) {
    this.setData({
      inputValue: options.detail.value,
    })
  },
})