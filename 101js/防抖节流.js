


function debounce(fn,delay){
    let timer
    return function (...args){
        clearTimeout(timer)
        timer=setTimeout(fn.bind(this,...args),delay)
    }
}

function throttle(fn,delay){
    let isWait=false;
    return function (...args){
        if(isWait){
            return;
        }
        fn.call(this,...args)
        isWait=true;
        setTimeout(()=>{
            isWait=false;
        },delay)
    }
}

const deboucenFn=debounce(function(){
    console.log("do",this.a)
},300)
const obj={
    a:"test",
    fn:deboucenFn
}
obj.fn()
obj.fn()
obj.fn()

const tf=throttle(function(){
    console.log("tf",Date.now())
},100)


setInterval(()=>{
    tf()
},50)