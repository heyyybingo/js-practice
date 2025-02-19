/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-14 09:32:50
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-22 17:22:47
 * @FilePath: /js-practice/asyncScene/promise/promiseRetry.js
 * @Description:实现promise retry函数
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */
Promise.retry = function (promisefn, times) {
  let leftTimes = times;
  return new Promise((resolve, reject) => {
    function rejectable(error) {
      if (leftTimes == 0) {
        reject(error);
      } else {
        promisefn.then(resolve, rejectable);
      }
    }

    promisefn.then(resolve, rejectable);
  });
};
