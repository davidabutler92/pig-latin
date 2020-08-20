$(document).ready(function() {
  $("#piglatin-survey").submit(function(event) {
    event.preventDefault();

    const userInput = $("#userInput").val();
    const vowels = ["a", "e", "i", "o", "u"];
    const consonants = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z"];
    let pigLatinArr = [];

    //Function that only accepts letters and white spaces
    function isLetter(userInput) { 
      if (!isNaN(userInput)) {
        alert("Letters only! No numbers please, enter a phrase.");
      }
    }
    isLetter(userInput); //<<< I learned that you have to call the funtion to use it.
    
    //funtion for translating userInput and returning pig latin
    const splitArr = userInput.split(" ");
    splitArr.forEach(word => {
      if(vowels.includes(word[0])) {
        word = word + "way"
        pigLatinArr.push(word);
      } else if (word[0] === "q" && word[1] === "u") {
        word = word + word[0] + word[1] + "ay"
        word = word.substring(2, word.length-1)
        pigLatinArr.push(word);
      }
      
    });
    console.log(pigLatinArr);
  });
});