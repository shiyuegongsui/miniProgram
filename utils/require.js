function ajax(options) {
    wx.request({
        url: options.url,
        data: options.data,
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        method: options.type ? options.type.toUpperCase() : "POST",
        success: function (res) {
            options.success(res.data);
        },
        fail: function (error) {
            wx.showToast({
                icon: 'none',
                title: '网络错误',
                duration: 1000
            })
        }
    })
}
module.exports = {
    ajax: ajax
}