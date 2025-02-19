// 基本数据类型
// Number/String/Boolean/Null/Undefined/Object/Symbol/BigInt
// typeof ? number/string/boolean/object/function/symbol/bigint

function typeOf(obj){
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}

console.log(typeOf({}));
console.log(typeOf([]));