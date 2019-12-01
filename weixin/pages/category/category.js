// pages/category/category.js
import { api } from "../../pages/config/promise.js";
import { SUCCESS, FAIL, IMAHOSTNAME, HOSTNAME } from "../../pages/config/base.js"
Page({
  "enablePullDownRefresh": 'jiazai',
  /**
   * 页面的初始数据
   */
  data: {
    cateGoods: [],
    cateleft:[],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
  },


  //发送请求--获取数据
  queryleft() {
    api('GET', '/api/index')
      .then(res => {
        // console.log(res)
        let data = res.data;
        if (res.code == SUCCESS) {
          this.cateleft = data;
          
          // console.log(this.cateGoods)
          for (let i = 0; i < this.cateleft.length; i++) {
            // this.cateleft[i].thumb = 'http://localhost' + this.cateleft[i].thumb.replace(/\\/, '/');
            // console.log(this.cateleft[i].thumb)
            for (let j = 0; j < this.cateleft[i].goods.length; j++) {
              this.cateleft[i].goods[j].gthumb = 'http://localhost' + this.cateleft[i].goods[j].gthumb.replace(/\\/, '/');
              // console.log(this.cateGoods[i].goods[j].gthumb)


            }
          }

          // console.log(this.cateGoods);

          //获取数据--调用
          this.setData({
            cateleft: this.cateleft,

          })


        }
      })
  },
  //发送请求--获取数据
  querygoods(type) {

    api('GET', '/api/cate/'+type)
      .then(res => {
        wx.showLoading({
          title: '数据加载成功',
       
        })
        setTimeout(function(){
          wx.hideLoading()
        },1000);
        // console.log(res)
        let data = res.data;
        if (res.code == SUCCESS) {
          this.cateGoods = data;
          // console.log(this.cateGoods)
          for (let i = 0; i < this.cateGoods.length; i++) {
            // console.log(goods)
            this.cateGoods[i].thumb = 'http://localhost' + this.cateGoods[i].thumb.replace(/\\/, '/');
            for (let j = 0; j < this.cateGoods[i].goods.length; j++) {
              this.cateGoods[i].goods[j].gthumb = 'http://localhost' + this.cateGoods[i].goods[j].gthumb.replace(/\\/, '/');;
              // console.log(this.cateGoods[i].goods[j].gthumb)


            }
          }

          // console.log(this.cateGoods);

          //获取数据--调用
          this.setData({
            cateGoods: this.cateGoods,
          

          })


        }
      })
  },
  //切换分类
  change: function (e) {
    // console.log(e);
    this.type = e.target.dataset.id;
    // console.log(this.type)
      this.querygoods(this.type)
  },

  jiazai() {
    wx.startPullDownRefresh({
      success: (res => {
        console.log(res.data)
      })
    });
    wx.stopPullDownRefresh({

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    this.queryleft();
    this.querygoods(30);


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
    this.jiazai();
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

