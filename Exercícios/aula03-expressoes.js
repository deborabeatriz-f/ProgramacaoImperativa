let somar = function (n1, n2) {
  return n1 + n2;
};

let subtrair = function (n1, n2) {
  return n1 - n2;
};

let multiplicar = function(n1, n2) {
  return n1 * n2;
};

let dividir = function(n1, n2) {
  if (n2 == 0) {
    return "Não é possível dividir por zero.";
  } else {
    return n1 / n2;
  }
};

console.log(somar(1, 2));
console.log(subtrair(4, 2));
console.log(multiplicar(5, 2));
console.log(dividir(6, 2));
console.log(dividir(2, 0));
