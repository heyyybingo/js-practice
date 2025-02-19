

function curry(fn){
    const argLen=fn.length;
    console.log("参数长度:",argLen)
    function memory(...args){
        console.log(args)
        if(args.length>=argLen){
            return fn.call(this,...args)
        }else{
            return memory.bind(this,...args)
        }
    }
    return memory
}

function add(a,b,c,d){
    return a+b+c+d
}

const curryAdd=curry(add)

console.log(curryAdd(1)(2)(3)(4))


// function test(...args){
//     console.log(args.length,"&&",...args)
// }
// test.bind(null,1).bind(null,2)()