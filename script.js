
let topresent= document.getElementById('topresent');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number === '0') return;
    currentInput += number;
    topresent.textContent = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return;
    currentInput += operator;
    topresent.textContent = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        topresent.textContent = currentInput;
    } catch {
        topresent.textContent = 'Error';
    }
}

function clearDisplay() {
    currentInput = '';
    topresent.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    topresent.textContent = currentInput || '0';
}