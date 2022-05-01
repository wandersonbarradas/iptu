var totalTsu = null;
function calculoTsu() {
  let valorReferencia = 28;
  let aliquotaColeta = 0.2 / 100;
  let aliquotaOutros = 0.5 / 100;
  let totalColeta = 0;
  let totalCacamento = 0;
  let totalLimpeza = 0;
  let terreno = valorVenalTerreno.terreno;
  let coletaValue = selectColeta.value;
  let calcamentoValue = selectCacamento.value;
  let limpezaValue = selectLimpeza.value;

  if (coletaValue != "nao") {
    totalColeta =
      valorReferencia * valorVenalEdificada.edificada.area * aliquotaColeta;
  }
  if (calcamentoValue != "nao") {
    totalCacamento =
      valorReferencia * valorVenalTerreno.terreno.testada * aliquotaOutros;
  }
  if (limpezaValue != "nao") {
    totalLimpeza =
      valorReferencia * valorVenalTerreno.terreno.testada * aliquotaOutros;
  }
  totalTsu = (totalColeta + totalCacamento + totalLimpeza).toFixed(2);
  spanTotalTsu.innerText = "R$ " + totalTsu;
}
let validTsu = false;
let formTsu = document.querySelector("#form-tsu");
formTsu.addEventListener("submit", (e) => {
  e.preventDefault();
  let execultar = Validador.verificar(formTsu);
  validTsu = true;
  if (execultar == true) {
    calculoTsu();
  }
});
