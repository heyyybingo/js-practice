/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-06 19:30:54
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-14 10:40:32
 * @FilePath: /js-practice/asyncScene/parallelTask/parallelControl.js
 * @Description: 实现一个异步任务控制器，可以将任务加入控制器，但是注意一次只有n个异步任务同时进行
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

function task(name, time = 1000) {
  console.log(`task [${name}] started`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`task [${name}] complete after ` + time + " seconds");
      resolve();
    }, time);
  });
}
/**
 * 初始化，指定最大并行数量
 * 添加任务，如果没有超过最大数量，则运行
 * 否则，加入等待队列，直到有任务完成。
 */
class ParallelControl {
  constructor(n) {
    this.max = n;
    this.now = 0;
    this.taskArr = []; //一个任务等待运行队列

    console.log(`ParallelControl of ${this.max} inited`);
    console.log(
      "****************************************************************"
    );
  }
  //添加任务到等待队列中。
  addTask(task) {
    console.log("ParallelControl add task to taskArr");
    this.taskArr.push(task);
    this.consumeTask();
  }
  //任务完成
  completeTask() {
    this.now--;
    this.consumeTask();
  }
  //消费队列中的任务,从队列中取出任务，并执行
  consumeTask() {
    if (this.now >= this.max) {
      console.log("can not consume until max is reached");
      return;
    }
    if (this.taskArr.length <= 0) {
      console.log("can not consume until taskArr is not empty");
      return;
    }
    console.log(
      "****************************************************************"
    );
    console.log("*task comsuming...*");
    while (this.now < this.max && this.taskArr.length > 0) {
      let task = this.taskArr.shift();
      task()
        .then(this.completeTask.bind(this))
        .catch(this.completeTask.bind(this));
      this.now++;
    }
    console.log("*task comsumed*");
    console.log(
      "****************************************************************"
    );
  }
}

const p = new ParallelControl(2);
let maxTest = 10;
while (maxTest) {
  p.addTask(task.bind(null, "task" + maxTest, 500));
  maxTest--;
}
