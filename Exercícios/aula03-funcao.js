let peso = 65;
let altura = 1.62;

function calculadoraIMC() {
  let resultado = peso / (altura * altura);
  console.log(resultado);
  return resultado;
}

calculadoraIMC();

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}
