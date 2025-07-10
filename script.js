function makePassword() {
  var passwordLength = Number(document.getElementById("length").value);
  var includeUppercase = document.getElementById("uppercase").checked;
  var includeNumbers = document.getElementById("numbers").checked;
  var includeSymbols = document.getElementById("symbols").checked;
  var outputBox = document.getElementById("output");

  if (isNaN(passwordLength)) {
    alert("❌ Please enter a valid number for length.");
    outputBox.textContent = "(New PASSWORD)";
    return;
  }

  if (passwordLength < 4 || passwordLength > 16) {
    alert("❌ Length must be between 4 and 16.");
    outputBox.textContent = "(New PASSWORD)";
    return;
  }

  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters = "0123456789";
  var symbolCharacters = "!@#$%^&*";

  var allCharacters = lowercaseLetters;
  if (includeUppercase) { allCharacters += uppercaseLetters; }
  if (includeNumbers) { allCharacters += numberCharacters; }
  if (includeSymbols) { allCharacters += symbolCharacters; }

  if (allCharacters.length === 0) {
    alert("❌ No characters available to generate password.");
    outputBox.textContent = "(New PASSWORD)";
    return;
  }

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i = i + 1) {
    var resultantIndex = Math.floor(Math.random() * allCharacters.length);
    generatedPassword += allCharacters.charAt(resultantIndex);
  }

  outputBox.textContent = generatedPassword;
}

function copyPassword() {
  var copiedText = document.getElementById("output").textContent;
  if (copiedText === "" || copiedText === "(New PASSWORD)") {
    alert("Nothing to copy.");
    return;
  }

  navigator.clipboard.writeText(copiedText);
  alert("✅ Password copied to clipboard!");
}
