


const  p= new Promise(()=>{
    console.log("p")
})

const ps=Promise.resolve(p)
const pr=Promise.reject(p)
pr.catch(reason=>{
    console.log(reason===p)
})
console.log({
    ps,
    pr,
})