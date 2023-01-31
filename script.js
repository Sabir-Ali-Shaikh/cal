var input = document.getElementById('input'), 
  number = document.querySelectorAll('.numbers input'),
  operator = document.querySelectorAll('.operators input'), 
  result = document.getElementById('result'), 
  clear = document.getElementById('clear'), 
  resultDisplayed = false; 

for (var i = 0; i < number.length; i++) {   
number[i].addEventListener("click", function(e) {
  var currentString = input.value;

  var lastChar = currentString[currentString.length - 1];
console.log(e.target.value);

  if (resultDisplayed === false) {
    input.value += e.target.value;

   } 
  else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "÷") {

    resultDisplayed = false;
    input.value += e.target.value;

  } else {
    resultDisplayed = false;
    input.value = "";
    input.value += e.target.value;

  }

});
}

for (var i = 0; i < operator.length; i++) {
operator[i].addEventListener("click", function(e) {

  var currentString = input.value;
  var lastChar = currentString[currentString.length - 1];

  if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "÷") {
    var newString = currentString.substring(0, currentString.length - 1) + e.target.value;
    console.log(newString);
    input.value = newString;
  } else if (currentString.length == 0) {
    alert("enter a number first");
  } else {
    input.value += e.target.value;
  }

});
}

result.addEventListener("click", function() {

var inputString = input.value;
var numbers = inputString.split(/\+|\-|\*|\÷/g);
var operators = inputString.replace(/[0-9]|\./g, "").split("");

console.log(inputString);
console.log(operators);
console.log(numbers);

var divide = operators.indexOf("÷");
while (divide != -1) {
  numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
  operators.splice(divide, 1);
  divide = operators.indexOf("÷");
}

var multiply = operators.indexOf("*");
while (multiply != -1) {
  numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
  operators.splice(multiply, 1);
  multiply = operators.indexOf("*");
}

var subtract = operators.indexOf("-");
while (subtract != -1) {
  numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
  operators.splice(subtract, 1);
  subtract = operators.indexOf("-");
}

var add = operators.indexOf("+");
while (add != -1) {
  numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
  operators.splice(add, 1);
  add = operators.indexOf("+");
}

input.value = numbers[0]; 

resultDisplayed = true; 
});
clear.addEventListener("click", function() {
input.value = "";
})

function back() {
    var value = input.value ;
    input.value  = value.substr(0, value.length - 1);
}