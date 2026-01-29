let browser = "Chrome"
function checkBrowserVersion(callback)
{
setTimeout(()=>{
callback(browser)
},2000
)
}

function setBrowser(browserName)
{
console.log("The browser is "+browserName)
}

checkBrowserVersion(setBrowser)