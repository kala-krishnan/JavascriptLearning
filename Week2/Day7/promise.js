let promise = new promise((resolve,reject)=>
{
console.log("order Food")
setTimeout(()=>{
    resolve("Food is ready")
    reject("food is not ready")
},6000)
})
promise.then(result=>console.log(resolve)).catch(failure=>console.log(reject))