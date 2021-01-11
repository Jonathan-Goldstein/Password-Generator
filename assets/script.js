// Assignment Code
var generateBtn = document.querySelector("#generate");

// Below are the four different options/arrays that the visitor can choose to be in their password

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
 
 var userLength = prompt("Please choose desired length of your password (must be between 8 and 128)");
 
 console.log(userLength);
 
 //prompts the user to input a length in between 8 and 128 if they enter a length that is greater or lesser than the required input
 if (userLength < 8) {
        alert('The password must be at least 8 characters! Please input a new number.');
        return;
    }
    if (userLength > 128) {
        alert('The password must be less than 128 characters! Please input a new number.');
        return;
    }
    if (userLength === isNaN) {
        alert('That is not a valid length! Please input a number.')
        return;
}
 
 //var password = generatePassword();
 var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start working code
// User input variables: 
