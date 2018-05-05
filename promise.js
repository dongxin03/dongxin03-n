function promise(executor){
    let self=this;
    self.status='pending';
    self.value=undefined;
    self.reason=undefined;
    function resolve(){

    }
    function reject(){

    }

    try{
        executor(resolve,reject)
    }catch(e){
        reject(e)
    }


}

module.exports =promise;