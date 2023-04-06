let resultado = document.getElementById('resultado');

function addNumber(number) {
  resultado.value += number;
}

function addOperator(operator) {
  resultado.value += ' ' + operator + ' ';
}

function clearDisplay() {
  resultado.value = '';
}

function backspace() {
  resultado.value = resultado.value.slice(0, -1);
}

function calculate() {
  resultado.value = eval(resultado.value);
}
