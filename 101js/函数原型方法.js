
Function.prototype.Tcall=function(){
    // if es5
    const context=arguments[0]||window
    const args=Array.prototype.slice.call(arguments,1)
    context.fn=this
    const str="context.fn("+args.join(",")+")"
    const result=eval(str)
    delete context.fn
    return result
}

Function.prototype.Tapply=function(){
    const context=arguments[0]||window
    const args=arguments[1]
    context.fn=this
    const str="context.fn("+args.join(",")+")"
    const result=eval(str)
    delete context.fn
    return result
}

Function.prototype.Tbind=function(){
    const context=arguments[0]||window
  
    const args=Array.prototype.slice.call(arguments,1)
   
    const fn=this;

    return function (){
        const newArgs=args.concat(Array.prototype.slice.call(arguments))
        return fn.apply(context,newArgs)
    }
}


function fn1(a,b,c){
    console.log(this,a,b,c)
}

const obj={
    ceshi:"ceshi",
}

fn1.Tcall(obj,1,2,3)
fn1.Tapply(obj,[2,3,4])
const n=fn1.Tbind(obj,3,4,5)
n()