

// prototype 

function Sub(){

}


function Sup(){

}
Sup.prototype=new Sub(); 

// 原型继承

// 借用构造函数

// 组合（原型+借用构造）

// 寄生
// function object(o) {
//     function F() {}
//     F.prototype = o
//     return new F()
// }
// Sup.prototype=Object.create(Sub)
// Sup.prototype.constructor = Sup

