//app.js
//全局注入ajax

import require from "./utils/require.js";
wx.$ajax = require.ajax;

import Dialog from './components/vant-weapp/dialog/dialog';
wx.$Dialog = Dialog;

App({
  onLaunch: function () {

  },
  globalData: {
    userInfo: null
  }
})