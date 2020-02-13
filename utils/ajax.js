

let baseUrl = "https://api.fjdaze.com/zx";
if (__wxConfig.envVersion == 'develop') {
    baseUrl = "https://api.fjdaze.com/zx";
} else if (__wxConfig.envVersion == 'release') {
    baseUrl = "https://api.fjdaze.com/zx";
} else {
    baseUrl = "https://api.fjdaze.com/zx";
}

console.log(__wxConfig.envVersion);
console.log(baseUrl);



wx.$baseUrl = baseUrl;

function ajax(method, url, data, loading, ignoreToken) {
    return new Promise((resolve, reject) => {

        if (loading) {
            wx.showLoading({ title: '数据加载中' });
        }
        let token = wx.getStorageSync("mixiangtoken");

        if (data.userId === '') {
            let userId = wx.getStorageSync("userId");
            if (userId) {
            } data.userId = userId;
        }
        if (!ignoreToken && !token) {
            login(() => {
                ajax(method, url, data, loading).then((res) => {
                    if (res.code == 200) {
                        resolve(res);
                    }
                });
            });
            return;
        }
        wx.request({
            url: baseUrl + url,
            data: data,
            header: {
                'content-type': 'application/json',
                "token": token
            },
            method: method ? method.toUpperCase() : "POST",
            success: function (res) {

                if (res.statusCode == 200) {
                    if (res.data.code == 200) {
                        resolve(res.data);
                        return;
                    }

                    //未登录 需要重新登录
                    else if (res.data.code == 4000) {

                        login(() => {
                            ajax(method, url, data, loading).then((res) => {
                                if (res.code == 200) {
                                    resolve(res);
                                }
                            });
                        });
                        return;
                    } else {
                        wx.$msg(res.data.msg);
                        reject();
                    }

                } else {
                    wx.$msg('网络错误' + res.statusCode);
                }
            },
            fail: function (error) {
                wx.$msg("网络错误");

                reject(error);
            },
            complete: function () {

                if (loading) {
                    setTimeout(() => {
                        wx.hideLoading();
                    }, 500)
                }

            }
        })
    });
}

function login(callback) {

    wx.login({
        success(res) {
            if (res.code) {
                post("/tool/b/user/wxAppletLogin", {
                    code: res.code
                }, false, true).then((res) => {
                    wx.setStorageSync('mixiangtoken', res.result.token);


                    let userId = wx.getStorageSync("userId");
                    if (!userId) {
                        wx.setStorageSync('userId', res.result.userId);
                    }
                    callback();
                })

            }
        }
    })

}

function get(url, data, loading, ignoreToken) {
    return ajax("GET", url, data, loading, ignoreToken);
}

function post(url, data, loading, ignoreToken) {
    return ajax("POST", url, data, loading, ignoreToken);
}

module.exports = {
    get: get,
    post: post
}