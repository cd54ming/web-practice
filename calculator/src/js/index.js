//tutorial: https://www.youtube.com/watch?v=j59qQ7YWLxw&list=LLHkDwG70IPcdHxUOQEXfZMw

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operator = "";
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) {
      return;
    }
    switch (this.operator) {
      case "÷":
        result = prev / current;
        break;
      case "/": //for keyboard
        result = prev / current;
        break;
      case "×":
        result = prev * current;
        break;
      case "*": //for keyboard
        result = prev * current;
        break;
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "%":
        result = prev % current;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.previousOperand = this.operator = "";
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.toString().includes(number)) {
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperator(operator) {
    if (this.currentOperand === "") {
      if (!isNaN(parseFloat(this.previousOperand))) {
        this.operator = operator;
      }
      return;
    }
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operator = operator;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    let integerDigits = parseFloat(stringNumber.split(".")[0]);
    let decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    }
    return integerDisplay;
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
      this.previousOperand
    )} ${this.operator}`;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear]");
const equalsButton = document.querySelector("[data-equals]");
const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperator(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

clearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

const numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
document.addEventListener("keydown", function(e) {
  if (numberArr.includes(e.key)) {
    calculator.appendNumber(e.key);
  } else if (e.key === "Backspace") {
    calculator.delete();
  } else if (
    e.key === "-" ||
    e.key === "/" ||
    (e.shiftKey && (e.key === "+" || e.key === "*" || e.key === "%"))
  ) {
    calculator.chooseOperator(e.key);
  } else if (e.key === "Enter" || e.key === "=") {
    calculator.compute();
  }
  calculator.updateDisplay();
  console.log(e);
});
