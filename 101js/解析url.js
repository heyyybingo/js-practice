

function parse(url){
    const reg=/(.+)\?(.*)$/
    const regResult=reg.exec(url)
    const paramStr=regResult[2]
    if(!paramStr){
        return {}
    }
    const paramGroup=paramStr.split("&")
    const obj={}
    paramGroup.forEach(pairStr=>{
        const pair=pairStr.split("=")
        obj[pair[0]]=pair[1]
    })
    return obj
}


console.log(parse("https://www.google.com?a=1&b=3&c=4&d"))