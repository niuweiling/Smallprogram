// pages/goodsdetail/goodsdetail.js
import { SUCCESS, FAIL, HOSTNAME, IMGHOSTNAME } from "../config/base.js";
import { api } from "../config/promise.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsdetail: [],
    bannerimg:[],
    detailimg:[],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  // 获取商品详情
  querygoods(id) {
    api('GET', '/api/index/'+id)
      .then(res => {
       
        //请求成功
        let goodsdetail = res.data;
        // console.log(goodsdetail);
        let image = goodsdetail[0].banner.split(',');
        image = image.map(ele => 'http://localhost' + ele.replace(/\\/, '/'));
        // goodsdetail[0].banner=image
       let bannerimg= image;

        let detail = goodsdetail[0].detail.split(',');
        detail = detail.map(ele => 'http://localhost' + ele.replace(/\\/, '/'));
        let detailimg = detail;

    
        // 设置catelist的值
        this.setData({
          goodsdetail:goodsdetail,
          bannerimg:image,
          detailimg:detail
        })

        // console.log(goodsdetail)
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    
      // let id=options.id;//获取goods表id
      // this.id=setData({
    //   // id:id
    // })
    // this.setData({
    //   id:options.id,
    // });
    this.querygoods(options.id);
    
  },
  addCart(){
    let { id, sale, thumb, gnme}=this.data.goods;
    api('POST','/api/cart',{gid:id,sale})
    .then(res=>{
      // console.log(res);
      if(res.code==SUCCESS){
        let {cid,uid}=res.data;
        app.updateCart({id,sale,thumb,gnme,cid,uid})
      }
  
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