$(document).ready(function() {
  $("#piglatin-survey").submit(function(event) {
    event.preventDefault();

    const userInput = $("#userInput").val();
    console.log(userInput);
    const vowels = ["a", "e", "i", "o", "u"];
    const consonants = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z"];
    let pigLatin = [];

    function isLetter(userInput) { 
      if (!isNaN(userInput)) {
        alert("Letters only! No numbers please, enter a phrase.");
      }
    }
    isLetter(userInput);
  });
});