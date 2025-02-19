


// 右侧原型是否出现在左侧原型链上
function instanceOf(left,right){
    let proto=Object.getPrototypeOf(left)

   
    while(proto){

        if(proto==right.prototype){
            return true;
        }
        proto=Object.getPrototypeOf(proto)
    }

    return false;

}
const arr=[]

console.log(instanceOf(arr,Array),arr instanceof Array)
console.log(instanceOf(arr,Object),arr instanceof Object)
console.log(instanceOf(arr,Number),arr instanceof Number)