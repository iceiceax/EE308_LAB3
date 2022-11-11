// pages/mulitplayer/mulitplayer.js

var num = [0, 0, 0, 0, 0, 0];
var oldNum = [0,0,0,0,0,0];
var players = [];
var index = 0;
var totalNum = [0,0,0,0,0,0];
Page({
  onLoad: function (options) {
    console.log(options);
    this.setData({
      num: Number(options.num),
    })
    if (this.data.num != 0){
      wx.setStorageSync('num', this.data.num);
    }
    
    for (var i = 0; i < this.data.num; i++) {
      players.push({
        name: "user" + i,
        record: [0, 0, 0, 0, 0, 0]
      })
    }
    this.setData({
      player: players,
    })
  },

  onShow: function () {
    this.setData ({
      total: totalNum,
      index: index+1,
    })
  },


  data: {
    player: [],
    total:[0,0,0,0,0,0],

    one_img: '../../image/6-point.gif',
    two_img: '../../image/6-point.gif',
    three_img: '../../image/6-point.gif',
    four_img: '../../image/6-point.gif',
    five_img: '../../image/6-point.gif',
    six_img: '../../image/6-point.gif',

    timer: null,
    txt: '什么都没摇到',
    flag: true,

    num: 0,

    dice: [
      '../../image/1-point.gif',
      '../../image/2-point.gif',
      '../../image/3-point.gif',
      '../../image/4-point.gif',
      '../../image/5-point.gif',
      '../../image/6-point.gif',
    ],
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,

    index:1,

    hiddenmodalput:true,
    inputValue: '',
    inputShowed: false,
  },

  begin: function (event) {
    let obj = this;
    var audio = wx.createInnerAudioContext()
    var url = "audio/dice_audio.mp3"
    audio.src = url // src 可以设置 http(s) 的路径，本地文件路径或者代码包文件路径
    audio.play()
    var point = [0, 0, 0, 0, 0, 0];
    let f = obj.data.flag;
    if (f == true) {
      obj.data.timer = setInterval(function () {

        let one = Math.floor(Math.random() * 6);
        let two = Math.floor(Math.random() * 6);
        let three = Math.floor(Math.random() * 6);
        let four = Math.floor(Math.random() * 6);
        let five = Math.floor(Math.random() * 6);
        let six = Math.floor(Math.random() * 6);

        obj.setData({
          one_img: obj.data.dice[one],
          two_img: obj.data.dice[two],
          three_img: obj.data.dice[three],
          four_img: obj.data.dice[four],
          five_img: obj.data.dice[five],
          six_img: obj.data.dice[six],

          one: one,
          two: two,
          three: three,
          four: four,
          five: five,
          six: six,

          flag: false,
          point: point,
          txt: obj.txt,
        })
      }, 100);
    }

    setTimeout(() => {
      clearInterval(obj.data.timer);
      var point = [0, 0, 0, 0, 0, 0];
      var result = "";

      point[obj.data.one]++;
      point[obj.data.two]++;
      point[obj.data.three]++;
      point[obj.data.four]++;
      point[obj.data.five]++;
      point[obj.data.six]++;

      if (point[3] == 4) {
        if (point[0] == 2) {
          result = "状元插金花";
          num[5] = num[5] + 1;
        } else {
          result = "状元";
          num[5] = num[5] + 1;
        }
      } else if (point[3] == 6) {
        result = "获得：六杯红";
        num[5] = num[5] + 1;
      } else if (point[0] == 6) {
        result = "获得：遍地锦";
        num[5] = num[5] + 1;
      } else if (point[1] == 6 && point[2] == 6 && point[4] == 6 && point[5] == 6) {
        result = "获得：六杯黑";
        num[5] = num[5] + 1;
      } else if (point[3] == 5) {
        result = "获得：五王";
        num[5] = num[5] + 1;
      } else if (point[0] == 5 && point[1] == 5 && point[2] == 5 && point[3] == 5 && point[4] == 5 && point[5] == 5) {
        result = "获得：五子登科";
        num[5] = num[5] + 1;
      } else if (point[0] == 1 && point[1] == 1 && point[2] == 1 && point[3] == 1 && point[4] == 1 && point[5] == 1) {
        result = "获得：对堂";
        num[4] = num[4] + 1;
      } else if (point[3] == 3) {
        result = "获得：三红";
        num[3] = num[3] + 1;
      } else if (point[0] == 4 && point[1] == 4 && point[2] == 4 && point[4] == 4 && point[5] == 4) {
        result = "获得：四进";
        num[2] = num[2] + 1;
      } else if (point[3] == 2) {
        result = "获得：二举";
        num[1] = num[1] + 1;
      } else if (point[3] == 1) {
        result = "获得：一秀";
        num[0] = num[0] + 1;
      } else {
        result = "什么都没摇到";
      }

      for (var i=0;i<6;i++){
        totalNum[i] += num[i];
      }

      obj.setData({
        txt: result,
        flag: true,
        total: totalNum,
      })

      oldNum = players[index].record;

      for (var i=0;i<6;i++) {
          num[i]+=oldNum[i];
      }

      players[index] = {
        name: "user" + index,
        record: num
      };
      num = [0, 0, 0, 0, 0, 0];
      

      if (index == this.data.num-1) {
        index = 0;
      } else {
        index++;
      }
      
      obj.setData({
        player: players,
        index: index+1,
      })


    }, 1000);

  },

  end: function () {
    wx.showModal({
      title: '提示',
      content: '是否结束博饼？',
      success: function(res) {
      if (res.confirm) {
        wx.setStorageSync('num', 0);
        num = [0, 0, 0, 0, 0, 0];
        oldNum = [0,0,0,0,0,0];
        players = [];
        index = 0;
        totalNum = [0,0,0,0,0,0];
        
        wx.navigateBack({
          url:'/pages/game/game'
        })
      } else if (res.cancel) {
      
      }
      }
    })
  },

  add: function () {
    this.setData({  
      hiddenmodalput: false,
      inputShowed: true,
     }) 
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
  let addNum = this.data.num + Number(this.data.inputValue);
  wx.setStorageSync('num', addNum);
  for (var i = 0; i < this.data.inputValue; i++) {
    players.push({
      name: "user" + i,
      record: [0, 0, 0, 0, 0, 0]
    })
  }

  this.setData({
    num: addNum,
    hiddenmodalput: true,
    player: players,
    inputValue: "",
  })
  
console.log(this.data.num);


},

input: function (options) {
  this.setData({
    inputValue: options.detail.value,
  })
},
logBtn1:function(){
  wx.navigateTo({
    url:'/pages/award/award',
})
},
})