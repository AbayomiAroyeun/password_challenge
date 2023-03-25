// Assignment code here


// variab
// password length = min 8 maximum 128
var number = "0123456789"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var characters = "#$%&'()*+,-./:!;<=>?@[\]^_`{|}~"
var allCharacters = []

// function getRandomNumber(){
//   retun
// }
// function getRandomUpper(){
//   return
// }
// function getrRandomLower(){
//   return
// }
// function getRandomCharacter(){
//   return
// }
// const randomFunc = (){
//   lower: getRandomNumber,
//   Upper: getRandomUpper,
//   Lower: getRandomLower,
//   characters :getRandomCharacters 
// }

// Generate conditional statement
function generatePassword() {
  var passwordLength = prompt("enter your pasword length between 8 - 128 characters ")
  if (passwordLength <8|| passwordLength > 128 || isNaN(passwordLength)) {
    alert("needs to be 8 and 128 characters")
    generatePassword()
  } else {
    var upperCaseConfirm = confirm("do you want to include uppercase ")
    var lowerCaseConfirm = confirm("do you want to include lowercase ")
    var numberCaseConfirm = confirm("do you want to include numbercase ")
    var characterCaseConfirm = confirm("do you want to include charactercase ")

    if (upperCaseConfirm) {
      allCharacters.push(...uppercase)
    }
    if (lowerCaseConfirm) {
      allCharacters.push(...lowercase)
    }
    if (numberCaseConfirm) {
      allCharacters.push(...number)
    }
    if (characterCaseConfirm) {
      allCharacters.push(...characters)
    }
    console.log(allCharacters)
    var password = ""
for(var i=0 ;i < passwordLength; i++){
  var random= Math.floor(Math.random()*allCharacters.length)
  var child = allCharacters[random]
  // console.log(child)
  
  password = password + child
  console.log(password)
}

return  password
  }
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
