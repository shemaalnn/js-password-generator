// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// List out the variables required in the password
function generatePassword () {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var specialCharacters = "!'#$%&()+*,-./:;<>=?@[]\^_`~{}|"
  var numbers = "01234567890"

// Ensure user meets the variables criteria 
  var uppercasePreference = confirm("Do you want uppercase letters in your password?")
  var lowercasePreference = confirm("Do you want lowercase letters in your password?")
  var numbersPreference = confirm("Do you want numbers in your password?")
  var specialCharactersPreference = confirm("Do you want any special characters in your password?")

  if (!uppercasePreference && !lowercasePreference && !numbersPreference && !specialCharactersPreference ) {
    alert("You must have atleast one character type in your password!");
    return "";
  }
// Ensure user meets the password length critera  
  var passwordLength = prompt("How long do you want your password to be?")

  if (typeof passwordLength === 'number') {
    alert("Thank you!")
  } else {
    alert("Please choose your password length")
  }

  if (passwordLength < 7 || passwordLength > 120) {
    alert("Your password must be between 7 and 120 characters in length")
    return "";
  }

// Generation of password based on user's answers 
  var passwordCharacters = "";

  if (lowercasePreference) {
    passwordCharacters += lowercase
  }

  if (uppercasePreference) {
    passwordCharacters += uppercase
  }

  if (numbersPreference) {
    passwordCharacters += numbers
  }

  if (specialCharactersPreference) {
    passwordCharacters += specialCharacters
  }

// Loop to iterate
  var password = ""

  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }

// Logged to the console with the return feature as it wont do anything without it

  console.log(password)
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
