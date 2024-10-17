let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput || previousInput || '0';
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;
    switch (operator) {
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
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

function calculatePower() {
    if (previousInput === '' || currentInput === '') return;
    const base = parseFloat(previousInput);
    const exponent = parseFloat(currentInput);
    currentInput = Math.pow(base, exponent).toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}
