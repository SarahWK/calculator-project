//Calculator Project
var add = function(number1, number2) {
       return number1 + number2;
     };


     var multiply = function (number1, number2) {
       return number1 * number2;
     };

     var divide = function(number1, number2) {
        return number1 / number2;
     };

     var subtract = function(number1, number2) {
       return number1 - number2;
     }

//user responds 1
var number1 = parseInt(prompt("Enter a number:"));
alert(number1);

//user responds 2
var number2 = parseInt(prompt("Enter another number:"));
alert(number2);

//answer
    alert(add(number1,number2));
    alert(multiply(number1, number2));
    alert(divide(number1, number2));
    alert(subtract(number1, number2));
