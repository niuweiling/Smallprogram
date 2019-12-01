// pages/cart/cart.js
import { api } from "../../pages/config/promise.js";
import { SUCCESS, FAIL, IMAHOSTNAME, HOSTNAME } from "../../pages/config/base.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateGoods:[]

  },
  //发送请求--获取数据
  querycart() {
    api('GET', '/api/cart/12')
      .then(res => {
        console.log(res)
        wx.showLoading({
          title: '数据加载成功',

        })
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);
        // console.log(res)
        let data = res.data;

        if (res.code == SUCCESS) {
          let cartthumb = res.data.goods;
          for (let i = 0; i < cartthumb.length;i++){
            cartthumb[i].gthumb = 'http://localhost' + cartthumb[i].gthumb.replace(/\\/, '/');
            console.log(cartthumb[i].gthumb);
          }
      
         
          // let image = cartthumb.split(',');

          // image = image.map(ele => 'http://localhost' + ele.replace(/\\/, '/'));

         
       
        

          //获取数据--调用
          this.setData({
            cateGoods: cartthumb,


          })


        }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.querycart();
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