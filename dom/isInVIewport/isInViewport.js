/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-05 15:53:05
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-05 16:23:53
 * @FilePath: /js-practice/dom/isInVIewport/isInViewport.js
 * @Description:实现一个函数，判断元素是否在可视区域内
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

/**
 * 思路：
 * 获取元素占视口的位置，getBoundingClientRect
 * left大于0，小于视口宽度
 * top大于0，小于视口高度
 */
const div = document.createElement("div");

document.body.appendChild(div);

/**
 *
 * @param {*} element
 * @returns
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
