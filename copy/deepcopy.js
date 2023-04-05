/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-04-04 16:46:38
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-04-04 17:03:39
 * @FilePath: /js-practice/copy/deepcopy.js
 * @Description:实现一个深拷贝函数
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

// 思路
/**
 * 显然是需要递归进行处理的
 * 定义一个函数，如果函数返回的不是引用值，直接返回
 * 如果是引用值（不包含函数），那么遍历对象上的属性，递归
 *
 */
function deepCopy(val) {
  if (typeof val === "object") {
    const construcotr = Object.getPrototypeOf(val).constructor;
    const newObj = new construcotr();
    for (let i in val) {
      // 考虑用object.keys，因为实际上for-in的遍历是会带有原型上可枚举的部分
      newObj[i] = deepCopy(val[i]);
    }
    return newObj;
  } else {
    return val;
  }
}

const test = {
  name: "heyyybingo",
  age: 18,
  address: {
    city: "heyyybingo",
    province: "heyyybingo",
  },
  tags: ["boy", "handsome"],
};

console.log(deepCopy(test));

// 其他可以考虑使用json序列化，messagechannel这种骚操作。
