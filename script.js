// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  
  var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerchar = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var symbols = "!@#$%^&*?"
  var passwordlength = prompt("How long would you like your password?")
  var password ="";
  if (passwordlength < 8 || passwordlength > 128 || Number.isNaN (passwordlength)){
    alert("Must choose a number greater than 8 or less than 128.")
    return null
  }
  var wantchar = confirm("Would you like uppercase characters? Ok for YES Cancel for NO")
  if (wantchar === true) {
    password += char
  }
  var wantlowerchar = confirm("Would you like lowercase characters?  Ok for YES Cancel for NO")
  if (wantlowerchar === true){
    password += lowerchar
  }
  var wantnumbers = confirm("Would you like numbers?  Ok for YES Cancel for NO")
  if (wantnumbers === true){
    password += numbers
  }
  var wantsymbols = confirm("Would you like symbols?  Ok for YES Cancel for NO")
  if (wantsymbols === true){
    password += symbols
  }
  if (!wantchar && !wantlowerchar && !wantnumbers && !wantsymbols){
    alert("Must choose atleast one option")
    return null
  }

console.log(password)

var finalpassword = ""
  for (var i = 0; i < passwordlength; i++){
  var randompswd = Math.floor(Math.random() * password.length);
finalpassword += password[randompswd]
  }
  passwordText.value = finalpassword;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

