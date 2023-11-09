let expression = ""; 
const inputField = document.querySelector('input');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
      evaluateExpression();
    } else if (buttonValue === 'C') {
      clearInput();
    } else {
      appendToExpression(buttonValue);
    }
  });
});

function evaluateExpression() {
  try {
    const result = eval(expression);
    inputField.value = result;
    expression = result.toString(); 
  } catch (error) {
    inputField.value = 'Error';
    expression = ''; 
  }
}

function clearInput() {
  expression = '';
  inputField.value = '';
}

function appendToExpression(value) {
  expression += value;
  inputField.value = expression;
}
