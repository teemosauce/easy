//index.js
//获取应用实例
const app = getApp()
import User from '../../api/user.js'

Page({
  data: {
    account: '18511835027',
    password: '111111',
    tenants: [],
    index: 0,
    tenantNames: []
  },

  tenantCodeChanged: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  accountInput: function (e) {
    this.setData({
      account: e.detail.value
    })
  },

  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  login: function () {
    const _this = this
    // wx.showLoading({
    //   title: '正在登录中...'
    // })

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     wx.showModal({
    //       title: '信息',
    //       content: res.code,
    //     })
    //   }
    // })

    // return;

    User.login(this.data.account, this.data.password).then(r => {
      
      if (r.success) {
        if (r.object) {
          const tenantList = r.object.list
          if (Array.isArray(tenantList) && tenantList.length > 0) {
            wx.setStorage({
              key: 'TENANTS',
              data: tenantList,
              success() {
                wx.showModal({
                  title: '提示',
                  content: r.object.name + '登录成功！'
                })
              },
              fail(e) {
                wx.showModal({
                  title: '错误提示',
                  content: e
                })
              },
              complete(){
                wx.hideLoading()
              }
            })
          }
        }
      } else {
        wx.showModal({
          title: '错误提示',
          content: r.message
        })
      }
    }, err => {
      wx.hideLoading()
      wx.showModal({
        title: '错误提示',
        content: err.message
      })
    })
  },

  chooseImage: function () {
    const _this = this
    wx.chooseImage({
      count: 1,
      success(res) {
        _this.setData({
          backgroundSrc: res.tempFilePaths[0]
        })
      },
      fail() {
      }
    })
  },

  onLoad: function () {
      // console.log(wx.getStorageSync('TENANTS'))
    console.log('onLoad')
  },

  onReady:function(){
    console.log('onReady')
  },

  onShow:function(x){
    console.log('onShow', x)
  }
})
