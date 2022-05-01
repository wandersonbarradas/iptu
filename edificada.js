class edificada {
  constructor(
    area,
    tipoEdi,
    revsExter,
    piso,
    forro,
    cobertura,
    estrutura,
    instSanitaria,
    instEletrica,
    posicao,
    conservacao,
  ) {
    this.area = Number(area);
    this.tipoEdi = Number(tipoEdi);
    this.revsExter = Number(revsExter);
    this.piso = Number(piso);
    this.forro = Number(forro);
    this.cobertura = Number(cobertura);
    this.estrutura = Number(estrutura);
    this.instSanitaria = Number(instSanitaria);
    this.instEletrica = Number(instEletrica);
    this.posicao = Number(posicao);
    this.conservacao = Number(conservacao);
  }
}

class calculoVenalEdificada {
  constructor() {
    this.edificada = null;
  }
  start() {
    this.cadastro();
    let valorVenal = this.calculo();
    spanValorVenalEdificada.innerText = "R$ " + valorVenal;
  }

  cadastro() {
    let area = inputAreaEdificada.value;
    let tipoEdi = selectTipoEdificada.value;
    let revsExter = selectRevestimentoExterno.value;
    let piso = selectPisoEdificada.value;
    let forro = selectForroEdificada.value;
    let cobertura = selectCoberturaEdificada.value;
    let estrutura = selectEstruturaEdificada.value;
    let instSanitaria = selectInstalacaoSanitaria.value;
    let instEletrica = selectInstalacaoEletrica.value;
    let posicao = selectPosicaoEdificada.value;
    let conservacao = selectConservacaoEdificada.value;
    this.edificada = new edificada(
      area,
      tipoEdi,
      revsExter,
      piso,
      forro,
      cobertura,
      estrutura,
      instSanitaria,
      instEletrica,
      posicao,
      conservacao,
    );
  }

  calculo() {
    let totalPontos =
      (this.edificada.revsExter +
        this.edificada.piso +
        this.edificada.forro +
        this.edificada.cobertura +
        this.edificada.estrutura +
        this.edificada.instSanitaria +
        this.edificada.instEletrica) /
      100;

    let total = (
      this.edificada.area *
      this.edificada.tipoEdi *
      totalPontos *
      this.edificada.posicao *
      this.edificada.conservacao
    ).toFixed(2);

    spanTotalPontos.innerText = totalPontos;

    return total;
  }
}

const valorVenalEdificada = new calculoVenalEdificada();
let formEdificada = document.querySelector("#form-edificada");
formEdificada.addEventListener("submit", (e) => {
  e.preventDefault();
  let execultar = Validador.verificar(formEdificada);
  if (execultar == true) {
    valorVenalEdificada.start();
  }
});
