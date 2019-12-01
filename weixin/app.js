//app.js
import {api} from"./pages/config/promise.js";
import{SUCCESS} from"./pages/config/base.js";
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })


    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          api('GET', '/api/wxlogin', { code: res.code })
            .then(res => {
              //请求成功
              console.log(res);
              if (res.code == SUCCESS) {
                this.globalData.openid = res.openid;
              }

            }).catch(rej => {
              console.log(rej);
            })
        }

      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //更新购物车---判断有无--初始化goods：[]
  updateCart({gid,uid,cid,price,thumb,ganme}){
     if(!this.globalData.cart){
       this.globalData.cart={
         cid,
         uid,
         total:1,
         price,
         goods:[]
       }
     }
     //判断购物车有无商品
     let goods=this.globalData.cart.goods.filter(ele=>ele.gid==gid)[0];
     if(goods){
       goods.num++;

     }else{
       this.globalData.cart.goods.push({gid,num:1,status:1,price,gname,thumb})
     }
     
  },
// <wxs src="" module=""></>
// {{detail.fn(cart,)}}
  //goods里的数量--num
  goodsNum(){
   let num=0;
   if(this.globalData.cart){
     this.globalData.cart.goods.filter(ele => ele.gid == gid)[0];
      num=goods.num;
     
     }
   
  },
  globalData: {
    userInfo: null,
    openid:0,
    cart:null
  }
})