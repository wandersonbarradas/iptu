let Validador = {
  verificar: (formElement) => {
    let inputs = formElement.querySelectorAll("input, select");
    Validador.limparError(inputs, formElement);
    let send = true;
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let check = Validador.checagem(input);
      if (check != true) {
        Validador.error(input, check);
        send = false;
      }
    }
    return send;
  },
  checagem: (input) => {
    let rules = input.getAttribute("data-rules");
    if (rules !== null) {
      let rule = rules.split("|");
      for (let r = 0; r < rule.length; r++) {
        let rule2 = rule[r].split("=");
        switch (rule2[0]) {
          case "required":
            if (input.value == "") {
              return "Campo não pode ser vazio.";
            }
            break;
          case "min":
            if (input.value.length < rule2[1]) {
              return `Campo tem que ter no mínimo ${rule2[1]} caracteres.`;
            }
            break;
          case "select":
            if (input.value == "Selecione") {
              return "Campo tem que ser selecinado.";
            }
            break;
          case "edificada":
            if (
              valorVenalEdificada.edificada == null &&
              document.querySelector("#coleta").value == "sim"
            ) {
              return "Necessário que exista uma edificação.";
            }
            break;
          case "terreno":
            if (valorVenalTerreno.terreno == null) {
              return "Necessário que exista um terreno.";
            }
            break;
          case "edificada2":
            if (
              valorVenalEdificada.edificada == null &&
              document.querySelector("#utilizacao").value == "1"
            ) {
              return "Necessário que exista uma edificação.";
            }
            break;
          case "tsu":
            if (totalTsu == null) {
              return "Necessário que exista o calculo do TSU.";
            }
        }
      }
    }
    return true;
  },

  error: (input, erro) => {
    input.style.borderColor = "red";

    let divErro = document.createElement("div");
    divErro.classList.add("erro");
    divErro.innerHTML = `${erro} <span onclick="Validador.fechar(this)">X</span>`;
    input.parentElement.insertBefore(divErro, input.nextSibling);
  },

  limparError: (element, formElement) => {
    let inputs = element;
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      input.style = "";
    }
    let erro = formElement.querySelectorAll(".erro");
    for (let i = 0; i < erro.length; i++) {
      erro[i].remove();
    }
  },
  fechar: (e) => {
    let item = e.parentNode;
    item.remove();
  },
};
