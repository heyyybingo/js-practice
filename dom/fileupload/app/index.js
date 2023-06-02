
// 单个


// 多个
const uploadMult=document.getElementById("upload-mult")
const btnMult=document.getElementById("btn-mult")

btnMult.addEventListener("click",()=>{
    const formdata=new FormData();
    console.log(uploadMult.files)
    for(let file of uploadMult.files){
        formdata.append("form-file",file)
    }

    
    const req=new Request("/form",{
       
        method:"post",
        body:formdata
    })
    fetch(req);
})