// var poundsWeight = prompt("Enter your weight in pounds: ");
// var kgWeight = poundsWeight * 0.454;
// alert("Your weight in KG is " + kgWeight);
// console.log("Conversion Completed");

alert("Welcome to SIMPLE CALCULATOR INTERFACE");
operation = prompt(
  "Enter the operation you want to perform from this box ---> (/,*,+,-)"
);

function calculate(operation) {
  firstNum = prompt("Enter your first number: ");
  secondNum = prompt("Enter your second number: ");
  if (operation == "+") {
    result = parseInt(firstNum) + parseInt(secondNum);
  } else if (operation == "-") {
    result = parseInt(firstNum) - parseInt(secondNum);
  } else if (operation == "/") {
    result = parseInt(firstNum) / parseInt(secondNum);
  } else if (operation == "*") {
    result = parseInt(firstNum) * parseInt(secondNum);
  }
  alert(firstNum + " " + operation + +secondNum + " is " + result);
}

calculate(operation);
