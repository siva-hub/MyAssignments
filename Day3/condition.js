var browername = "chrome"
function launchBrowser (browser){
    if(browser === "chrome"){
        console.log("Launch chrome");

}else {
    console.log("Launch firefox");
}
}
launchBrowser(browername)

function runtest(testtype){
switch (testtype) {
    case "smoke":
        console.log("Print smoke")
        break;
    case "sanity":
        console.log("Print sanity")
        break;
    case "regression":
        console.log("Print regression")
        break;
    default:
        console.log("Default smoke")
        break;
}
}
runtest("smoke")
