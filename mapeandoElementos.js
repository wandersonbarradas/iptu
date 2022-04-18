const el = (el) => document.querySelector(el);

const inputArea = el("#area-terreno");
const infoArea = el("#infoArea");
const inputTestada = el("#testada-terreno");
const infoTestada = el("#infoTestada");
const inputValorBase = el("#valor-base-terreno");
const infoValorBase = el("#infoValorBase");
const inputFator = el("#fator-localizacao-terreno");
const infoFator = el("#infoFator");
const selectSituacao = el("#situacao-terreno");
const infoSituacao = el("#infoSituacao");
const selectPedologia = el("#pedologia-terreno");
const infoPedologia = el("#infoPedologia");
const selectTopografia = el("#topografia-terreno");
const infoTopografia = el("#infoTopografia");
const alert = el("#liveAlertPlaceholder");
const infoClose = el("#btn-close");
const divMensagem = el("#mensagem");
const btnCalcular = el("#btnCalcular");
const spanValorVenal = el("#valorVenal");
const btnCloseErro = el("#btn-close-erro");
const containerErro = el("#container-alert");
const inputAreaEdificada = el("#area-edificada");
const infoAreaEdificada = el("#infoAreaEdificada");
const selectTipoEdificada = el("#tipoEdificacao");
const infoTipoEdificada = el("#infoTipoEdificacao");
const selectRevestimentoExterno = el("#revestimentoExterno");
const infoRevestimentoExterno = el("#infoRevestimentoExterno");
const selectPisoEdificada = el("#pisoEdificacao");
const infoPisoEdificada = el("#infoPisoEdificacao");
const selectForroEdificada = el("#forroEdificacao");
const infoForroEdificada = el("#infoForroEdificacao");
const selectCoberturaEdificada = el("#coberturaEdificacao");
const infoCoberturaEdificada = el("#infoCoberturaEdificacao");
const selectEstruturaEdificada = el("#estruturaEdificacao");
const infoEstruturaEdificada = el("#infoEstruturaEdificacao");
const selectInstalacaoSanitaria = el("#instalacaoSanitaria");
const infoInstalacaoSanitaria = el("#infoInstalacaoSanitaria");
const selectInstalacaoEletrica = el("#instalacaoEletrica");
const infoInstalacaoEletrica = el("#infoInstalacaoEletrica");
const selectPosicaoEdificada = el("#posicaoEdificada");
const infoPosicaoEdificada = el("#infoPosicaoEdificada");
const selectConservacaoEdificada = el("#conservacaoEdificada");
const infoConservacaoEdificada = el("#infoConservacaoEdificada");
const btnCalculoEdificada = el("#btnCalcularEdificada");
const spanValorVenalEdificada = el("#valorVenalEdificada");
const spanTotalPontos = el("#totaldepontos");
const selectColeta = el("#coleta");
const infoColeta = el("#infocoleta");
const selectCacamento = el("#calcamento");
const infoCalcamento = el("#infocalcamento");
const selectLimpeza = el("#limpeza");
const infoLimpeza = el("#infolimpeza");
const btnCalculo = el("#btnCalcularTsu");
const spanTotalTsu = el("#totalTsu");
const selectUtilizacao = el("#utilizacao");
const InputValorVenalImovel = el("#valorVenalImovel");
const inputAliquota = el("#aliquota");
const inputValorIptu = el("#valorIptu");
const btnCalcularIptu = el("#btnCalcularIptu");
const inputValorTsu = el("#valorTsu");
const inputvalorTotalIptu = el("#valorTotalIptu");
const spanTotalIptu = el("#totalIptu");
infoArea.addEventListener("click", () => {
  let titulo = infoArea.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite a area do total do Terreno`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoTestada.addEventListener("click", () => {
  let titulo = infoTestada.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite quanto mede a frente do terreno`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoValorBase.addEventListener("click", () => {
  let titulo = infoValorBase.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite quanto custa o m² do bairro.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoFator.addEventListener("click", () => {
  let titulo = infoFator.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite qual o fator de localização do setor.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoSituacao.addEventListener("click", () => {
  let titulo = infoSituacao.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite qual a situação do Terreno.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoPedologia.addEventListener("click", () => {
  let titulo = infoPedologia.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite qual a pedologia do Terreno.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoTopografia.addEventListener("click", () => {
  let titulo = infoTopografia.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite qual a topografia do Terreno.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoAreaEdificada.addEventListener("click", () => {
  let titulo = infoAreaEdificada.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite qual a área da edificação em m².`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoTipoEdificada.addEventListener("click", () => {
  let titulo = infoTipoEdificada.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Selecione qual é o tipo da edificação.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoRevestimentoExterno.addEventListener("click", () => {
  let titulo = infoRevestimentoExterno.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Selecione qual é o revestimento externo da edificação.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoPisoEdificada.addEventListener("click", () => {
  let titulo = infoPisoEdificada.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Selecione qual é o piso da edificação.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoForroEdificada.addEventListener("click", () => {
  let titulo = infoForroEdificada.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Selecione qual é o forro da edificação.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoCoberturaEdificada.addEventListener("click", () => {
  let titulo = infoCoberturaEdificada.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Selecione qual é o tipo de cobertura da edificação.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoEstruturaEdificada.addEventListener("click", () => {
  let titulo = infoEstruturaEdificada.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Selecione qual é o tipo de estrutura da edificação.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoInstalacaoSanitaria.addEventListener("click", () => {
  let titulo = infoInstalacaoSanitaria.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Selecione qual é o tipo de instação sanitária da edificação.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoInstalacaoEletrica.addEventListener("click", () => {
  let titulo = infoInstalacaoEletrica.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Selecione qual é o tipo de instação elétrica da edificação.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoPosicaoEdificada.addEventListener("click", () => {
  let titulo = infoPosicaoEdificada.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Selecione qual é a posição da edificação.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
infoConservacaoEdificada.addEventListener("click", () => {
  let titulo = infoConservacaoEdificada.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Selecione qual é o estado de conservação da edificação.`;
  modalAlert(
    alert,
    containerErro,
    mensagem,
    divMensagem,
    "alert-danger",
    "alert-info",
  );
});
function modalAlert(divAlert, containerAlert, mensagem, divMens, remove, add) {
  divAlert.classList.remove(remove);
  divAlert.classList.add(add);
  divAlert.style.display = "flex";
  divMens.innerHTML = mensagem;
  containerAlert.style.transform = "translateY(0px)";
}
infoClose.addEventListener("click", closeAlert);
function closeAlert() {
  containerErro.style.transform = "translateY(-100px)";
  setTimeout(() => {
    alert.style.display = "none";
  }, 600);
}
