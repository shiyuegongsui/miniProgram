//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [],
    loadMore: {
      loading: true,
      finished: false
    }
  },
  //事件处理函数
  bindViewTap: function () {
  },
  onLoad: function () {


    // wx.$ajax({
    //   url: "",
    //   type: "get",
    //   data: {},
    //   success: function () { }
    // })
  },
  getUserInfo: function (e) {
  }
})
