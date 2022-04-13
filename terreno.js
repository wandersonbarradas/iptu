class terreno {
  constructor(
    area,
    testada,
    valorBase,
    fatorLocalizacao,
    situacao,
    pedologia,
    topografia,
  ) {
    this.area = Number(area);
    this.testada = Number(testada);
    this.valorBase = Number(valorBase);
    this.fatorLocalizacao = Number(fatorLocalizacao);
    this.situacao = Number(situacao);
    this.pedologia = Number(pedologia);
    this.topografia = Number(topografia);
  }
}

class calculoVenalTerreno {
  constructor() {
    this.terreno = null;
  }
  calcular() {
    this.cadastro();
    if (this.terreno != null) {
      let valorVenal = this.calculo();
      spanValorVenal.innerText = "R$ " + valorVenal;
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
  }

  cadastro() {
    let area = inputArea.value;
    let testada = inputTestada.value;
    let valorBase = inputValorBase.value;
    let fator = inputFator.value;
    let situacao = selectSituacao.value;
    let pedologia = selectPedologia.value;
    let topografia = selectTopografia.value;

    if (
      situacao != "Selecione" &&
      (pedologia != "Selecione") & (topografia != "Selecione") &&
      area != "" &&
      testada != "" &&
      valorBase != "" &&
      fator != ""
    ) {
      this.terreno = new terreno(
        area,
        testada,
        valorBase,
        fator,
        situacao,
        pedologia,
        topografia,
      );
    }
  }

  calculo() {
    let total = (
      this.terreno.area *
      this.terreno.valorBase *
      (this.terreno.fatorLocalizacao / 100) *
      this.terreno.situacao *
      this.terreno.pedologia *
      this.terreno.topografia
    ).toFixed(2);
    return total;
  }
}

const valorVenalTerreno = new calculoVenalTerreno();

btnCalcular.addEventListener("click", () => {
  event.preventDefault();
  valorVenalTerreno.calcular();
});
