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
    let valorBase = 0;
    let fator = 0;
    switch (selectSetor.value) {
      case "1":
        valorBase = 320;
        fator = 45;
        break;
      case "2":
        valorBase = 200;
        fator = 40;
        break;
      case "3":
        valorBase = 100;
        fator = 75;
        break;
      case "4":
        valorBase = 50;
        fator = 80;
        break;
    }
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
