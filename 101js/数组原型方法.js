

Array.prototype.TforEach=function(cb){
    const len=this.length;

    for(let index=0; index<len; index++){

        cb.call(this,this[index],index,this)
    }

}

Array.prototype.Treduce=function(cb,init){
    const len=this.length;
    let acc=init
    for(let index=0; index<len; index++){

        acc=cb.call(this,acc,this[index])
    }

    return acc

}


const arr=[1,2,3]

arr.TforEach((i,index,arr)=>{
    console.log(`${i},${index}`)
})

console.log(arr.Treduce((prev,curr)=>prev+curr,1))