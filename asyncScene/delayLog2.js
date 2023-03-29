/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-03-29 16:59:07
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-03-29 22:55:34
 * @FilePath: /js-practice/asyncScene/delayLog2.js
 * @Description: 实现一个延时打印日志的功能,一个变种，实现类似promise的链式调用，永远返回一个新的delaylog对象，而不在原始的对象空间内进行注册操作
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

// const dlog = new DelayLog()
// dlog.wait(1000).log('hello1').wait(2000).log('world1')
// dlog.wait(1000).log('hello2').wait(2000).log('world2')

class DelayLog {
  promise;
  logTask = [];
  constructor(promise = Promise.resolve()) {
    this.promise = promise;
  }
  wait(time) {
    const nextPromise = this.promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    });
    return new DelayLog(nextPromise);
  }
  log(str) {
    const nextPromise = this.promise.then(() => {
      console.log(str);
    });
    return new DelayLog(nextPromise);
  }
}

const dlog = new DelayLog();
dlog.wait(1000).log("hello1").wait(500).log("world1");
dlog.wait(1000).log("hello2").wait(2000).log("world2");
