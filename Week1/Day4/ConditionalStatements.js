let browserName = 'Chrome'
if(browserName === 'Chrome')
{
    console.log("Lanuching Chrome Browser")
}
else{
    console.log("Launching Default Browser")
}
let testType = 'Sanity'
switch(testType)
{
    case 'Sanity' :
        {
             console.log("Running Sanity Tests")
             break
        }
    case 'Smoke' :
        {
             console.log("Running Smoke Tests")
             break
        }
    case 'Regression' :
        {
             console.log("Running Regression Tests")
             break
        }
    default :
        {
             console.log("Running Tests")
             break
        }
        }
