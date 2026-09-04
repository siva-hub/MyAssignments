let palindrome = "madam"
function isPalindrome(word){
    let change = word.split("");
    let reversed = "";
for (let i = change.length-1; i>=0;i--){
    reversed += change[i]

}
console.log(reversed)
if (palindrome ===reversed){
    console.log("True")
}else{
    console.log("False")
}
}
isPalindrome(palindrome)
