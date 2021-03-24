'use strict';
// Business logic:

function add(number1, number2) {
  return number1 + number2;
};

function subtract(number1, number2) {
  return number1 - number2;
};

function multiply(number1, number2) {
  return number1 * number2;
};

function divide(number1, number2) {
  return number1 / number2;
};


// Everything below this line is user interface logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    let result
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    //this is to find why we are gettin NaN and how to trace it 
    //1.console.log(event)
    //2.console.log(event.originalEvent)
    //3.console.log(event.originalEvent.submitter)

    // console.log(event.originalEvent.submitter.innerHTML)

    if (event.originalEvent.submitter.innerHTML === "Add!") {
      result = add(number1, number2)
    } 
    if (event.originalEvent.submitter.innerHTML === "Subtract!") {
      result = subtract(number1, number2)
    } 
    if (event.originalEvent.submitter.innerHTML === "Multiply!") {
      result = multiply(number1, number2)
    } 
    if (event.originalEvent.submitter.innerHTML === "Divide!") {
      result = divide(number1, number2)
    } 
    

    // const result = add(number1, number2);
    $("#output").text(result);
  });
});

