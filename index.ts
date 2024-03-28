#! /usr/bin/env node
//denoted as shabang

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter firstNumber", type: "number", name: "firstNumber" },
  { message: "enter secondNumber", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operations",
    type: "list",
    name: "operator",
    choices: [ "addition", "subtraction", "multiplication", "division" ]
  },
]);
//conditional statements
if(answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.operatos === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === "division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else{
    console.log("please enter valid operator");
}