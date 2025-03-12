const display = document.getElementById('display');
let currentInput = '';
let isEvaluated = false;

const buttons = document.querySelectorAll('.btn');

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        // If equal button pressed, evaluate expression
        if (button.id === 'equal') {
            evaluateExpression();
        }
        // If AC button pressed, clear all
        else if (button.id === 'clear') {
            clearAll();
        }
        // If DEL button pressed, delete last character
        else if (button.id === 'delete') {
            deleteLast();
        }
        // If square button pressed, perform square operation
        else if (button.id === 'square') {
            squareNumber();
        }
        // If any operator or number is pressed, add to input
        else {
            addToInput(value);
        }
    });
});

function addToInput(value) {
    // If the previous result was evaluated, start a new input
    if (isEvaluated) {
        currentInput = '';
        isEvaluated = false;
    }

    // Append input and display it
    currentInput += value;
    display.value = currentInput;
}

function evaluateExpression() {
    try {
        const result = eval(currentInput.replace(/x/g, '*')); // Replace custom x for multiplication
        display.value = result;
        currentInput = result.toString();
        isEvaluated = true;
    } catch (error) {
        display.value = 'Error';
    }
}

function clearAll() {
    currentInput = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput || '0';
}

function squareNumber() {
    try {
        const number = parseFloat(currentInput);
        const square = Math.pow(number, 2);
        display.value = square;
        currentInput = square.toString();
        isEvaluated = true;
    } catch (error) {
        display.value = 'Error';
    }
}
