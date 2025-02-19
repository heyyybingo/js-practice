/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-16 13:57:19
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-16 14:44:53
 * @FilePath: /js-practice/asyncScene/eventloop/messageChannelAndTimetout.js
 * @Description:
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */
const { port1, port2 } = new MessageChannel();
let messageChannelSheduleTimes = 0;
let timeoutScheduleTimes = 0;
let requestAnimationFrameTimes = 0;
function waitTime(time = 0) {
  const now = performance.now();
  while (performance.now() - now < time) {}
}
const maxTimes = 10;
function messageChannelShedule() {
  port2.onmessage = function (e) {
    if (messageChannelSheduleTimes >= maxTimes) {
      return;
    }
    console.log("messageChannelShedule ", messageChannelSheduleTimes++);
    waitTime(10);
    port1.postMessage(null);
  };
  port1.postMessage(null);
}
function timeoutSchedule() {
  if (timeoutScheduleTimes >= maxTimes) {
    return;
  }
  setTimeout(() => {
    console.log("timeoutSchedule ", timeoutScheduleTimes++);
    timeoutSchedule();
  });
}

function animationFrameSchedule() {
  if (requestAnimationFrameTimes >= maxTimes) {
    return;
  }
  requestAnimationFrame(() => {
    document.body.appendChild(document.createElement("b"));
    console.log("animationFrameSchedule ", requestAnimationFrameTimes++);
    animationFrameSchedule();
  });
}
// timeoutSchedule();
messageChannelShedule();
animationFrameSchedule();
