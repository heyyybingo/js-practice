/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-20 20:29:28
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-20 21:48:55
 * @FilePath: /js-practice/algorithm/sort/heapSort.js
 * @Description:实现一个堆排序
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

function getParentIndex(index) {
  return Math.floor((index - 1) / 2);
}

function getLeftChildIndex(index) {
  return index * 2 + 1;
}

function getRightChildIndex(index) {
  return index * 2 + 2;
}

function getMaxIndex(arr, indexes) {
  return indexes.reduce((prev, curr) => {
    if (prev === -1) {
      return curr;
    }
    if (arr[curr] > arr[prev]) {
      return curr;
    } else {
      return prev;
    }
  }, indexes[0]);
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
// 大顶堆
function adjustHeap(arr, top, bottom) {
  let start = top;
  while (start < bottom) {
    // 从上到下调整堆

    // 获取叶子结点
    let leftChildIndex = getLeftChildIndex(start);
    let rightChildIndex = getRightChildIndex(start);
    leftChildIndex = leftChildIndex > bottom ? -1 : leftChildIndex;
    rightChildIndex = rightChildIndex > bottom ? -1 : rightChildIndex;
    const maxIndex = getMaxIndex(arr, [start, leftChildIndex, rightChildIndex]);

    if (maxIndex !== start) {
      swap(arr, maxIndex, start);
      start = maxIndex;
    } else {
      break;
    }
  }
  return arr;
}
function heapSort(arr) {
  // 构建堆
  for (let i = arr.length - 1; i >= 0; i--) {
    adjustHeap(arr, i, arr.length - 1);
  }
  //console.log(arr);
  // 从头拿一个，和尾部交换，然后维护堆
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);

    adjustHeap(arr, 0, i - 1);
  }
  return arr;
}

console.log(heapSort([3, 2, 1, 4, 5]));
