/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-20 20:28:59
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-22 14:15:21
 * @FilePath: /js-practice/algorithm/sort/mergeSort.js
 * @Description:实现一个归并排序
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

// 归并排序
function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return arr;
  }
  let mid = Math.floor((left + right) / 2);

  // 分解左侧部分，分解右侧部分
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  // 此时左侧有序，右侧有序，进行合并
  let leftPointer = left;
  let rightPointer = mid + 1;
  let tmp = [];
  while (leftPointer <= mid && rightPointer <= right) {
    if (arr[leftPointer] < arr[rightPointer]) {
      tmp.push(arr[leftPointer]);
      leftPointer++;
    } else {
      tmp.push(arr[rightPointer]);
      rightPointer++;
    }
  }
  while (leftPointer <= mid) {
    tmp.push(arr[leftPointer]);
    leftPointer++;
  }
  while (rightPointer <= right) {
    tmp.push(arr[rightPointer]);
    rightPointer++;
  }
  //console.log(tmp, left, right);
  arr.splice(left, right - left + 1, ...tmp);
  return arr;
}
//mergeSort([1, 5, 2, 4, 6]);
console.log(mergeSort([1, 5, 2, 4, 6]));
