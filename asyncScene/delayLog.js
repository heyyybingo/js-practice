/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-03-29 16:59:07
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-03-29 19:40:11
 * @FilePath: /js-practice/asyncScene/delayLog.js
 * @Description: 实现一个延时打印日志的功能
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

// new DelayLog().wait(1000).log('after 1s').wait('2000').log('after 3s')
function isThenable(p) {
  return (
    p &&
    (typeof p === "object" || typeof p === "function") &&
    typeof p.then === "function"
  );
}
class DelayLog {
  promiseQueue = [Promise.resolve()];
  wait(time) {
    this.pushTask(
      () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, time);
        })
    );
    return this;
  }
  log(str) {
    this.pushTask(() => {
      console.log(str);
    });
    return this;
  }
  pushTask(task) {
    const topPromise = this.promiseQueue[this.promiseQueue.length - 1];
    this.promiseQueue.push(
      topPromise.then(() => {
        return task();
      })
    );
  }
}
new DelayLog()
  .wait(1000)
  .log("after 1s")
  .log("after 1s - immediate")
  .wait(500)
  .log("after 3s");
