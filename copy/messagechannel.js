/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-05-09 10:46:36
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-05-09 12:59:11
 * @FilePath: /js-practice/copy/messagechannel.js
 * @Description:
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */
function deepCopy(obj) {
  return new Promise((resolve, reject) => {
    const { port1, port2 } = new MessageChannel();

    port1.onmessage = (e) => {
      resolve(e.data);
    };
    port2.postMessage(obj);
  });
}

const loop = {};
const obj = {
  a: 1,
  b: 2,
  c: undefined,
  // loop,
};
loop.c = obj;
deepCopy(obj).then((val) => {
  console.log(val, obj === val);
});

JSON.parse(JSON.stringify(obj));
