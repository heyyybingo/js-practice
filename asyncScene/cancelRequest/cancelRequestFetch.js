/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-13 19:30:41
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-13 20:59:58
 * @FilePath: /js-practice/asyncScene/cancelRequest/cancelRequestFetch.js
 * @Description:实现一个取消请求的方法
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

const controller = new AbortController();

fetch("reason", {
  signal: controller.signal,
})
  .then(() => {
    console.log("success");
  })
  .catch((e) => {
    if (e.name === "AbortError") {
      console.log("this is an AbortError");
    }
  });
controller.signal.addEventListener("abort", (e) => {
  console.log("abort event:", e);
});
controller.abort("abort reason");

console.log("test");
