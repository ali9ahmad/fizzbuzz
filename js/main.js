// GET ELEMENTS

var elFizzBuzzForm = document.querySelector(".js-fizzbuzz-from");
var elFizzBuzzInput = document.querySelector(".js-fizzbuzz-input");
var elFizzBuzzResult = document.querySelector(".js-fizzbuzz-result");

// console.log(elFizzBuzzForm);
// console.log(elFizzBuzzInput);
// console.log(elFizzBuzzResult);

elFizzBuzzForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var inputValue = elFizzBuzzInput.value.trim();
    
    if (inputValue % 3 === 0 && inputValue % 5 === 0){
        elFizzBuzzResult.textContent = "Look! It is working. I told you. The resilt is FizzBuzz. Means it can be divided to 3 and 5";
    } else if (inputValue % 3 === 0) {
        elFizzBuzzResult.textContent = "And, now it can be divided only to 3 thus the result is fizz"
    } else if (inputValue % 5 === 0 ){
        elFizzBuzzResult.textContent = "Now it can be divided only to 5 and the result is Buzz"
    } else {
        elFizzBuzzResult.textContent = `${inputValue} can not be divided neither to 3 nor 5.`
    }
});