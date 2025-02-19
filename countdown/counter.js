/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-05 16:24:54
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-22 17:36:10
 * @FilePath: /js-practice/countdown/counter.js
 * @Description:实现一个计时器
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

/**
 * 如果考虑页面切换，可以使用类似下述方法监听，但是有一个api设计上的问题，手动停止和自动的切换停止需要区分开来
 * document.onvisibilitychange(() => {
      if (document.hidden) {
        this.stop();
      } else {
        this.start();
      }
    });
 */

class Counter {
  initTime = 0;
  time = this.initTime;
  timer = null;
  changelistenrs = [];
  lastModifiedTime = null;
  constructor(time) {
    this.initTime = time;
    this.time = time;
   
  }

  start() {
    this.lastModifiedTime = this.lastModifiedTime || performance.now();
    this.timer = setInterval(() => {
      //this.time--;
      const newTime =
        this.time -
        ((performance.now() - this.lastModifiedTime) / 1000).toFixed(0);

      if (newTime < 0) {
        this.stop();
        return;
      }
      this.changeTime(newTime);
    }, 1000);
  }
  changeTime(newTime) {
    this.time = newTime;
    this.lastModifiedTime = performance.now();
    this.changelistenrs.forEach((cb) => {
      if (typeof cb === "function") {
        cb(this.time);
      }
    });
  }
  stop() {
    clearInterval(this.timer);
  }

  reset() {
    this.time = this.initTime;
    this.lastModifiedTime = null;
  }

  getTime() {
    return this.time;
  }
  addChangeListener(cb) {
    this.changelistenrs.push(cb);
  }
}

const counter = new Counter(10);
counter.addChangeListener((time) => {
  console.log("time", time);
});
counter.start();
