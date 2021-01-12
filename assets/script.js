// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment Code
function writePassword() {

  var password = createPassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Arrays for the options that can be used in the password 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "|", "[", "]", ";", "<", ">", "?", "/"];




function createPassword() {
  // Stores the characters that are being inputted
let userInput = [];

  // Asks how long the user's password will be and then adds the password to the input
  var userLength = prompt("Will you please choose the desired length of your password (it must be between 8 and 128).");

  console.log(userLength);

   // Converts userLengthParseInt into an interger and checks to see if it is a valid number
  var userLengthParseInt = parseInt(userLength);



 
  if (userLength === null) {

    alert("Please enter a valid length.")
      return finalPassword = "";

  }




  // Makes sure that the user's input is equal to or in between 8 and 128
  else if (Number.isNaN(userLengthParseInt) || userLength < 8 || userLength > 128) {

    alert("Not a valid length! Please input a number between 8 and 128.")
    return finalPassword = "";

  }
 
  // Confirms if the user wants or does not want lower case characters in the password.  Concats it if the user confirms. 
  else {

    var userInputLowerCase = confirm("Do you want your password to have any lower case letters?");

    if (userInputLowerCase) {

      userInput = userInput.concat(lowerCase);
      
    }
    // Confirms if the user wants or does not want upper case characters in the password.  Concats it if the user confirms. 
    var userInputUpperCase = confirm("Do you want your password to have any upper case letter?");

    if (userInputUpperCase) {

      userInput = userInput.concat(upperCase);

    }
    // Confirms if the user wants or does not want numeric characters in the password.  Concats it if the user confirms. 
    var userInputNumeric = confirm("Do you want your password to have any numbers?");

    if (userInputNumeric) {

      userInput = userInput.concat(numeric);
      
    }
    // Confirms if the user wants or does not want special characters in the password.  Concats it if the user confirms. 
    var userInputSpecial = confirm("Do you want your password to have any special characters?");

    if (userInputSpecial) {

      userInput = userInput.concat(specialCharacters);
      

    }
  
    // Confirms that user chose at least one character 
    if (userInputUpperCase === false && userInputLowerCase === false && userInputNumeric === false && userInputSpecial === false) {

      alert("Please fill in at least one prompt")
      return finalPassword = ""

    }
  }

  // Stores the  password
  var finalPassword = "";

  // Is the loop that randomly chooses the characters from the various arrays that the user chose
  for (var i = 0; i < userLength; i++) {
    
    var index = Math.floor(Math.random() * Math.floor(userInput.length));
    finalPassword += userInput[index] + "";

    console.log(finalPassword)
  }

  // Returns the password
  return finalPassword;

}


