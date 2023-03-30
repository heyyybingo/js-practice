/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-03-30 21:08:32
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-03-30 21:14:09
 * @FilePath: /js-practice/switch/switch.js
 * @Description: 一个switch方法的例子，查看它的打印输出
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */

function doSwitch(x) {
  console.log(`${x}--start`);
  switch (x) {
    case 1:
      console.log(1);
      break;
    case 2:
      console.log(2);
    default:
      console.log("default");
    case 3:
      console.log(3);
    case 4:
      console.log(4);
      break;
    case 5:
      console.log(5);
  }
  console.log(`${x}--end`);
}

for (let i = 0; i <= 5; i++) {
  doSwitch(i);
}

/**
 * 
0--start
default
3
4
0--end
1--start
1
1--end
2--start
2
default
3
4
2--end
3--start
3
4
3--end
4--start
4
4--end
5--start
5
5--end
 */
