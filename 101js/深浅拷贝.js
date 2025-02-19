

function shallowCopy1(obj){
    if(typeof obj !== 'object'){
        return obj;
    }
    const newObj =  Array.isArray(obj)?[]:{}
    for(let i in obj){
      if(obj.hasOwnProperty(i)){
        newObj[i] = obj[i]
      }
    }
    return newObj;
}

function shallowCopy2(obj){
    if(typeof obj !== 'object'){
        return obj;
    }
    return Array.isArray(obj)?[...obj]:{...obj}
}

function deepClone(obj){
    if(typeof obj!='object'){
        return obj
    }

    const newObj =  Array.isArray(obj)?[]:{}
    for(let i in obj){
      if(obj.hasOwnProperty(i)){
        newObj[i] = deepClone(obj[i])
      }
    }
    return newObj

}

const obj={
    a:1,
    b:2,
    arr:[1,2],
    o:{oa:1,ob:2}
}
obj.__proto__.test="2"
console.log({...obj})
console.log(shallowCopy1(obj))
const dp=deepClone(obj)
console.log(dp,dp.arr===obj.arr,dp.o===obj.o)
const d=new Date()
console.log(typeof d)