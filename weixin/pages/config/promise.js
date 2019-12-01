import { SUCCESS, FAIL, HOSTNAME } from "./base";
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const FORM = 'FORM';
const DELETE = 'DELETE';
const host = HOSTNAME;
function api(method, url, data) {
let token=wx.getStorageSync('token');

  // let contentType =method.toUpperCase()=='POST'?      'application/x-www-form-urlencoded':'application/json'
  let promise = new Promise((resolve, reject) => {
    // let header = {
    //   'content-type': 'application/json',
    // };

     wx.request({
      url: host+url,
      method: method,
      // dataType: 'json',
      data:data,
       header: (method === POST || method == PUT) ? {
         'content-type':'application/x-www-form-urlencoded',
         token: token
       }:{
           'content-type': 'application/json',
           token: token
         },
      success: (res) => {
        // console.log(res)

        if (res.data.code == SUCCESS) {
          resolve(res.data);
        } else if (res.data.code == FAIL) {
          reject(res.data);
        }
      }
    })
  })
  return promise;

  // function _get(url,data){
  //   return api(url,'get',data)
  // }
  // function _post(url, data) {
  //   return api(HOSTNAME+url, 'post', data)
  // }
}

module.exports= {api}


/*
封装fetch

params：  method：请求方式  String 必填
 GET  POST  DELETE
 url：地址    String    必填
 data：数据  对象
 */
/**
* POST请求，
* URL：接口
* postData：参数，json类型
* doSuccess：成功的回调函数
* doFail：失败的回调函数
*/

// import { SUCCESS, FAIL, HOSTNAME } from "./base";
// const GET = 'GET';
// const POST = 'POST';
// const PUT = 'PUT';
// const FORM = 'FORM';
// const DELETE = 'DELETE';

// const host = HOSTNAME;

// function api(method, url, data) {
//   return new Promise(function (resolve, reject) {
//     let header = {
//       'content-type': 'application/json',
//     };
//     wx.request({
//       url: host + url,
//       method: method,
//       data: (method === POST || method === PUT) ? JSON.stringify(data) : data,
//       header: header,
//       success(res) {
//         //请求成功
//         //判断状态码---code状态根据后端定义来判断
//         if (res.data.code == SUCCESS) {
//           resolve(res.data);
//         } else if (res.data.code == FAIL) {
//           reject(res.data);
//         }
//       }
//     })
//   })
// };

// export { api }