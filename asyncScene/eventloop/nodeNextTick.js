/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-14 16:39:12
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-14 17:21:38
 * @FilePath: /js-practice/asyncScene/eventloop/nodeNextTick.js
 * @Description: 这是一个node事件循环的测试，关于nexttick，setimmediate的顺序
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

callPromise("1");
callPromise("2");
// setTimeout(() => {
//   console.log("call setTimeout 1");
// }, 0);
// setInterval(() => {
//   console.log("call setInterval 1");
// }, 0);
process.nextTick(() => {
  console.log("call nextTick 1");
  process.nextTick(() => {
    console.log("call nextTick 2");
  });
});

setImmediate(() => {
  console.log("call setImmediate 1");
  setTimeout(() => {
    console.log("call setTimeout 2");
  }, 0);
  //   process.nextTick(() => {
  //     console.log("call nextTick 3");
  //   });
  callPromise(3);
  setImmediate(() => {
    console.log("call setImmediate 3");
  });
});
setImmediate(() => {
  console.log("call setImmediate 2");
});
