// pages/my/my.js
import { SUCCESS, FAIL, HOSTNAME, IMGHOSTNAME } from "../config/base.js";
import { api } from "../config/promise.js"

// const app = getApp();
// let globalData = app.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //获取用户信息
  // onGotUserInfo: function (e) {
  //   if (e.detail.userInfo) {
  //     let userInfo = e.detail.userInfo;
  //     globalData.userInfo = userInfo;
  //     let data = Object.assign({}, userInfo, { openid: globalData.openid });
  //     console.log(data);
  //     api('POST', '/api/wxlogin', data)
  //       .then(res => {
  //         //请求成功
  //         if (res.code == SUCCESS) {
  //           wx.setStorageSync('token', res.token);
  //           api('GET', '/api/cart/12').then(res => {
  //             // console.log(res);
  //             if (res.code == SUCCESS && res.data) {
  //               globalData.cart = res.data;

  //             }
  //           })
  //           // wx.switchTab({
  //           //   url: '/pages/my/my',
  //           // })
  //         }
  //       })
  //   } else {
  //     wx.showModal({
  //       title: '拒绝授权',
  //       content: '请登录个人账号！',
  //     })
  //   }
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let token=wx.getStorageSync('token');
    if(!token){
      wx.navigateTo({
        url: '/pages/login/login?redirect=/page/login/login',
      })
    }
    wx.getUserInfo({
    //   if(res.code== SUCCESS){
    //   globalData.cart = res.data;

    // }
    })


  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})