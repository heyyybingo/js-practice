


function add(a,b,c){
    return a+b+c;
}

function partial(fn,...args){
    return function (...newArgs){
        return fn.call(this,...args,...newArgs)
    }
}
const partialAdd=partial(add,1)
console.log(partialAdd(2,3))