

function jsonparse1(str){
    return eval("("+str+")")
}
function jsonparse2(str){
    const fn= new Function('return '+str)
    return fn()
}
const obj={a:1,b:2,c:3}
const str=JSON.stringify(obj)

console.log(JSON.parse(str))
console.log(jsonparse1(str))
console.log(jsonparse2(str))