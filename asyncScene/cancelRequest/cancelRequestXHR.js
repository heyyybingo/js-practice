/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-13 19:30:41
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-13 21:00:51
 * @FilePath: /js-practice/asyncScene/cancelRequest/cancelRequestXHR.js
 * @Description:实现一个取消请求的方法
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

function request(url, cancelCallback) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    let cancelRequest = (reason) => {
      console.log("do cancel request", reason);
      // 注意reject要在abort之前，因为onreadystatechange会在abort之后立即执行
      reject(reason);
      console.log("before xhr abort");
      xhr.abort();
      console.log("after xhr abort");
    };
    cancelCallback && cancelCallback(cancelRequest);
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        //status===0 的情况下，是未发送的
        if (xhr.status === 200 || xhr.status === 204) {
          resolve(xhr.responseText);
        } else {
          console.log("do reject in onreadystatechange");
          reject(xhr.status);
        }
      }
    };
  });
}
let cancel;
request("https://www.baidu.com", (c) => {
  cancel = c;
}).then(
  (data) => {
    console.log("success:", data);
  },
  (e) => {
    console.log("failure:", e);
  }
);
cancel("reason");
console.log("test");
