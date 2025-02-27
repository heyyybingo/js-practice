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
let ii=1
function asyncFetch() {
  const p= new Promise((resolve, reject) => {
    console.log("do asyncFetch");
    setTimeout(() => {
      reject(new Error("mes"+ii));
      //resolve(1);
    }, 0);
  });
  p.ii=ii++;
  return p
}

/**
 * 运行异步任务迭代器(不使用生成器委托的形式),
 * ! 这段代码问题看起来头大，要搞清楚主次，throw的时候控制流从autorun返回asyncTryMultipleTimes 的loop中，result为下一次yield的值
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
          console.log("----a",result.value?.ii)
          doTaskResult();
        } catch (e) {
          console.log("----b",e.message,err.message)
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
      console.log("yield task")
      const result = yield task();
      // 提前退出
      return result;
    } catch (e) {
      console.log("catch")
      times--;
      finallError = e;
    }
  } while (times >= 1);

  // 抛出错误
  throw finallError;
}

autoRun(function* test() {
  try {
    const result = yield autoRun(
      asyncTryMultipleTimes.bind(null, asyncFetch, 2)
    );
    console.log("data end", result);
  } catch (e) {
    console.log("err end");
  }
});
