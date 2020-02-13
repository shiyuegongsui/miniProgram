//app.js
//全局注入ajax

import ajax from "./utils/ajax.js";
wx.$ajax = ajax;


import Dialog from './components/vant-weapp/dialog/dialog';
wx.$Dialog = Dialog;

App({
  onLaunch: function () {

  },
  globalData: {
    userInfo: null
  }
})