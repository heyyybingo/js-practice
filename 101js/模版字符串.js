
function render(str,data){
    const reg=/\{\{(\w+)\}\}/
   
    if(reg.test(str)){
        const name=reg.exec(str)[1]
        console.log(name)
        str=str.replace(reg,data[name])
        return render(str,data)
    }else{
        return str;
    }
}

const str='我的name是：{{name}}，我的age是：{{age}}'
const data={
    name:"cqb",
    age:11,
}
console.log(render(str,data))