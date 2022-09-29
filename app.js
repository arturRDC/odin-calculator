var displayValue = '';
var displayElement = document.querySelector('.display');
var currentOperation;
var operandA;
var operandB;


// Adds two numbers
function add(a, b) {
    return a + b;
}

// Subtracts two numbers
function subtract(a, b) {
    return a - b;
}

// Multiplies two numbers
function multiply(a, b) {
    return a * b;
}

// Divides two numbers
function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a,b);
}


function updateDisplay() {
    this.displayElement.textContent = displayValue;
}

function pressKey(id) {
    switch (id) {
        case 'one':
            displayValue += '1';
            updateDisplay();
            break;
        case 'two':
            displayValue += '2';
            updateDisplay();
            break;
        case 'three':
            displayValue += '3';
            updateDisplay();
            break;
        case 'four':
            displayValue += '4';
            updateDisplay();
            break;
        case 'five':
            displayValue += '5';
            updateDisplay();
            break;
        case 'six':
            displayValue += '6';
            updateDisplay();
            break;
        case 'seven':
            displayValue += '7';
            updateDisplay();
            break;
        case 'eight':
            displayValue += '8';
            updateDisplay();
            break;
        case 'nine':
            displayValue += '9';
            updateDisplay();
            break;
        case 'zero':
            displayValue += '0';
            updateDisplay();
            break;
        case 'addition':
            currentOperation = add;
            operandA = Number(displayValue);
            displayValue = '';
            break;
        case 'division':
            currentOperation = divide;
            operandA = Number(displayValue);
            displayValue = '';
            break;
        case 'subtraction':
            currentOperation = subtract;
            operandA = Number(displayValue);
            displayValue = '';
            break;
        case 'multiplication':
            currentOperation = multiply;
            operandA = Number(displayValue);
            displayValue = '';
            break;
        case 'ac':
            displayValue = '';
            updateDisplay();
            break;
        case 'dot':
            displayValue += '.';
            updateDisplay();
            break;
        case 'equals':
            operandB = Number(displayValue);
            displayValue = String(operate(currentOperation, operandA, operandB));
            updateDisplay();
            displayValue = '';
            break;
        default:
            break;
    }
}




let keys = document.querySelectorAll('.key');
// let oneKey = document.querySelector('#one');
// oneKey.addEventListener('click',()=> pressKey('one'));

keys.forEach(key => key.addEventListener('click',()=> pressKey(key.id)));
