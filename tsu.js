var totalTsu = null;
function calculoTsu() {
  let valorReferencia = 28;
  let aliquotaColeta = 0.2 / 100;
  let aliquotaOutros = 0.5 / 100;
  let totalColeta = 0;
  let totalCacamento = 0;
  let totalLimpeza = 0;
  let edificada = valorVenalEdificada.edificada;
  let terreno = valorVenalTerreno.terreno;
  let coletaValue = selectColeta.value;
  let calcamentoValue = selectCacamento.value;
  let limpezaValue = selectLimpeza.value;

  if (coletaValue != "nao") {
    if (edificada != null) {
      totalColeta =
        valorReferencia * valorVenalEdificada.edificada.area * aliquotaColeta;
    } else {
      totalColeta = 0;
      let titulo = "Atenção";
      let mensagem = `<h6 class="text-capitalize">${titulo}</h6> O calculo da coleta de lixo só poderá ser efetuado caso haja uma edificação!!!`;
      modalAlert(
        alert,
        containerErro,
        mensagem,
        divMensagem,
        "alert-info",
        "alert-danger",
      );
    }
  } else {
    totalColeta = 0;
  }

  if (calcamentoValue != "nao" || limpezaValue != "nao") {
    if (terreno != null) {
      if (calcamentoValue != "nao") {
        totalCacamento =
          valorReferencia * valorVenalTerreno.terreno.testada * aliquotaOutros;
      } else {
        totalCacamento = 0;
      }
      if (limpezaValue != "nao") {
        totalLimpeza =
          valorReferencia * valorVenalTerreno.terreno.testada * aliquotaOutros;
      } else {
        totalLimpeza = 0;
      }
    } else {
      let titulo = "Atenção";
      let mensagem = `<h6 class="text-capitalize">${titulo}</h6> O calculo do TSU só poderá ser efetuado caso haja uma terreno!!!`;
      modalAlert(
        alert,
        containerErro,
        mensagem,
        divMensagem,
        "alert-info",
        "alert-danger",
      );
    }
  }

  totalTsu = (totalColeta + totalCacamento + totalLimpeza).toFixed(2);
  spanTotalTsu.innerText = "R$ " + totalTsu;
}

btnCalculo.addEventListener("click", () => {
  event.preventDefault();
  if (
    selectColeta.value != "Selecione" &&
    selectCacamento.value != "Selecione" &&
    selectLimpeza.value != "Selecione"
  ) {
    calculoTsu();
  } else {
    let titulo = "Atenção";
    let mensagem = `<h6 class="text-capitalize">${titulo}</h6> Por favor, preencha todos os campos.`;
    modalAlert(
      alert,
      containerErro,
      mensagem,
      divMensagem,
      "alert-info",
      "alert-danger",
    );
  }
});
