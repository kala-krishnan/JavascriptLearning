
//Find the length of the word "Hello World"
let firstVar = "Hello World"

let splitedValue = firstVar.split(" ")
console.log("The length of the word "+splitedValue[1]+" "+splitedValue[1].length)

//Find the length of the last word " fly me to the moon "
let secondVar = " fly me to the moon "

let trimmedValue = secondVar.trim().split(" ")
console.log("The length of the word "+trimmedValue[1]+" "+trimmedValue[4].length)

// Check two Words are Anagram

function checkAnagram(anagramValue1,anagramValue2)
{
    let finalAnagramValue = anagramValue1.trim().toLowerCase().split("").sort().join("")
    let finalAnagramValue1 = anagramValue2.trim().toLowerCase().split("").sort().join("")
    return finalAnagramValue=== finalAnagramValue1
}


console.log(checkAnagram('listen','silent'))
console.log(checkAnagram('hello','world'))