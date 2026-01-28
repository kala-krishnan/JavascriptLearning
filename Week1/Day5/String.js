let companyName ="test Leaf Automation @2026"


console.log("String Length: " +companyName.length)
console.log("String UpperCase: " +companyName.toUpperCase())
console.log("String Lowercase: " +companyName.toLowerCase())
console.log("String Local lowerCase: " +companyName.toLocaleLowerCase())
console.log("String Local uppercase: " +companyName.toLocaleUpperCase())
console.log("String trim: " +companyName.trim())
console.log("String trim start: " +companyName.trimStart())
console.log("String trim end: " +companyName.trimEnd())
console.log("String index of 1: " +companyName.indexOf('f'))
let splitValue = companyName.split(" ")
console.log("String splited : " +splitValue)
for(let i=0;i<splitValue.length;i++)
{
    console.log("String splited " +splitValue[i])
}