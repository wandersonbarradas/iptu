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
    let valorVenal = this.calculo();
    spanValorVenal.innerText = "R$ " + valorVenal;
  }

  cadastro() {
    let area = inputArea.value;
    let testada = inputTestada.value;
    let valorBase = inputValorBase.value;
    let fator = inputFator.value;
    let situacao = selectSituacao.value;
    let pedologia = selectPedologia.value;
    let topografia = selectTopografia.value;
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
let validTerreno = false;
let formTerreno = document.querySelector("#form-terreno");
formTerreno.addEventListener("submit", (e) => {
  e.preventDefault();
  let execultar = Validador.verificar(formTerreno);
  validTerreno = true;
  if (execultar == true) {
    valorVenalTerreno.calcular();
  }
});
let selectsTerreno = formTerreno.querySelectorAll("select");
for (let i = 0; i < selectsTerreno.length; i++) {
  selectsTerreno[i].addEventListener("click", () => {
    if (validTerreno == true) {
      let execultar = Validador.verificar(formTerreno);
      if (execultar == true) {
        valorVenalTerreno.calcular();
      }
    }
  });
}
let imputTerreno = formTerreno.querySelectorAll("input");
for (let i = 0; i < imputTerreno.length; i++) {
  imputTerreno[i].addEventListener("keyup", () => {
    if (validTerreno == true) {
      let execultar = Validador.verificar(formTerreno);
      if (execultar == true) {
        valorVenalTerreno.calcular();
      }
    }
  });
}
