let numeros = [20, 10, 5];
let outrosNumeros = [200, 10, 2];

let soma = numeros.reduce(function (resultadoFuncao, cadaElemento) {
  return resultadoFuncao + cadaElemento;
});

let subtracao = numeros.reduce(function (resultadoFuncao, cadaElemento) {
  return resultadoFuncao - cadaElemento;
});

let multiplicacao = numeros.reduce(function (resultadoFuncao, cadaElemento) {
  return resultadoFuncao * cadaElemento;
});

let divisao = outrosNumeros.reduce(function (resultadoFuncao, cadaElemento) {
  return resultadoFuncao / cadaElemento;
});

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
