


function stringfy(data){
    const type=typeof data;
    if(type !="object"){
        // number/string/undefined/function/boolean
        if(type==="number"){

            if(isNaN(data)||!isFinite(data)){
                return "null"
            }else{
                return String(data)
            }
        }else if(type=="string"){
            return `"${data}"`
        }else if(type==="boolean"){
            return String(data)
        }else{
            return undefined;
        }
    }else{
        if(data===null){
            return "null"
        }else if(data.toJSON&&typeof data.toJSON === "function"){
            return stringfy(data.toJSON())
        }else if(Array.isArray(data)){
            const strArr= data.map(i=>stringfy(i)).filter(Boolean)
            const result=`[${strArr.join(",")}]`
            return result;

        }else {
            const strArr=[]
            for(let key in data){
                const str=stringfy(data[key])
                if(str){
                    strArr.push(`"${key}":${str}`)
                }
            }
            const result=`{${strArr.join(",")}}`
            return result;
        }
    }

}

const json={
    a:1,
    bool:false,
    o:{
        b:1,
        c:2,
        infi:Infinity,
        tojson:{
            toJSON:function (){
                return {
                    hello:"hello",
                    h:{
                        a:1
                    }
                }
            }
        }
    },
    nan:NaN,
    und:undefined,
    arr:[1,2,3,4],
    fn:function(){

    }
}

console.log(JSON.stringify(json))
console.log(stringfy(json))