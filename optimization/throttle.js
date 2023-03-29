/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-03-29 14:48:13
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-03-29 21:40:45
 * @FilePath: /js-practice/optimization/throttle.js
 * @Description: 实现一个节流函数，n秒内只能执行一次
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

function throttle(fn, delay) {
  let isStop = false;
  return function () {
    if (isStop) {
      return;
    }
    isStop = true;
    fn.call(this, ...arguments);
    setTimeout(() => {
      isStop = false;
    }, delay);
  };
}

function test(a, b, c) {
  console.log("call test", a, b, c);
}

const throttleTest = throttle(test, 1000);

throttleTest(1, 1, 1);
throttleTest(2, 2, 2);
setTimeout(() => {
  throttleTest(1, 1, 2);
}, 1100);
