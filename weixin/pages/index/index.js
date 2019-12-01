//index.js
//
import {api} from "../config/promise.js";
import { SUCCESS, FAIL, IMAHOSTNAME, HOSTNAME } from "../../pages/config/base.js"
const app = getApp()
const order = ['demo1', 'demo2', 'demo3']

// Page({
//   data: {
//     motto: 'Hello World!',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
Page({
  // onShareAppMessage() {
  //   return {
  //     title: 'swiper',
  //     path: 'page/component/pages/swiper/swiper'
      
  //   }
  // },
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },

  data: {
    background: [],
    cateGoods: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    toView: 'green'
  },
  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },
  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  queryBanner(){
    api('GET','/api/index/67')
    .then(res=>{
      // console.log(res);
      if (res.code == SUCCESS) {
        // console.log(res)

        let image = res.data[0].banner.split(',');

        image = image.map(ele => 'http://localhost' + ele.replace(/\\/, '/'));
        this.setData({
          background: image,

        })


      }
    })
    // wx.request({
    //   url: 'http://localhost/fruit-end/public/index.php/api/index/17',
    //   method:'get',
    //   dataType:'json',
    //   success:(res)=>{
    //     if(res.data.code==200){
    //       // console.log(res)
          
    //       let image=res.data.data[0].banner.split(',');
         
    //       image = image.map(ele => 'http://localhost' + ele.replace(/\\/,'/'));
    //       this.setData({
    //         background: image,

    //       })

         
    //     }
    //       }
   

      
    // })
  },


  querygoods() {
    api('GET','/api/index')
    .then(res=>{
      this.cateGoods = res.data;
      for (let i = 0; i < this.cateGoods.length; i++) {

        // console.log(goods)
        for (let j = 0; j < this.cateGoods[i].goods.length; j++) {
          this.cateGoods[i].goods[j].gthumb = 'http://localhost' + this.cateGoods[i].goods[j].gthumb.replace(/\\/, '/');;
          // console.log(this.cateGoods[i].goods[j].gthumb)


        }
      }
      this.setData({
        cateGoods: this.cateGoods,

      })
    })
    // wx.request({
    //   url: 'http://localhost/fruit-end/public/index.php/api/index',
    //   method: 'get',
    //   dataType: 'json',
    //   success: (res) => {
    //     // console.log(res)
         
    //     if (res.data.code == 200) {
    //      let data=res.data;
    //       this.cateGoods = data.data;
    //       // console.log(this.cateGoods)

     
    //       for(let i=0;i<this.cateGoods.length;i++){
            
    //         // console.log(goods)
    //         for (let j = 0; j < this.cateGoods[i].goods.length; j++) {
    //           this.cateGoods[i].goods[j].gthumb = 'http://localhost' + this.cateGoods[i].goods[j].gthumb.replace(/\\/, '/');;
    //           // console.log(this.cateGoods[i].goods[j].gthumb)


    //         }
    //       }
          
    //       // console.log(this.cateGoods);

    //       this.setData({
    //         cateGoods: this.cateGoods,

    //       })
         

    //     }
    //   }



    // })
  },

  onLoad(){
    //需要更新------show
    this.queryBanner();
    this.querygoods();
  }
})