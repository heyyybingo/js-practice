


function get(url,params){
    const req=new XMLHttpRequest();
    const search=new URLSearchParams(params)
    console.log(`${url}?${search}`)
   

    return new Promise((resolve,reject)=>{
        req.open("GET",`${url}?${params}`)
        req.onreadystatechange=function(){
            if(req.readyState!=4){
                return;
            }
            if(req.status==200||req.status==304){
                resolve(req.responseText)
            }else{
                reject(req.responseText)
            }
        }
        req.send()
    })

}

get("http://localhost:9090",{a:1,b:2})