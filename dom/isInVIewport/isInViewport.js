/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-05 15:53:05
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-05-11 12:53:15
 * @FilePath: /js-practice/dom/isInVIewport/isInViewport.js
 * @Description:实现一个函数，判断元素是否在可视区域内(完整出现)
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

/**
 * 思路：
 * 获取元素占视口的位置，getBoundingClientRect
 * left大于0，小于视口宽度
 * top大于0，小于视口高度
 */
// const div = document.createElement("div");

// document.body.appendChild(div);

/**
 *
 * @param {*} element
 * @returns
 */
function isInViewport(
  element,
  { top, left, bottom, right } = {
    top: 0,
    left: 0,
    bottom: window.innerHeight || document.documentElement.clientHeight,
    right: window.innerWidth || document.documentElement.clientWidth,
  }
) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= top &&
    rect.left >= left &&
    rect.bottom <= bottom &&
    rect.right <= right
  );
}

const container = document.getElementById("container");
const child = document.getElementById("child");
const getChildBtn = document.getElementById("getChildBtn");
function isVisible(element, container) {
  const elementRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  console.log(elementRect);
  console.log(containerRect);
  return isInViewport(container) && isInViewport(element, containerRect);
}

getChildBtn.addEventListener("click", function () {
  console.log(isVisible(child, container));
});

// 如果要实现判断两个元素相交，可以考虑下述方案
// 由于直接判断相交，考虑的位置关系比较麻烦，但是实际上，我们可以更简单的去考虑不相交的情况，然后取反
// a在b上面，a在b左侧，a在b下面，a在b右侧
