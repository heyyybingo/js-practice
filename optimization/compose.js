/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-05-17 13:44:40
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-05-17 13:44:44
 * @FilePath: /js-practice/optimization/compose.js
 * @Description:
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */
function compose(...funcs) {
  if (funcs.length === 0) {
    // infer the argument type so it is usable in inference down the line
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

function a() {
  console.log("a");
}
function b() {
  console.log("b");
}

compose(a, b)();
