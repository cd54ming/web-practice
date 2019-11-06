// tutorial: https://www.youtube.com/watch?v=j59qQ7YWLxw&list=LLHkDwG70IPcdHxUOQEXfZMw

// issue:
//  4.8 / 3 = 1.5999999999999999
//  input parentheses
//  negative number

class Calculator {
  constructor(
    operationTextElement,
    instantResultTextElement,
    operatorCollection
  ) {
    this.operationTextElement = operationTextElement;
    this.instantResultTextElement = instantResultTextElement;
    this.operatorCollection = operatorCollection;
    this.clear();
  }

  clear() {
    this.operation = '';
    this.instantResult = '';
    this.currentNumber = '';
  }

  delete() {
    this.operation = this.operation.slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentNumber.includes('.')) {
      return;
    }
    this.currentNumber += number.toString();
    this.operation += number.toString();
  }

  appendOperator(operator) {
    const lastChar = this.operation[this.operation.length - 1];
    if (!lastChar) {
      this.operation += '0';
    }
    // if last char already is a operator, then repalce
    if (this.operatorCollection.includes(lastChar)) {
      this.operation = this.operation.slice(0, -1);
    }
    this.operation += operator.toString();
    this.currentNumber = '';
  }

  // input a operation string, split by operator, and output a array
  operationToArray(operationString) {
    let number = '';
    const operationArray = [];
    for (let i = 0; i < operationString.length; i++) {
      if (this.operatorCollection.includes(operationString[i])) {
        operationArray.push(number, operationString[i]);
        number = '';
      } else {
        number += operationString[i];
      }
    }
    if (number !== '') {
      operationArray.push(number);
    }
    return operationArray;
  }

  // input a opeartion array, output to a postfix array
  toPostfix(operationArray) {
    const operationPostfix = [];
    const operatorStack = [];
    const heavyOperator = '*/%';
    const lightOperator = '+-';
    for (let i = 0; i < operationArray.length; i++) {
      if (this.operatorCollection.includes(operationArray[i])) {
        if (operatorStack.length === 0) {
          operatorStack.push(operationArray[i]);
        } else {
          const uppermostOperator = operatorStack[operatorStack.length - 1];
          if (
            heavyOperator.includes(operationArray[i]) &&
            lightOperator.includes(uppermostOperator)
          ) {
            operatorStack.push(operationArray[i]);
          } else {
            operationPostfix.push(operatorStack.pop());
            operatorStack.push(operationArray[i]);
          }
        }
      } else {
        operationPostfix.push(operationArray[i]);
      }
    }
    while (operatorStack.length > 0) {
      operationPostfix.push(operatorStack.pop());
    }
    return operationPostfix;
  }

  compute() {
    this.instantResult = this.operation;
    const operationArray = this.operationToArray(this.instantResult);
    const operationPostfix = this.toPostfix(operationArray);
    const result = [];
    operationPostfix.forEach(operation => {
      if (this.operatorCollection.includes(operation)) {
        const secondOperation = result.pop();
        const firstOperation = result.pop();
        switch (operation) {
          case '+':
            result.push(firstOperation + secondOperation);
            break;
          case '-':
            result.push(firstOperation - secondOperation);
            break;
          case '*':
            result.push(firstOperation * secondOperation);
            break;
          case '/':
            result.push(firstOperation / secondOperation);
            break;
          case '%':
            result.push(firstOperation % secondOperation);
            break;
        }
      } else {
        result.push(Number(operation));
      }
    });
    this.instantResult =
      isNaN(result[0]) || result[0] === Infinity ? NaN : result[0].toString();
  }

  getResult() {
    if (isNaN(this.instantResult)) {
      console.log('不要隨便亂輸入好嗎? 防呆很累');
    } else if (this.instantResult === '') {
      console.log('看起來你不需要計算');
    } else {
      this.operation = this.instantResult;
      this.instantResult = '';
    }
  }

  // add ',' to number
  getDisplayNumber(number) {
    const numberString = number.toString();
    const integerDigits = parseFloat(numberString.split('.')[0]);
    const decimalDigits = numberString.split('.')[1]; // decimalDigits is a string
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

  getDisplay(operationArray) {
    let display = '';
    operationArray.forEach(operation => {
      if (this.operatorCollection.includes(operation)) {
        display += operation;
      } else {
        display += this.getDisplayNumber(operation);
      }
    });
    return display;
  }

  updateDisplay() {
    const operationArray = this.operationToArray(this.operation);
    this.operationTextElement.innerText = this.getDisplay(operationArray);
    if (isNaN(this.instantResult)) {
      this.instantResultTextElement.innerText = '';
    } else {
      const resultArray = this.operationToArray(this.instantResult);
      this.instantResultTextElement.innerText = this.getDisplay(resultArray);
    }
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const equalsButton = document.querySelector('[data-equals]');
const operationTextElement = document.querySelector('[data-operation]');
const instantResultTextElement = document.querySelector(
  '[data-instant-result]'
);

let calculatorOperator = '';
operatorButtons.forEach(button => {
  calculatorOperator += button.innerText;
});
const calculator = new Calculator(
  operationTextElement,
  instantResultTextElement,
  calculatorOperator
);

// input by click
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.compute();
    calculator.updateDisplay();
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendOperator(button.innerText);
    calculator.compute();
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', () => {
  calculator.getResult();
  calculator.updateDisplay();
});

clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.compute();
  calculator.updateDisplay();
});

// input by keyboard
const numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
document.addEventListener('keydown', e => {
  if (numberArr.includes(e.key)) {
    calculator.appendNumber(e.key);
    calculator.compute();
  } else if (e.key === 'Backspace') {
    calculator.delete();
    calculator.compute();
  } else if (
    e.key === '-' ||
    e.key === '/' ||
    (e.shiftKey && (e.key === '+' || e.key === '*' || e.key === '%'))
  ) {
    calculator.appendOperator(e.key);
    calculator.compute();
  } else if (e.key === 'Enter' || e.key === '=') {
    calculator.getResult();
  } else if (e.key === 'Escape') {
    calculator.clear();
  }
  calculator.updateDisplay();
});

// switch dark and light mode
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
