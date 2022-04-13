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
