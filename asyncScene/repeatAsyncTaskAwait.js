/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-03-28 13:43:11
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-03-29 19:08:30
 * @FilePath: /js-practice/asyncScene/repeatAsyncTaskAwait.js
 * @Description: 基于async/await实现异步任务错误重试n次
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

/**
 *
 *
 * @description 定义异步任务
 */
function asyncFetch() {
  return new Promise((resolve, reject) => {
    console.log("do asyncFetch");
    setTimeout(() => {
      reject(new Error());
      //resolve(1);
    }, 0);
  });
}

/**
 * @description 异步任务控制函数
 */
async function asyncTryMultipleTimes(task, times = 0) {
  // 返回一个promise，resolve则直接成功，如果是reject，则需要判断
  let finallError = null;
  do {
    try {
      await task();
    } catch (e) {
      times--;
      finallError = e;
    }
  } while (times >= 1);
  throw finallError;
}

asyncTryMultipleTimes(asyncFetch, 3).then(
  () => {
    console.log("data end");
  },
  () => {
    console.log("err end");
  }
);
