// Assignment Code
var generateBtn = document.querySelector("#generate");

// Below are the four different options/arrays that the visitor can choose to be in their password

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
// Stores the characters that the user inputs
var userInput = [];


function writePassword() {
  
  // Asks how long the user's password will be and then adds the password to the input
  var userLength = prompt("Please choose desired length of your password (must be between 8 and 128)");

  // Converts userLengthParseInt into an interger and checks to see if it is a valid number
  var userLengthParseInt = parseInt(userLength);

  // Makes sure that the user's input is equal to or in between 8 and 128
  if (Number.isNaN(userLengthParseInt) || userLength < 8 || userLength > 128) {

    alert("Not a valid length! Please input a number between 8 and 128.")
    return password = "";

  }

   // Confirms if the user wants or does not want lower case characters in the password.  Concats it if the user confirms. 
    else  {

    var userInputLowerCase = confirm("Do you want your password to contain lower case letters?");

    if (userInputLowerCase) {

      userInput = userInput.concat(lowerCase);
     
    }
   
    var userInputUpperCase = confirm("Do you want your password to contain upper case letters?");

    if (userInputUpperCase) {

      userInput = userInput.concat(upperCase);
  
    }
      
    var userInputNumeric = confirm("Do you want your password to contain numbers?");

    if (userInputNumeric) {

      userInput = userInput.concat(numeric);
      console.log(userInputNumeric);
      
    }
      
    var userInputSpecialCharacters = confirm("Do you want your password to contain any special characters?"");

    if (userInputSpecialCharacters) {

      userInput = userInput.concat(specialCharacters);
      console.log(userInputSpecialCharacters);

    }
 //var password = generatePassword();
 var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start working code
// User input variables:
  

