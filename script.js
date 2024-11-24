let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
    const display = document.getElementById("display");
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
    display.innerText = currentOperand || '0';
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') calculate();
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    const display = document.getElementById("display");
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    let result;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        case '^':
            result = Math.pow(prev, current);
            break;
        default:
            return;
    }

    currentOperand = result.toString();
    previousOperand = '';
    operation = null;
    display.innerText = currentOperand;
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    document.getElementById("display").innerText = '0';
}

function appendDecimal() {
    appendNumber('.');
}

function negate() {
    if (!currentOperand) return;
    currentOperand = (parseFloat(currentOperand) * -1).toString();
    document.getElementById("display").innerText = currentOperand;
}

function percent() {
    if (!currentOperand) return;
    currentOperand = (parseFloat(currentOperand) / 100).toString();
    document.getElementById("display").innerText = currentOperand;
}

// Advanced Functions
function calculateFactorial() {
    const display = document.getElementById("display");
    const number = parseInt(currentOperand, 10);
    if (number < 0) {
        display.innerText = "Error";
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    currentOperand = factorial.toString();
    display.innerText = factorial;
}

function calculateSqrt() {
    const display = document.getElementById("display");
    const value = parseFloat(currentOperand);
    if (value < 0) {
        display.innerText = "Error";
        currentOperand = '';
    } else {
        currentOperand = Math.sqrt(value).toFixed(4);
        display.innerText = currentOperand;
    }
}

function calculatePower() {
    const display = document.getElementById("display");
    if (previousOperand === '') {
        previousOperand = currentOperand;
        currentOperand = '';
        operation = '^';
        display.innerText = 'Enter Exponent';
    } else {
        calculate();
    }
}

function calculateLog10() {
    const display = document.getElementById("display");
    const value = parseFloat(currentOperand);
    if (value <= 0) {
        display.innerText = "Error";
        currentOperand = '';
    } else {
        currentOperand = Math.log10(value).toFixed(4);
        display.innerText = currentOperand;
    }
}

function calculateLn() {
    const display = document.getElementById("display");
    const value = parseFloat(currentOperand);
    if (value <= 0) {
        display.innerText = "Error";
        currentOperand = '';
    } else {
        currentOperand = Math.log(value).toFixed(4);
        display.innerText = currentOperand;
    }
}

function calculateSin() {
    const display = document.getElementById("display");
    const value = parseFloat(currentOperand);
    currentOperand = Math.sin(value * Math.PI / 180).toFixed(4);
    display.innerText = currentOperand;
}

function calculateCos() {
    const display = document.getElementById("display");
    const value = parseFloat(currentOperand);
    currentOperand = Math.cos(value * Math.PI / 180).toFixed(4);
    display.innerText = currentOperand;
}

function calculateTan() {
    const display = document.getElementById("display");
    const value = parseFloat(currentOperand);
    if (value % 90 === 0 && (value / 90) % 2 !== 0) {
        display.innerText = "Infinity";
        currentOperand = '';
    } else {
        currentOperand = Math.tan(value * Math.PI / 180).toFixed(4);
        display.innerText = currentOperand;
    }
}
