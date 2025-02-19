

// 创建一个空对象,设置原型为构造函数原型
// this指向空对象
// 运行构造函数
// 如果有返回则返回值，否则返回新建的对象

function myNew(fn,...args){
    const obj=new Object();
    Object.setPrototypeOf(obj,fn.prototype);
    const result=fn.call(obj,...args)
    return typeof result === 'object'|| typeof result ==="function" ?result:obj
    
}


function Person(name){
    this.name=name
   
    return false
}

const p=new Person("cqb")
const pa=myNew(Person,'heyyybingo')
console.log(p)
console.log(pa)