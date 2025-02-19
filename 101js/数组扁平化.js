


function flat1(arr){
    return arr.flat(2)
}

function myflat(arr,maxDepth){
    const result=[];

    function callStack(arr,dp){
        if(depth>maxDepth){
            result.push(arr)
        }
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                callStack(arr[i],depth+1)
            }else{
                result.push((arr[i]))
            }
        }
    }
    callStack(arr,0)
    return result;
}

function flat2(arr){
    return myflat(arr,2)
}

const test1=[1,2,[3,4],[5,[6,7]]]

console.log(flat1(test1))
console.log(flat2(test1))