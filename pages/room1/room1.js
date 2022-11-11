//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    switchStatus: false,
    one_img:'../../image/6-point.gif',
    two_img: '../../image/6-point.gif',
    three_img: '../../image/6-point.gif',
    four_img:'../../image/6-point.gif',
    five_img: '../../image/6-point.gif',
    six_img: '../../image/6-point.gif',
    flag:true,
    timer:null,
    msg:'开始博饼',
    total:0,
    total1:0,
    txt:' ',
    M:'0',
    num1:0,
    num2:0,
    num3:0,
    num5:0,
    num6:0,

    arr:[
      '../../image/1-point.gif',
      '../../image/2-point.gif',
      '../../image/3-point.gif',
      '../../image/4-point.gif',
      '../../image/5-point.gif',
      '../../image/6-point.gif',
    ],
     isfour: 0
     
  },
  Go_Back() {
    this.setData({
      recode: true
    })
  },


  enter:function(event){
    let obj = this;
    var audio = wx.createInnerAudioContext()
    var url = "audio/dice_audio.mp3"
    audio.src = url // src 可以设置 http(s) 的路径，本地文件路径或者代码包文件路径
    audio.play()
    if(obj.data.flag==true){
       obj.data.timer = setInterval(function () {
        let a = Math.floor(Math.random() * 6);
        let b = Math.floor(Math.random() * 6);
        let c = Math.floor(Math.random() * 6);
        let d = Math.floor(Math.random() * 6);
        let e = Math.floor(Math.random() * 6);
        let f = Math.floor(Math.random() * 6);
        obj.setData({
          one_img: obj.data.arr[a],
          two_img: obj.data.arr[b],
          three_img: obj.data.arr[c],
          four_img: obj.data.arr[d],
          five_img: obj.data.arr[e],
          six_img: obj.data.arr[f],
          flag:false,
          A:a + 1,
          B:b + 1,
          C:c + 1,
          D:d + 1,
          E:e + 1,
          F:f + 1,
          NumberArr :[a + 1, b + 1, c + 1, d + 1, e + 1, f + 1],
          txt:'',
        })
      }, 50);
    }
      setTimeout(() => {
      clearInterval(obj.data.timer);
      obj.setData({
        total:0
      })  
      for (var j = 0; j < 6; j++) {
        if(obj.data.NumberArr[j] == 4){
          obj.data.total ++;
        }
        obj.setData({
          isfour : obj.data.total
        })        
      }

      //点数4的个数为0
      if(obj.data.isfour == 0){
        obj.setData({
          num1:0,
          num2:0,
          num3:0,
          num5:0,
          num6:0,
        })          
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 1){
            obj.data.num1 ++;
          }     
        }
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 2){
            obj.data.num2 ++;
          }     
        }        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 3){
            obj.data.num3 ++;
          }     
        }        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 5){
            obj.data.num5 ++;
          }     
        }
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 6){
            obj.data.num6 ++;
          }     
        }
        if(obj.data.A == 1 && obj.data.B == 1 && obj.data.C == 1 && obj.data.D == 1 && obj.data.E == 1 && obj.data.F == 1){
          obj.setData({
            M :'遍地锦'
          })  
        }
        else if(obj.data.A == 2 && obj.data.B == 2 && obj.data.C == 2 && obj.data.D == 2 && obj.data.E == 2 && obj.data.F == 2){
          obj.setData({
            M :'六杯黑'
          })  
        }
        else if(obj.data.A == 3 && obj.data.B == 3 && obj.data.C == 3 && obj.data.D == 3 && obj.data.E == 3 && obj.data.F == 3){
          obj.setData({
            M :'六杯黑'
          })  
        }
        else if(obj.data.A == 5 && obj.data.B == 5 && obj.data.C == 5 && obj.data.D == 5 && obj.data.E == 5 && obj.data.F == 2){
          obj.setData({
            M :'六杯黑'
          })  
        }
        else if(obj.data.A == 6 && obj.data.B == 6 && obj.data.C ==6 && obj.data.D == 6 && obj.data.E == 6 && obj.data.F == 6){
          obj.setData({
            M :'六杯黑'
          })  
        }
        else if( obj.data.num1 == 5 ||  obj.data.num2 == 5 ||  obj.data.num3 == 5 ||  obj.data.num5 == 5 ||  obj.data.num6 == 5){
          obj.setData({
            M :'五子登科'
          })            
        }
        else if( obj.data.num1 == 4 ||  obj.data.num2 == 4 ||  obj.data.num3 == 4 ||  obj.data.num5 == 4 ||  obj.data.num6 == 4){
          obj.setData({
            M :'四进'
          })            
        }
        else{
          obj.setData({
            M :'无奖'
          })  
        }
      }

      //点数为4的个数为1
      if(obj.data.isfour == 1){
        obj.setData({
          num1:0,
          num2:0,
          num3:0,
          num5:0,
          num6:0,
        })  
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 1){
            obj.data.num1 ++;
          }     
        }
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 2){
            obj.data.num2 ++;
          }     
        }        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 3){
            obj.data.num3 ++;
          }     
        }        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 5){
            obj.data.num5 ++;
          }     
        }
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 6){
            obj.data.num6 ++;
          }     
        }    
        if( obj.data.num1 == 5 || obj.data.num2 == 5 ||  obj.data.num3 == 5 ||  obj.data.num5 == 5 ||  obj.data.num6 == 5){
          obj.setData({
            M :'五子登科'
          })            
        }
        else if( obj.data.num1 == 1 &&  obj.data.num2 == 1 &&  obj.data.num3 == 1 &&  obj.data.num5 == 1 &&  obj.data.num6 == 1)  {
          obj.setData({
            M :'对堂'
          })           
        }   
        else if( obj.data.num1 == 4 ||  obj.data.num2 == 4 ||  obj.data.num3 == 4 ||  obj.data.num5 == 4 ||  obj.data.num6 == 4)  {
          obj.setData({
            M :'四进'
          })           
        }
        else{
          obj.setData({
            M :'一秀'
          })  
        }          
      }

      //点数为4的个数为2
      if(obj.data.isfour == 2){
        obj.setData({
          num1:0,
          num2:0,
          num3:0,
          num5:0,
          num6:0,
        })  
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 1){
            obj.data.num1 ++;
          }     
        }
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 2){
            obj.data.num2 ++;
          }     
        }        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 3){
            obj.data.num3 ++;
          }     
        }        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 5){
            obj.data.num5 ++;
          }     
        }
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 6){
            obj.data.num6 ++;
          }     
        }  
        if( obj.data.num1 == 5 ||  obj.data.num2 == 5 ||  obj.data.num3 == 5 ||  obj.data.num5 == 5 ||  obj.data.num6 == 5){
          obj.setData({
            M :'五子登科'
          })            
        }
        else{
          obj.setData({
            M :'二举'
          }) 
        } 
      }

      //点数为4的个数为3
      if(obj.data.isfour == 3){
        obj.setData({
          num1:0,
          num2:0,
          num3:0,
          num5:0,
          num6:0,
        })  
        obj.setData({
          M :'三红'
        }) 
      }

       //点数为4的个数为4
      if(obj.data.isfour == 4){
        obj.setData({
          num1:0,
          num2:0,
          num3:0,
          num5:0,
          num6:0,
        })  
        obj.setData({
          num1:0,
          num2:0,
          num3:0,
          num5:0,
          num6:0,
        })  
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 1){
            obj.data.num1 ++;
          }     
        }
        if( obj.data.num1 == 2){
          obj.setData({
            M :'状元插金花'
          }) 
        }
        else{
          obj.setData({
            M :'状元'
          })          
        }
      }

      //点数为4的个数为5
      if(obj.data.isfour == 5){
        obj.setData({
          M :'五王'
        })   
      }

        //点数为4的个数为6
      if(obj.data.isfour == 6){
        obj.setData({
          M :'六杯红'
        })   
      }
        obj.setData({
          msg:'下位玩家',
          flag:true,
          txt: '获得：'+obj.data.M + ' ! ! !'
          
      })
    }, 1000);
    },
    
    

  logBtn1:function(){
    wx.navigateTo({
      url:'/pages/award/award',
  })
  },
})


