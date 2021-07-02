function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

let nome1 = "José";
let sobrenome1 = "da Silva";
let nomeCompleto1 = nome1 + " " + sobrenome1;
let idade1 = 27;
let peso1 = 83.5;
let altura1 = 1.7;
let plano1 = true;
let imcCalculado1 = calcularIMC(peso1, altura1);

let nome2 = "Carlos";
let sobrenome2 = "de Souza";
let nomeCompleto2 = nome2 + " " + sobrenome2;
let idade2 = 28;
let peso2 = 80.1;
let altura2 = 1.76;
let plano2 = true;
let imcCalculado2 = calcularIMC(peso2, altura2);

let nome3 = "Ana";
let sobrenome3 = "Ferreira";
let nomeCompleto3 = nome3 + " " + sobrenome3;
let idade3 = 33;
let peso3 = 63.7;
let altura3 = 1.53;
let plano3 = false;
let imcCalculado3 = calcularIMC(peso3, altura3);

console.log(imcCalculado1);
console.log(
  `${nomeCompleto1} tem ${idade1} e seu índice de massa corporal é de ${imcCalculado1}`
);

console.log(imcCalculado2);
console.log(
  `${nomeCompleto2} tem ${idade2} e seu índice de massa corporal é de ${imcCalculado2}`
);

console.log(imcCalculado3);
console.log(
  `${nomeCompleto3} tem ${idade3} e seu índice de massa corporal é de ${imcCalculado3}`
);