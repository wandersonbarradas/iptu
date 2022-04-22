const el = (el) => document.querySelector(el);
const els = (els) => document.querySelectorAll(els);
const inputArea = el("#area-terreno");
const inputTestada = el("#testada-terreno");
const inputValorBase = el("#valor-base-terreno");
const inputFator = el("#fator-localizacao-terreno");
const selectSituacao = el("#situacao-terreno");
const selectPedologia = el("#pedologia-terreno");
const selectTopografia = el("#topografia-terreno");
const divMensagem = el("#mensagem");
const btnCalcular = el("#btnCalcular");
const alert = el("#liveAlertPlaceholder");
const containerErro = el("#container-alert");
const btnClose = el("#btn-close");
const spanValorVenal = el("#valorVenal");
const inputAreaEdificada = el("#area-edificada");
const selectTipoEdificada = el("#tipoEdificacao");
const selectRevestimentoExterno = el("#revestimentoExterno");
const selectPisoEdificada = el("#pisoEdificacao");
const selectForroEdificada = el("#forroEdificacao");
const selectCoberturaEdificada = el("#coberturaEdificacao");
const selectEstruturaEdificada = el("#estruturaEdificacao");
const selectInstalacaoSanitaria = el("#instalacaoSanitaria");
const selectInstalacaoEletrica = el("#instalacaoEletrica");
const selectConservacaoEdificada = el("#conservacaoEdificada");
const btnCalculoEdificada = el("#btnCalcularEdificada");
const spanValorVenalEdificada = el("#valorVenalEdificada");
const selectPosicaoEdificada = el("#posicaoEdificada");
const spanTotalPontos = el("#totaldepontos");
const selectColeta = el("#coleta");
const selectCacamento = el("#calcamento");
const selectLimpeza = el("#limpeza");
const btnCalculo = el("#btnCalcularTsu");
const spanTotalTsu = el("#totalTsu");
const selectUtilizacao = el("#utilizacao");
const btnCalcularIptu = el("#btnCalcularIptu");
const inputValorTsu = el("#valorTsu");
const inputvalorTotalIptu = el("#valorTotalIptu");
const spanTotalIptu = el("#totalIptu");
const InputValorVenalImovel = el("#valorVenalImovel");
const inputAliquota = el("#aliquota");
const inputValorIptu = el("#valorIptu");

const iconsInfo = els(".card i");

for (let i = 0; i < iconsInfo.length; i++) {
  iconsInfo[i].addEventListener("click", () => {
    let titulo = iconsInfo[i].parentNode;
    let dataInfo = iconsInfo[i].getAttribute("data-info");
    let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> ${dataInfo}`;
    modalAlert(
      alert,
      containerErro,
      mensagem,
      divMensagem,
      "alert-danger",
      "alert-info",
    );
  });
}

function modalAlert(divAlert, containerAlert, mensagem, divMens, remove, add) {
  divAlert.classList.remove(remove);
  divAlert.classList.add(add);
  divAlert.style.display = "flex";
  divMens.innerHTML = mensagem;
  containerAlert.style.transform = "translateY(0px)";
}
btnClose.addEventListener("click", () => {
  containerErro.style.transform = "translateY(-100px)";
  setTimeout(() => {
    alert.style.display = "none";
  }, 600);
});
