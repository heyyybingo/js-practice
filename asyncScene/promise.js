/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-03-29 15:21:52
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-03-29 21:17:12
 * @FilePath: /js-practice/asyncScene/promise.js
 * @Description: 实现一个promise
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

// new MyPromise((resolve,reject)=>{resolve()}).then().then();

const MyPromiseState = {
  FULLFILLED: "fullfilled",
  PENDING: "pending",
  REJECTED: "rejected",
};
class MyPromise {
  state = MyPromiseState.PENDING; // pending|fullfilled|rejected
  stateResult = null;
  onFullFilledQueue = [];
  onRejectedQueue = [];
  constructor(executor) {
    executor(this.resolver.bind(this), this.rejecter.bind(this));
  }
  static resolve(value) {
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }
  static reject(err) {
    return new MyPromise((resolve, reject) => {
      reject(err);
    });
  }
  resolver(value) {
    if (this.state !== MyPromiseState.PENDING) {
      return;
    }
    this.state = MyPromiseState.FULLFILLED;
    this.stateResult = value;
    this.onFullFilledQueue.forEach((fn) => fn(this.stateResult));
  }
  rejecter(err) {
    if (this.state !== MyPromiseState.PENDING) {
      return;
    }
    this.state = MyPromiseState.REJECTED;
    this.stateResult = err;
    this.onRejectedQueue.forEach((fn) => fn(this.stateResult));
  }
  /**
   * 如果当前状态已经fullfilled，直接执行onfullfilled
   * 如果当前状态已经rejected，直接执行onrejected
   * 将onfullfilled和onrejected推入队列
   * 返回一个新的promise，链式调用，当前promise完成时，执行
   * @param {*} onfullfilled
   * @param {*} onrejected
   * @returns
   */
  then(onfullfilled, onrejected) {
    onfullfilled = onfullfilled ? onfullfilled : MyPromise.resolve;
    onrejected = onrejected ? onrejected : MyPromise.reject;
    return new MyPromise((resolve, reject) => {
      // 如果onfullfilled，onrejected返回promise，需要等待promise完成，当前promise才会触发
      function resolveThenCallback(cb, value) {
        try {
          const thenCallBackResult = cb(value);
          if (thenCallBackResult instanceof MyPromise) {
            thenCallBackResult.then(resolve, reject);
          } else {
            resolve(thenCallBackResult);
          }
        } catch (e) {
          reject(e);
        }
      }
      if (this.state === MyPromiseState.FULLFILLED) {
        resolveThenCallback(onfullfilled, this.stateResult);
      } else if (this.state === MyPromiseState.REJECTED) {
        resolveThenCallback(onrejected, this.stateResult);
      } else {
        this.onFullFilledQueue.push(
          resolveThenCallback.bind(this, onfullfilled)
        );
        this.onRejectedQueue.push(resolveThenCallback.bind(this, onrejected));
      }
    });
  }
  /**
   * 传入回调函数，
   * @param {*} cb
   * @returns
   */
  catch(onrejected) {
    //then的onrejected版本，可以考虑把复用的代码重新抽离出来
  }
}

function createTestResolvePromise(testStr = "", time = 0) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(testStr);
    }, time);
  });
}
function createTestRejectPromise(testStr = "", time = 0) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject(testStr);
    }, time);
  });
}

// createTestResolvePromise("hello", 1000)
//   .then((data) => {
//     console.log(data, "after 1s");
//     return createTestResolvePromise("world", 500);
//   })
//   .then((data) => {
//     console.log(data, "after 1.5s");
//   });

createTestRejectPromise("hello err", 1000)
  .then(null)
  .then(null, (err) => {
    console.log(err, "after 1s");
  });

// const p = new Promise((resolve, reject) => {
//   reject();
// });
// p.then(null, () => {
//   console.log("reject 1");
// }).then(null, () => {
//   console.log("reject2");
// });
