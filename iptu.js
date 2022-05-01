function calculoIptu() {
  let utilizacaoValue = selectUtilizacao.value;
  let aliquota = 0;
  let valorIptu = 0;
  let valorTotalIptu = 0;
  let valorVenalImovel = Number(valorVenalTerreno.calculo());
  if (valorVenalEdificada.edificada != null) {
    valorVenalImovel += Number(valorVenalEdificada.calculo());
  }
  InputValorVenalImovel.value = "R$ " + valorVenalImovel.toFixed(2);
  switch (utilizacaoValue) {
    case "1":
      aliquota = aliquotaIptu(valorVenalImovel, 0.35, 0.3, 0.25);
      break;
    case "2":
      aliquota = aliquotaIptu(valorVenalImovel, 0.45, 0.35, 0.25);
      break;
    case "3":
      aliquota = aliquotaIptu(valorVenalImovel, 0.9, 0.75, 0.6);
      break;
    default:
      aliquota = 0;
  }
  inputAliquota.value = aliquota + "%";
  valorIptu = valorVenalImovel * (aliquota / 100);
  inputValorIptu.value = "R$ " + valorIptu.toFixed(2);
  inputValorTsu.value = "R$ " + totalTsu;
  valorTotalIptu = valorIptu + Number(totalTsu);
  inputvalorTotalIptu.value = "R$ " + valorTotalIptu.toFixed(2);
  spanTotalIptu.innerText = "R$ " + valorTotalIptu.toFixed(2);
}

function aliquotaIptu(valor, aliq01, aliq02, aliq03) {
  if (valor > 50000) {
    return aliq01;
  } else if (valor >= 10000.01) {
    return aliq02;
  } else if (valor >= 0) {
    return aliq03;
  }
}

let formIptu = document.querySelector("#form-iptu");
formIptu.addEventListener("submit", (e) => {
  e.preventDefault();
  let execultar = Validador.verificar(formIptu);
  if (execultar == true) {
    calculoIptu();
  }
});
