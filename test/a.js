function a(){
    this.name="tttttt"
    const t=()=>{
        console.log(this.name)
    }
    t()
}

const ccc=new a()