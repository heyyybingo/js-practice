
function compose(...funcs) {
    if (funcs.length === 0) {
      // infer the argument type so it is usable in inference down the line
      return (arg) => arg
    }
  
    if (funcs.length === 1) {
      return funcs[0]
    }
  
    return funcs.reduce(
      (a, b) =>{
        console.log("here",{a,b})
        return  (...args) =>
            a(b(...args))
      }
       
    )
  }


function testa(){
    console.log("aa")
}

function testb(){
    console.log("bb")
}


const comp= compose(...[testa,testb])
comp()
console.log()