// Assignment Code
var generateBtn = document.querySelector("#generate");

// If the generate button is pressed, run the generate password function
function generatePassword() {
  
  // Ask the user to select how many characters
  var passwordLength = prompt("How long is your password (8 to 128 characters)", 14);
  // If character count is not within range, use 14 characters
  if(passwordLength < 8 || passwordLength > 128) {
    passwordLength = 14;
  }
  // Ask user whether to include uppercase letters
  var uppercaseChoice = prompt("Use uppercase letters (y or n)?", "y");
  // If anything other than 'n' is entered, include uppercase characters
  if(uppercaseChoice === "n") {
    uppercaseChoice = "";
  } else {
      uppercaseChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

  // Ask user whether to include lowercase letters
  var lowercaseChoice = prompt("Use lowercase letters (y or n)?", "y");
  // If anything other than 'n' is entered, include lowercase letters
  if(lowercaseChoice === "n") {
    lowercaseChoice = "";  
  } else {
      lowercaseChoice = "abcdefghijklmnopqrstuvwxyz";
    }
  
  // Ask user whether to include numeric characters
  var numericChoice = prompt("Use numeric characters (y or n)?", "y")
  // If anything other than 'n' is entered, include numeric characters
  if(numericChoice === "n") {
    numericChoice = "";
  } else {
      numericChoice = "1234567890";
    }

  // Ask user whether to include special characters
  var specialChoice = prompt("Use special characters like ! or $ (y or n)?", "y")
  // If anything other than 'n' is entered, include special characters
  if(specialChoice === "n") {
    specialChoice = "";    
  } else {
      specialChoice = "!@#$%^&*?+~";
    }

  // Create a string containing all the available characters and select a random character for each password slot
  var characters = uppercaseChoice += lowercaseChoice += numericChoice += specialChoice;
  console.log(characters);
  var returnValue = "";
  for (i = 0; i < passwordLength; i++) {
    returnValue += characters.charAt(Math.ceil(Math.random() * characters.length));
   }
  return returnValue;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);