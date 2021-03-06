function usarMicroondas(prato, tempo) {
  let fazerPipoca = (tempo) => {
    switch (true) {
      case tempo < 10:
        return "Tempo insuficiente. π";
      case tempo >= 20 && tempo < 30:
        return "A comida queimou. βΉοΈ";
      case tempo >= 30:
        return "Kabum!π₯";
      default:
        return "Prato pronto, bom apetite!!! π";
    }
  };

  let fazerMacarrao = (tempo) => {
    switch (true) {
      case tempo < 8:
        return "Tempo insuficiente. π";
      case tempo >= 16 && tempo < 24:
        return "A comida queimou. βΉοΈ";
      case tempo >= 24:
        return "Kabum!π₯";
      default:
        return "Prato pronto, bom apetite!!! π";
    }
  };

  let fazerCarne = (tempo) => {
    switch (true) {
      case tempo < 15:
        return "Tempo insuficiente. π";
      case tempo >= 30 && tempo < 45:
        return "A comida queimou. βΉοΈ";
      case tempo >= 45:
        return "Kabum!π₯";
      default:
        return "Prato pronto, bom apetite!!! π₯©";
    }
  };

  let fazerFeijao = (tempo) => {
    switch (true) {
      case tempo < 12:
        return "Tempo insuficiente. π";
      case tempo >= 24 && tempo < 36:
        return "A comida queimou. βΉοΈ";
      case tempo >= 36:
        return "Kabum!π₯";
      default:
        return "Prato pronto, bom apetite!!! π";
    }
  };

  let fazerBrigadeiro = (tempo) => {
    switch (true) {
      case tempo < 8:
        return "Tempo insuficiente. π";
      case tempo >= 16 && tempo < 24:
        return "A comida queimou. βΉοΈ";
      case tempo >= 24:
        return "Kabum!π₯";
      default:
        return "Prato pronto, bom apetite!!! π";
    }
  };
  switch (prato) {
    case "pipoca":
      return fazerPipoca(tempo);
    case "macarrΓ£o":
      return fazerMacarrao(tempo);
    case "carne":
      return fazerCarne(tempo);
    case "feijΓ£o":
      return fazerFeijao(tempo);
    case "brigadeiro":
      return fazerBrigadeiro(tempo);
    default:
      return "Prato inexistente π";
  }
}

console.log(usarMicroondas("pipoca", 8));
console.log(usarMicroondas("pipoca", 10));
console.log(usarMicroondas("pipoca", 21));
console.log(usarMicroondas("pipoca", 32));
console.log(" ------------- ------------- ");
console.log(usarMicroondas("macarrΓ£o", 6));
console.log(usarMicroondas("macarrΓ£o", 8));
console.log(usarMicroondas("macarrΓ£o", 18));
console.log(usarMicroondas("macarrΓ£o", 26));
console.log(" ------------- ------------- ");
console.log(usarMicroondas("carne", 8));
console.log(usarMicroondas("carne", 15));
console.log(usarMicroondas("carne", 32));
console.log(usarMicroondas("carne", 50));
console.log(" ------------- ------------- ");
console.log(usarMicroondas("feijΓ£o", 10));
console.log(usarMicroondas("feijΓ£o", 12));
console.log(usarMicroondas("feijΓ£o", 25));
console.log(usarMicroondas("feijΓ£o", 40));
console.log(" ------------- ------------- ");
console.log(usarMicroondas("brigadeiro", 5));
console.log(usarMicroondas("brigadeiro", 8));
console.log(usarMicroondas("brigadeiro", 18));
console.log(usarMicroondas("brigadeiro", 30));
console.log(" ------------- ------------- ");
console.log(usarMicroondas("pizza", 10));
