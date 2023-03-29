/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-03-29 14:48:09
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-03-29 21:39:40
 * @FilePath: /js-practice/optimization/debounce.js
 * @Description: 防抖函数,n秒后触发，重复触发点则重新计时
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

/**
 *
 * @param {*} fn
 * @param {*} timeout
 * @returns
 */
function debounce(fn, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...arguments);
    }, delay);
  };
}

function test(a, b, c) {
  console.log("call test", a, b, c);
}
const debounceTest = debounce(test, 2000);
debounceTest(1, 2, 3);
debounceTest(3, 2, 1);
debounceTest(8, 8, 8);
setTimeout(() => {
  debounceTest(9, 9, 9);
}, 1900);
