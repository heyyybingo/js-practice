/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-24 14:30:27
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-24 14:41:19
 * @FilePath: /js-practice/algorithm/backtrack/fullPermutation.js
 * @Description: 实现一个全排列函数，输入为n，输出所有长度为n的排列数组
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

function fullPermutation(n) {
  function backtrack(prev, arr, hasSet) {
    if (hasSet.size === n) {
      arr.push(prev);
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (hasSet.has(i)) {
        continue;
      }
      hasSet.add(i);
      backtrack(prev + i.toString(), arr, hasSet);
      hasSet.delete(i);
    }
  }
  const hasSet = new Set();

  const result = [];
  backtrack("", result, hasSet);
  return result;
}

console.log(fullPermutation(3));
