function checkPalindrome( varName)
{
    let finalVar  = varName.toLowerCase()
    let reversedVar =finalVar.split("").reverse().join("")
    if(reversedVar === finalVar)
    {
        console.log("Yes,its a Palindrome!")
    }
    else{
        console.log("No,Its not a Palindrome!")
    }
    
}

checkPalindrome('Malayalam')
checkPalindrome('Information')