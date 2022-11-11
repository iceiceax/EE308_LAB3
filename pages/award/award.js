// pages/award/award.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalStatus: false,
    list: [
      {
        id: 0,
        name : "        ",
        introduce: "                点击查看奖项 ",
        src: '../../image/zhuangyuan.png',
        showModalStatus: false,
        catalog: [
          { section: "1. 现金500" },
        ]
      },
      {
        id: 1,
        name: "",
        introduce: "                点击查看奖项 ",
        src: '../../image/duitang.png',
        showModalStatus: false,
        catalog: [
          { section: "1. 现金100" },
          { section: "2. 现金100" },
        ]
      },
      {
        id: 2,
        name: "",
        introduce: "                点击查看奖项 ",
        src: '../../image/sanhong.png',
        showModalStatus: false,
        catalog: [
          { section: "1. 现金50" },
          { section: "2. 现金50" },
          { section: "3. 现金50" },
          { section: "4. 现金50" },
        ]
      },
      {
        id: 3,
        name: "",
        introduce: "                点击查看奖项 ",
        src: '../../image/sijin.png',
        showModalStatus: false,
        catalog: [
          { section: "1. 现金20" },
          { section: "2. 现金20" },
          { section: "3. 现金20" },
          { section: "4. 现金20" },
          { section: "5. 现金20" },
          { section: "6. 现金20" },
          { section: "7. 现金20" },
          { section: "8. 现金20" },
        ]
      },
      {
        id: 4,
        name: "",
        introduce: "                点击查看奖项 ",
        src: '../../image/erju.png',
        showModalStatus: false,
        catalog: [
          { section: "1. 现金10" },
          { section: "2. 现金10" },
          { section: "3. 现金10" },
          { section: "4. 现金10" },
          { section: "5. 现金10" },
          { section: "6. 现金10" },
          { section: "7. 现金10" },
          { section: "8. 现金10" },
          { section: "9. 现金10" },
          { section: "10. 现金10" },
          { section: "11. 现金10" },
          { section: "12. 现金10" },
          { section: "13. 现金10" },
          { section: "14. 现金10" },
          { section: "15. 现金10" },
          { section: "16. 现金10" },
        ]
      },
      {
        id: 5,
        name: "",
        introduce: "                点击查看奖项 ",
        src: '../../image/yixiu.png',
        showModalStatus: false,
        catalog: [
          { section: "1. 现金5" },
          { section: "2. 现金5" },
          { section: "3. 现金5" },
          { section: "4. 现金5" },
          { section: "5. 现金5" },
          { section: "6. 现金5" },
          { section: "7. 现金5" },
          { section: "8. 现金5" },
          { section: "9. 现金5" },
          { section: "10. 现金5" },
          { section: "11. 现金5" },
          { section: "12. 现金5" },
          { section: "13. 现金5" },
          { section: "14. 现金5" },
          { section: "15. 现金5" },
          { section: "16. 现金5" },
          { section: "17. 现金5" },
          { section: "18. 现金5" },
          { section: "19. 现金5" },
          { section: "20. 现金5" },
          { section: "21. 现金5" },
          { section: "22. 现金5" },
          { section: "23. 现金5" },
          { section: "24. 现金5" },
          { section: "25. 现金5" },
          { section: "26. 现金5" },
          { section: "27. 现金5" },
          { section: "28. 现金5" },
          { section: "29. 现金5" },
          { section: "30. 现金5" },
          { section: "31. 现金5" },
          { section: "32. 现金5" },
        ]
      },
    ]
  
  },

  /**
   * 自己添加的 powerDrawer
   */
  powerDrawer: function (e) {
    console.log("clicked");

    var currentStatu = e.currentTarget.dataset.statu;
    var index = e.currentTarget.id;

    // 关闭
    if (currentStatu == 'close') {
      this.data.list[index].showModalStatus = false;
      this.setData({
        showModalStatus: false,
        list: this.data.list,
      });
    }

    // 显示
    if (currentStatu == 'open') {
      this.data.list[index].showModalStatus = true;
      this.setData({
        showModalStatus: true,
        list: this.data.list,
      });
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
  onShareAppMessage: function () {
  
  },

  
})