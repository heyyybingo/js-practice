

class MEventEmitter{
    constructor(){
        this.events={

        }
    }

    sub(eventName,fn){
        const listeners = this.events[eventName]
        if(!listeners){
            this.events[eventName]=[fn]
        }else{
            if(listeners.find(cb=>cb===fn)){
                return;
            }
            listeners.push(fn)
        }

    }

    unsub(eventName,fn){
        const listeners = this.events[eventName]
        if(!listeners){
            return;
        }else{
            const target=listeners.findIndex(cb=>cb===fn)
            if(target>=0){
                listeners.splice(target,1)
            }
        }
    }

    emit(eventName,...args){
        const listeners = this.events[eventName]
        listeners.forEach(cb=>{
            cb(...args)
        })
    }

    log(){
        console.log(this.events)
    }
    
}

const eventBus=new MEventEmitter()

function cb(...args){
    console.log("cb",...args)
}
function lll(...args){
    console.log("lll",...args)
}

eventBus.sub("a",cb)
eventBus.sub("a",cb)
eventBus.sub("a",lll)
eventBus.sub("b",cb)
eventBus.log()
eventBus.unsub("a",cb)
eventBus.emit("a","ceshi")