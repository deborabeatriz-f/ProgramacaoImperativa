let qualBebida = function (estacao) {
  if (estacao == "verao") {
    console.log("Beba água de coco.");
  } else if (estacao == "inverno") {
    console.log("Beba chá quentinho.");
  } else {
    console.log("Beba o que você quiser, mas se hidrate.");
  }
};

qualBebida("verao");
qualBebida("inverno");
qualBebida("outono");

let bebida = function (estacao) {
  console.log(
    estacao == "verao" ? "Beba água de coco" : "Beba o que você quiser"
  );
};
bebida("verao");
bebida("primavera");
