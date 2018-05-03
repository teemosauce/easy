const defaultUrl = 'https://www.mash5.cn/mashWebServices/service/mash5/rest'

module.exports = {
  post(url, data) {
    if (typeof url == 'object') {
      data = url
      url = data.url
      delete data.url
    }

    return new Promise((resolve, reject) => {
      wx.request({
        url: url || defaultUrl,
        method: 'POST',
        data: data,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        dataType: 'json',
        success(e) {
          resolve(e.data)
        },
        fail(e) {
          reject(e)
        }
      })
    })
  },

  get: function (url) {
    if (typeof url == 'object') {
      data = url
      url = data.url
      delete data.url
    }

    return new Promise((resolve, reject) => {
      wx.request({
        url: url || defaultUrl,
        method: 'GET',
        data: data,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        dataType: 'json',
        success(e) {
          resolve(e.data)
        },
        fail(e) {
          reject(e)
        }
      })
    })
  }
}