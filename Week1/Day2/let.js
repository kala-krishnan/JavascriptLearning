let i = 100

if(true)
{
   // console.log(i) //no scope ReferenceError: Cannot access 'i' before initialization
    let i='kala' 
    console.log(i) //kala
    i=1898088008080880880808n
    console.log(i) //overwirte
    
}
 i=false
console.log(i)//false