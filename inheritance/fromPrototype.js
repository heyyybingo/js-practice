/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2023-05-09 13:02:11
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2023-05-09 13:24:14
 * @FilePath: /js-practice/inheritance/fromPrototype.js
 * @Description:最简单的，使用原型继承
 *
 * Copyright (c) 2023 by heyyybingo, All Rights Reserved.
 */
//function SuperType() {}

//function SubType() {}

// 最简单的，直接将原型赋值为一个父元素对象，这样原型链中就会存在即成关系
// SubTypeObj.__proto__->(SubType.prototype|SuperTypeObj).__proto__->SuperType.prototype
// SubType.prototype=new SuperType();

// 上述方案其实有一点问题，因为这样会直接执行一次SuperType的构造函数，并且SubType还没有办法对SuperType内容进行构造
// 即使在SubType组合了SuperType的构造方法，也不能避免多执行的这次构造函数

// 最好的方式还是使用Object.create这个方法的思想，我们可以实现一个create方法

function create(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}
function SuperType() {}

function SubType() {
  SuperType.call(this);
}

SubType.prototype = create(SuperType.prototype);
SubType.prototype.constructor = SubType;
