// tutorial: https://www.youtube.com/watch?v=j59qQ7YWLxw&list=LLHkDwG70IPcdHxUOQEXfZMw
class Calculator {
  constructor(operationTextElement) {
    this.operationTextElement = operationTextElement;
    this.clear();
  }

  clear() {
    this.operation = '';
    this.currentNumber = '';
    this.currentOperator = undefined;
  }

  delete() {
    this.operation = this.operation.toString().slice(0, -1);
  }

  operationToArray(operationString) {
    let number = '';
    let operationArray = [];
    const operator = '+-*/%';
    for (let i = 0; i < operationString.length; i++) {
      if (operator.includes(operationString[i])) {
        operationArray.push(number, operationString[i]);
        number = '';
      } else {
        number += operationString[i].toString();
      }
    }
    operationArray.push(number);
    return operationArray;
  }

  toPostfix(operationArray) {
    let operationPostfix = [];
    const operatorStack = [];
    for (let i = 0; i < operationArray.length; i++) {
      if (!Number(operationArray[i])) {
        // operation[i] is a operator
        if (operatorStack.length !== 0) {
          if (
            (operationArray[i] === '*' ||
              operationArray[i] === '/' ||
              operationArray[i] === '%') &&
            (operatorStack[operatorStack.length - 1] === '+' ||
              operatorStack[operatorStack.length - 1] === '-')
          ) {
            operatorStack.push(operationArray[i]);
          } else {
            operationPostfix.push(operatorStack.pop());
            operatorStack.push(operationArray[i]);
          }
        } else {
          operatorStack.push(operationArray[i]);
        }
      } else {
        // operatoin[i] is a operand
        operationPostfix.push(operationArray[i]);
      }
    }
    let operatorStackHeight = operatorStack.length;
    for (let i = 0; i < operatorStackHeight; i++) {
      operationPostfix.push(operatorStack.pop());
    }
    return operationPostfix;
  }

  compute() {
    const operationArray = this.operationToArray(this.operation);
    const operationPostfix = this.toPostfix(operationArray);
    const operator = '+-*/%';
    let result = [];
    for (let i = 0; i < operationPostfix.length; i++) {
      if (operator.includes(operationPostfix[i])) {
        let secondOperand = result.pop();
        let firstOperand = result.pop();
        switch (operationPostfix[i]) {
          case '+':
            result.push(firstOperand + secondOperand);
            break;
          case '-':
            result.push(firstOperand - secondOperand);
            break;
          case '*':
            result.push(firstOperand * secondOperand);
            break;
          case '/':
            result.push(firstOperand / secondOperand);
            break;
          case '%':
            result.push(firstOperand % secondOperand);
            break;
        }
      } else {
        result.push(Number(operationPostfix[i]));
      }
    }
    this.operation = result[0].toString();
  }

  addNumber(number) {
    if (number === '.' && this.currentNumber.includes('.')) {
      return;
    }
    this.currentNumber = this.currentNumber.toString() + number.toString();
    this.operation = this.operation.toString() + number.toString();
  }

  chooseOperator(operator) {
    if (!isNaN(this.operation[this.operation.length - 1])) {
      // the last element is a number
      this.operation = this.operation.toString() + operator.toString();
    } else {
      // the last element is operator
      this.operation = this.operation.slice(0, -1);
      this.operation = this.operation.toString() + operator.toString();
    }
    this.currentNumber = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    let integerDigits = parseFloat(stringNumber.split('.')[0]);
    let decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    }
    return integerDisplay;
  }

  updateDisplay() {
    this.operationTextElement.innerText = this.operation;
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const equalsButton = document.querySelector('[data-equals]');
const operationTextElement = document.querySelector('[data-operation]');

const calculator = new Calculator(operationTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.addNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperator(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});

const numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
document.addEventListener('keydown', function(e) {
  if (numberArr.includes(e.key)) {
    calculator.addNumber(e.key);
  } else if (e.key === 'Backspace') {
    calculator.delete();
  } else if (
    e.key === '-' ||
    e.key === '/' ||
    (e.shiftKey && (e.key === '+' || e.key === '*' || e.key === '%'))
  ) {
    calculator.chooseOperator(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    calculator.compute();
  } else if (e.key === 'Escape') {
    calculator.clear();
  }
  calculator.updateDisplay();
});

const colorThemeSwitch = document.querySelector('#colorTheme');
const colorTheme = localStorage.getItem('colorTheme');
if (colorTheme === 'dark') {
  colorThemeSwitch.checked = true;
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  // if colorTheme === null will goes here
  colorThemeSwitch.checked = false;
  document.documentElement.setAttribute('data-theme', 'light');
}
colorThemeSwitch.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('colorTheme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('colorTheme', 'light');
  }
});
