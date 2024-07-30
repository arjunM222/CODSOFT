let screen = document.getElementById('screen');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    screen.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '' && operator !== '-') return;
    if (currentInput.slice(-1) === ' ') {
        currentInput = currentInput.slice(0, -3);
    }
    currentInput += ` ${operator} `;
    screen.value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput.replace(/ /g, ''));
        screen.value = currentInput;
    } catch (error) {
        screen.value = 'Error';
        currentInput = '';
    }
}

function clearScreen() {
    currentInput = '';
    screen.value = '';
}
