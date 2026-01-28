let empName = "Muthukrishnan Sadacharam"
let countTargetCharacter = "h"
let count =0;
for(let i=0;i<empName.length;i++)
{
    if(empName.charAt(i)===countTargetCharacter)
    {
        count++
    }
}
console.log("The character h occurences count "+count)