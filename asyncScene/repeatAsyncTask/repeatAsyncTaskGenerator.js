/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-03-28 13:43:11
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-03-29 19:09:31
 * @FilePath: /js-practice/asyncScene/repeatAsyncTaskGenerator.js
 * @Description: 基于generator实现异步任务重试n次
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
 * 运行异步任务迭代器(不使用生成器委托的形式)
 * @param {*} taskGenerator
 */
function autoRun(taskGenerator) {
  return new Promise((resolve, reject) => {
    const it = taskGenerator();
    let result = it.next();
    function doTaskResult() {
      //console.log("doTask");
      if (result.done) {
        resolve(result.value);
        return;
      }
      const p = Promise.resolve(result.value);
      p.then((val) => {
        result = it.next(val);
        doTaskResult();
      }).catch((err) => {
        try {
          result = it.throw(err);
          doTaskResult();
        } catch (e) {
          reject(e);
        }
      });
    }
    doTaskResult();
  });
}
/**
 * @description 异步任务控制函数
 */
function* asyncTryMultipleTimes(task, times = 0) {
  let finallError = null;
  do {
    try {
      const result = yield task();
      // 提前退出
      return result;
    } catch (e) {
      times--;
      finallError = e;
    }
  } while (times >= 1);

  // 抛出错误
  throw finallError;
}

autoRun(function* () {
  try {
    const result = yield autoRun(
      asyncTryMultipleTimes.bind(null, asyncFetch, 1)
    );
    console.log("data end", result);
  } catch (e) {
    console.log("err end");
  }
});
