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
const alertErro = el("#alertErroCalculo");
const btnCloseErro = el("#btn-close-erro");
const divMensagemErro = el("#mensagemErro");

infoArea.addEventListener("click", () => {
  let titulo = infoArea.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite a area do total do Terreno`;
  divMensagem.innerHTML = mensagem;
  alert.style.display = "flex";
});
infoTestada.addEventListener("click", () => {
  let titulo = infoTestada.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite quanto mede a frente do terreno`;
  divMensagem.innerHTML = mensagem;
  alert.style.display = "flex";
});
infoValorBase.addEventListener("click", () => {
  let titulo = infoValorBase.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite quanto custa o m² do bairro.`;
  divMensagem.innerHTML = mensagem;
  alert.style.display = "flex";
});
infoFator.addEventListener("click", () => {
  let titulo = infoFator.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite qual o fator de localização do setor.`;
  divMensagem.innerHTML = mensagem;
  alert.style.display = "flex";
});
infoSituacao.addEventListener("click", () => {
  let titulo = infoSituacao.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite qual a situação do Terreno.`;
  divMensagem.innerHTML = mensagem;
  alert.style.display = "flex";
});
infoPedologia.addEventListener("click", () => {
  let titulo = infoPedologia.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite qual a pedologia do Terreno.`;
  divMensagem.innerHTML = mensagem;
  alert.style.display = "flex";
});
infoTopografia.addEventListener("click", () => {
  let titulo = infoTopografia.parentNode;
  let mensagem = `<h6 class="text-capitalize">${titulo.textContent}</h6> Digite qual a topografia do Terreno.`;
  divMensagem.innerHTML = mensagem;
  alert.style.display = "flex";
});
infoClose.addEventListener("click", closeAlert);
btnCloseErro.addEventListener("click", closeAlert);
function closeAlert() {
  alert.style.display = "none";
  alertErro.style.display = "none";
}
