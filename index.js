const inquirer = require("inquirer").default;

async function calculator() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "num1",
      message: "Enter first number:",
    },
    {
      type: "input",
      name: "num2",
      message: "Enter second number:",
    },
    {
      type: "list",
      name: "operation",
      message: "Choose operation:",
      choices: ["+", "-", "*", "/", "%"],
    },
    {
      type: "confirm",
      name: "again",
      message: "Do another calculation?",
    },
  ]);

  const num1 = Number(answers.num1);
  const num2 = Number(answers.num2);

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers.");
    return;
  }

  let result;

  switch (answers.operation) {
    case "+":
      result = add(num1, num2);
      break;

    case "-":
      result = subtract(num1, num2);
      break;

    case "*":
      result = multiply(num1, num2);
      break;

    case "/":
      result = divide(num1, num2);
      break;

    case "%":
      result = modulo(num1, num2);
      break;
  }

  console.log(`\nResult: ${result}\n`);

  if (answers.again) {
    calculator();
  } else {
    console.log("Goodbye!");
  }
}

// addition
function add(a, b) {
  return a + b;
}

// subtract
function subtract(a, b) {
  return a - b;
}

// multiply
function multiply(a, b) {
  return a * b;
}

// divide
function divide(a, b) {
  return a / b;
}

// modulo
function modulo(a, b) {
  return a % b;
}

calculator();