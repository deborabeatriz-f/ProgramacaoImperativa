let nomeJogador = "D-Revolts";
let golsJogador = 0;
let precoEmDolar = 0;

function fazerGol() {
  golsJogador++;
  precoEmDolar = precoEmDolar + 10000;
  console.log("GOL!");
  return;
}

function hatTRick() {
  fazerGol();
  fazerGol();
  fazerGol();
  precoEmDolar = precoEmDolar * 1.1;
}

console.log(precoEmDolar);
console.log(golsJogador);
hatTRick();
console.log(golsJogador);
console.log(precoEmDolar);
