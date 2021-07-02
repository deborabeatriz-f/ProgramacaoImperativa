let frase = (linguagem) => {
  let mensagem = `Aprenderei ${linguagem} mais tarde.`;
  if (linguagem == "javascript") {
    mensagem = `Estou aprendendo ${linguagem}!`;
  }
  return mensagem;
};

console.log(frase("javascript"));
console.log(frase("python"));

let fraseJS = frase("javascript");

console.log(fraseJS);