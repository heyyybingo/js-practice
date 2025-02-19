/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-14 16:39:12
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-16 13:53:48
 * @FilePath: /js-practice/asyncScene/eventloop/nodetimeout.js
 * @Description: 这是一个node事件循环的测试，关于timeout，promise的顺序
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */
function callPromise(text) {
  Promise.resolve().then(() => {
    console.log(`call promise: ${text}`);
  });
  //   new Promise((resolve) => {
  //     resolve();
  //   }).then(() => {
  //     console.log(`call promise: ${text}`);
  //   });
}

setTimeout(() => {
  console.log("call setTimeout 1");
  Promise.resolve()
    .then(() => {
      console.log("call promise 1");
      return Promise.resolve();
    })
    .then(() => {
      console.log("call promise 2");
    });
}, 0);

setTimeout(() => {
  console.log("call setTimeout 2");
  Promise.resolve().then(() => {
    console.log("call promise 3");
  });
}, 0);
