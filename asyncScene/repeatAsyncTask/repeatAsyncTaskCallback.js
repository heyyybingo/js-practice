/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-03-28 13:43:11
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-03-29 16:17:00
 * @FilePath: /js-practice/asyncScene/repeatAsyncTaskCallback.js
 * @Description: 基于callback实现异步任务错误重试n次
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

/**
 *
 * @param {*} cb
 * @description 定义异步任务
 */
function asyncFetch(cb) {
  console.log("do asyncFetch");
  setTimeout(() => {
    cb(new Error(), {});
  }, 0);
}

/**
 * @description 异步任务控制函数
 */
function asyncTryMultipleTimes(task, cb, times = 0) {
  // 定义一个新的callback，递归处理，如果times已经小于等于1，则执行回调；不用递归也行
  function callbackWrapper(err, data) {
    if (err && times > 1) {
      asyncTryMultipleTimes(task, cb, times - 1);
    } else {
      cb(err, data);
    }
  }
  task(callbackWrapper);
}

asyncTryMultipleTimes(
  asyncFetch,
  (err, data) => {
    if (err) {
      console.log("err end");
    } else {
      console.log("data end");
    }
  },
  3
);
