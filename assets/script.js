// Push "Generate Password" to open Prompt
var  length;
var temp = "";
var newPassword;
var chars = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: "!@#$%^&*()"
}
function generatePassword () {
//Take an input from user to define password length
function initPrompt() {
var text;

// Initiate Prompt for character length
length = prompt("Welcome to the Password Generator/nHow many characters do you need from 8 to 128?", 8);

  // Check the validity of user input
  if (length == null || length == "") {
    text = "User cancelled the prompt.";
  } else if (length < 8 || length > 128) {
    alert("Your input is not between 8 and 128. \nPlease select a number between 8 and 128.");
    initPrompt();
  }
  else {
    text = "Confirm you need " + length + " characters, Please.";
  }

// Returns the length of characters
length = Number(length);
// alert(typeof length);
return length;
}

// Define the characters that will be used
function passwordChar() {
  for (i = 0; i < Object.keys(chars).length; i++) {
        if (confirm("Want to include " + Object.keys(chars)[i] + " characters?")) {
          temp = temp + Object.values(chars)[i];
      } else {
        alert("Will not include " + Object.keys(chars)[i]);
      }
    }
  return temp;
}

// Generate password function given length and characters
function passwordGenerator (x, y) {
var randPassword = "";  
  for (i = 0; i < x; i++) {
    rand = y[Math.floor(Math.random() * y.length)];
    randPassword = randPassword + rand;
  }
  return randPassword;
}

initPrompt();
passwordChar();
newPassword = passwordGenerator(length, temp);  
// Returns string to the text field
document.getElementById("password").innerHTML = newPassword;
}


// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);