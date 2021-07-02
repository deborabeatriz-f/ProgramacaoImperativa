let escolherRoupa = (dia) => {
  switch (dia.toLowerCase()) {
    case "segunda":
      console.log("Use verder");
      break;
    case "terça":
      console.log("Use azul");
      break;
    case "quarta":
      console.log("Use vermelho");
      break;
    case "quinta":
      console.log("Use preto");
      break;
    case "sexta":
      console.log("Use branco");
      break;
    default:
      console.log("Use cinza, não tem erro.");
  }
};

escolherRoupa("segunda");
escolherRoupa("terça");
escolherRoupa("quarta");
escolherRoupa("quinta");
escolherRoupa("sexta");
escolherRoupa("domingo");
