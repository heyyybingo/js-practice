

function create(obj){

    function F(){

    }
    F.prototype=obj;

    return new F()
}


// test
const obj={}
const a = Object.create(obj)
const b = create(obj)

console.log(a instanceof obj)
console.log(b instanceof obj)