/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-05-17 21:18:16
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-05-18 17:44:49
 * @FilePath: /js-practice/dom/fileupload/upload.js
 * @Description:
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

const obj = {
  a: function () {
    return () => {
      console.log(this);
    };
  },
  b: () => {
    console.log(this);
  },
};
obj.a()();
obj.b();
