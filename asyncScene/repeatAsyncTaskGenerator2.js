/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-03-28 13:43:11
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-03-29 19:06:46
 * @FilePath: /js-practice/asyncScene/repeatAsyncTaskGenerator2.js
 * @Description: 基于generator实现异步任务重试n次,使用生成器委托
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

const asyncTryMultipleTimesGenerator = Symbol("asyncTryMultipleTimes");
/**
 *
 *
 * @description 定义异步任务
 */
function asyncFetch() {
  return new Promise((resolve, reject) => {
    console.log("do asyncFetch");
    setTimeout(() => {
      //reject(new Error());
      resolve(1);
    }, 0);
  });
}

/**
 * 运行异步任务迭代器
 * @param {*} taskGenerator
 */
function autoRun(taskGenerator) {
  const it = taskGenerator();
  let result = it.next();
  function doTaskResult() {
    //console.log("doTask");
    if (result.done) {
      return;
    }
    const p = Promise.resolve(result.value);
    p.then((val) => {
      result = it.next(val);
      doTaskResult();
    }).catch((err) => {
      result = it.throw(err);
      doTaskResult();
    });
  }
  doTaskResult();
  // return new Promise((resolve, reject) => {

  // });
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
    const result = yield* asyncTryMultipleTimes(asyncFetch, 2);
    console.log("data end", result);
  } catch (e) {
    console.log("err end", e);
  }
});
