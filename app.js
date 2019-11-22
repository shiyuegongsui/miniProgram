//app.js
//全局注入ajax

import require from "./utils/require.js";
wx.$ajax = require.ajax;


App({
  onLaunch: function () {
  },
  globalData: {
    userInfo: null
  }
})