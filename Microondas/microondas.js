function usarMicroondas(prato, tempo) {
  let fazerPipoca = (tempo) => {
    switch (true) {
      case tempo < 10:
        return "Tempo insuficiente. 😞";
      case tempo >= 20:
        return "A comida queimou. ☹️";
      case tempo >= 30:
        return "Kabum!🔥";
      default:
        return "Prato pronto, bom apetite!!! 🍿";
    }
  };

  let fazerMacarrao = (tempo) => {
    switch (true) {
      case tempo < 8:
        return "Tempo insuficiente. 😞";
      case tempo >= 16:
        return "A comida queimou. ☹️";
      case tempo >= 24:
        return "Kabum!🔥";
      default:
        return "Prato pronto, bom apetite!!! 🍝";
    }
  };

  let fazerCarne = (tempo) => {
    switch (true) {
      case tempo < 15:
        return "Tempo insuficiente. 😞";
      case tempo >= 30:
        return "A comida queimou. ☹️";
      case tempo >= 45:
        return "Kabum!🔥";
      default:
        return "Prato pronto, bom apetite!!! 🥩";
    }
  };

  let fazerFeijao = (tempo) => {
    switch (true) {
      case tempo < 12:
        return "Tempo insuficiente. 😞";
      case tempo >= 24:
        return "A comida queimou. ☹️";
      case tempo >= 36:
        return "Kabum!🔥";
      default:
        return "Prato pronto, bom apetite!!! 😋";
    }
  };

  let fazerBrigadeiro = (tempo) => {
    switch (true) {
      case tempo < 8:
        return "Tempo insuficiente. 😞";
      case tempo >= 16:
        return "A comida queimou. ☹️";
      case tempo >= 24:
        return "Kabum!🔥";
      default:
        return "Prato pronto, bom apetite!!! 😋";
    }
  };
  switch (prato) {
    case "pipoca":
      return fazerPipoca(tempo);
    case "macarrão":
      return fazerMacarrao(tempo);
    case "carne":
      return fazerCarne(tempo);
    case "feijão":
      return fazerFeijao(tempo);
    case "brigadeiro":
      return fazerBrigadeiro(tempo);
  }
}

console.log(usarMicroondas("pipoca", 10));
console.log(usarMicroondas("pipoca", 21));
console.log(usarMicroondas("macarrão", 8));
console.log(usarMicroondas("macarrão", 26));
console.log(usarMicroondas("carne", 15));
console.log(usarMicroondas("carne", 8));
console.log(usarMicroondas("feijão", 12));
console.log(usarMicroondas("feijão", 10));
console.log(usarMicroondas("brigadeiro", 8));
console.log(usarMicroondas("brigadeiro", 18));
