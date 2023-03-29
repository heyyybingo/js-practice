/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-03-28 13:28:44
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-03-29 14:44:33
 * @FilePath: /js-practice/asyncScene/asyncAndawaitLogSequence.js
 * @Description: async await 日志打印顺序
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");

/**
 *
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */
