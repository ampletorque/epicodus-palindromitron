var palindrome = function(word) {
  var word_array = word.split("");
  var reversed = word_array.slice().reverse();
//   if (word_array === reversed) {
//   return true;
// } else {
//   return false;
// }
// return word_array === reversed;
return word_array.every(function(element, index) {
  return element === reversed[index];
});

};


$(document).ready(function() {
  $("form#palindromeform").submit(function(event) {
    var word = $("input#word").val();
    var result = palindrome(word);
    if (result) {
      $(".output").text("It is a palindrome!");
    } else {
      $(".output").text("It is not a palindrome.");
    }
    $("#result").show();
    event.preventDefault();
  });
});
