/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-14 10:19:42
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-14 10:42:08
 * @FilePath: /js-practice/asyncScene/parallelTask/paralellLimit.js
 * @Description:实现一个异步任务控制函数
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
 * 并行控制函数,返回一个promise，直到所有promise执行完成
 * @param {*} promises
 * @param {*} limit
 * @returns
 */
function paralellLimit(promises, limit) {
  return new Promise((resolve, reject) => {
    let results = []; //保存结果
    let index = 0; //当前执行promise的位置；
    let count = 0; //当前执行promise的数量；
    let done = false; //是否已经完成
    //每次执行promise的函数
    function comsume() {
      if (done) {
        return;
      }
      //如果全部完成了，那么reolve
      if (index >= promises.length) {
        done = true;
        resolve(results);
        return;
      }
      //循环消费promise直到limit
      while (count < limit) {
        let promisefn = promises[index];
        count++;
        index++;
        promisefn()
          .then((v) => {
            count--;
            results[index] = v;
            comsume();
          })
          .catch((e) => {
            done = true;
            reject(e);
          });
      }
    }
    comsume();
  });
}
let maxTest = 10;

const parr = new Array(maxTest).fill(0).map((item, index) => {
  return task.bind(null, "task" + index, 1500);
});

paralellLimit(parr, 2);
