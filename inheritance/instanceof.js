/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-05-09 13:25:03
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-05-09 13:29:23
 * @FilePath: /js-practice/inheritance/instanceof.js
 * @Description: 实现一个instanceof函数
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

// a 是一个对象示例
// b 正常来说是一个构造函数
function instanceOf(a, b) {
  const protoType = b.prototype;
  let protoPointer = Object.getPrototypeOf(a);
  while (protoPointer && protoPointer !== protoType) {
    protoPointer = Object.getPrototypeOf(protoPointer);
  }

  return protoPointer === protoType;
}

function Car() {}
function Fruit() {}
const catobj = new Car();
const f = new Fruit();
console.log(catobj instanceof Car, instanceOf(f, Car));
