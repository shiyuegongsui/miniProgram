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
  bindViewTap: function () { },
  onLoad: function () {
    console.log(this.customData.hi);

    this.customData.hi = 2

    console.log(this.customData.hi);

    wx.$Dialog.confirm({
      title: '标题',
      message: '弹窗内容'
    }).then(() => {
      // on confirm
    }).catch(() => {
      // on cancel
    });

    // wx.$ajax({
    //   url: "",
    //   type: "get",
    //   data: {},
    //   success: function () { }
    // })
  },
  getUserInfo: function (e) { },

  showPop() {

    var myShow = this.selectComponent('#myShow');
    //访问属性,使用data访问内部属性和组件属性

    myShow.setData({
      show: true
    })
    console.info(myShow);

  },

})