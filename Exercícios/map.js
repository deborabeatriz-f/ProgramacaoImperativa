let numeros = [2, 4, 6];

let dobro = numeros.map(function (cadaElemento) {
  return cadaElemento * 2;
});

let triplo = numeros.map((cadaElemento) => {
  return cadaElemento * 3;
});

let triploTriplo = triplo.map((cadaElemento) => {
  return cadaElemento * 3;
});

console.log(numeros);
console.log(dobro);
console.log(triplo);
console.log(triploTriplo);
