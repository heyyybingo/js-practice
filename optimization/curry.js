/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-05-09 13:35:22
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-05-09 14:42:44
 * @FilePath: /js-practice/optimization/curry.js
 * @Description:函数柯里化
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */
function curry(fn) {
  const argsLen = fn.length;
  let argArray = [];
  let curried = function (...args) {
    argArray = argArray.concat(args);
    if (argArray.length >= argsLen) {
      return fn.apply(this, argArray);
    } else {
      return curried;
    }
  };
  return curried;
}

function test(a, b, c) {
  return a + b + c;
}

let curriedTest = curry(test);
console.log(curriedTest(1)(2)(3));
