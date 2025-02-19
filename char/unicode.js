/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-05-09 14:09:48
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-05-09 14:13:30
 * @FilePath: /js-practice/char/unicode.js
 * @Description:
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */
let s = "你好，𠮷是中文";
function goWithIndex() {
  for (let i = 0; i < s.length; i++) {
    console.log(s[i], s.charAt(i), s.charCodeAt(i));
  }
}
function goWithIterator() {
  for (let c of s) {
    console.log(c, c.charAt(), c.charCodeAt());
  }
}
goWithIndex();
console.log("----------------------------------------------------------------");
goWithIterator();
