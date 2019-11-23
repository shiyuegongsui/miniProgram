//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show: false,
    list: [],
    loadMore: {
      loading: true,
      finished: false
    }
  },
  customData: {
    hi: 'MINA'
  },
  //事件处理函数
  bindViewTap: function () {
  },
  onLoad: function () {
    console.log(this.customData.hi);

    this.customData.hi = 2

    console.log(this.customData.hi);
    // wx.$ajax({
    //   url: "",
    //   type: "get",
    //   data: {},
    //   success: function () { }
    // })
  },
  getUserInfo: function (e) {
  },

  showPop() {

    this.setData({
      show: true
    })
  },
  cancel() {
    this.setData({
      show: false
    })
  }
})
