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
  // $("form").submit(function(event) {
  //   event.preventDefault();

  //   let result
  //   const number1 = parseInt($("#value1").val());
  //   const number2 = parseInt($("#value2").val());
  //   //this is to find why we are gettin NaN and how to trace it 
  //   //1.console.log(event)
  //   //2.console.log(event.originalEvent)
  //   //3.console.log(event.originalEvent.submitter)

  //   // console.log(event.originalEvent.submitter.innerHTML)

  //   if (event.originalEvent.submitter.innerHTML === "Add!") {
  //     result = add(number1, number2)
  //   } 
  //   if (event.originalEvent.submitter.innerHTML === "Subtract!") {
  //     result = subtract(number1, number2)
  //   } 
  //   if (event.originalEvent.submitter.innerHTML === "Multiply!") {
  //     result = multiply(number1, number2)
  //   } 
  //   if (event.originalEvent.submitter.innerHTML === "Divide!") {
  //     result = divide(number1, number2)
  //     console.log("result");
  //   } 
    

  //   // const result = add(number1, number2);
  //   $("#output").val(result);
  // });



  // New Project starts here
  // When one button is clicked, select that value
  let number1 = "";
  let number2 = "";
  let operation;
  let firstNumber = true;

  $(".btn").click(function(event) {
    const numberOrOperand = event.target.id;
    
    console.log(numberOrOperand);

    // see which is button is clicked
    //  NUMBERS
    if (numberOrOperand === "one") {
      if (firstNumber === true) {
        number1 += "1";
      } else {
        number2 += "1";
      }
    }
    if (numberOrOperand === "two") {
      if (firstNumber === true) {
        number1 += "2";
      } else {
        number2 += "2";
      }
    }
    if (numberOrOperand === "three") {
      if (firstNumber === true) {
        number1 += "3";
      } else {
        number2 += "3";
      }
    }
    if (numberOrOperand === "four") {
      if (firstNumber === true) {
        number1 += "4";
      } else {
        number2 += "4";
      }
    }
    if (numberOrOperand === "five") {
      if (firstNumber === true) {
        number1 += "5";
      } else {
        number2 += "5";
      }
    }
    if (numberOrOperand === "six") {
      if (firstNumber === true) {
        number1 += "6";
      } else {
        number2 += "6";
      }
    }
    if (numberOrOperand === "seven") {
      if (firstNumber === true) {
        number1 += "7";
      } else {
        number2 += "7";
      }
    }
    if (numberOrOperand === "eight") {
      if (firstNumber === true) {
        number1 += "8";
      } else {
        number2 += "8";
      }
    }
    if (numberOrOperand === "nine") {
      if (firstNumber === true) {
        number1 += "9";
      } else {
        number2 += "9";
      }
    }
    if (numberOrOperand === "zero") {
      if (firstNumber === true) {
        number1 += "0";
      } else {
        number2 += "0";
      }
    }

    //  OPERATORS
    if (numberOrOperand === "add") {
      operation = "add";
      firstNumber = false;
    }
    if (numberOrOperand === "subtract") {
      operation = "subtract";
      firstNumber = false;
    }
    if (numberOrOperand === "multiply") {
      operation = "multiply";
      firstNumber = false;
    }
    if (numberOrOperand === "divide") {
      operation = "divide";
      firstNumber = false;
    }
    
    // COMMANDS
    if (numberOrOperand === "clear") {
      number1 = "";
      number2 = "";
      firstNumber = true;
    }

    let result;

    if (numberOrOperand === "equals") {
      // figure out which function to call 
      if (operation === "add") {
        result = add(parseInt(number1), parseInt(number2));
      }
      if (operation === "subtract") {
        result = subtract(parseInt(number1), parseInt(number2));
      }
      if (operation === "multiply") {
        result = multiply(parseInt(number1), parseInt(number2));
      }
      if (operation === "divide") {
        result = divide(parseInt(number1), parseInt(number2));
      }  
    }
    
    if (result !== undefined) {
      const htmlText = "" + number1 + " " + operation + " " + number2 + " = " + result;
      $(".result").val(htmlText); 
      firstNumber = true;
      number1 = "";
      number2 = "";
    }

    // if (".btn" === "#seven") {
    //   ("#seven").select()
    // }
  });    



});

