function userprofile(ne){
console.log ("Hello" + ne);
}
userprofile( "Siva");

const doubled =(num)=>{
    return num*6;
}
console.log(doubled(6))

setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);
function getUserData(callback) {
    setTimeout(function() {
        callback();
    }, 3000);
}

getUserData(function() {
    console.log("Call Back Function");
});