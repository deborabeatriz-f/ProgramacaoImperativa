let nomeJogador = "D-Revolts";
let golsJogador = 0;
let precoEmDolar = 0;

function fazerGol() {
  golsJogador++;
  precoEmDolar = precoEmDolar + 10000;
  console.log("GOL!");
  return;
}

console.log(precoEmDolar);
console.log(golsJogador);
fazerGol();
fazerGol();
fazerGol();
fazerGol();
fazerGol();
fazerGol();
fazerGol();
fazerGol();
fazerGol();
fazerGol();
console.log(golsJogador);
console.log(precoEmDolar);
