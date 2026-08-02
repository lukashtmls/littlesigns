// ABRIR E FECHAR CONTEÚDOS

// NUMEROS

document
  .querySelector("div.BotaoNumeros")
  .addEventListener("click", function () {
    document.querySelector("div.con_num").classList.toggle("oculto");
    document.querySelector("div.ConteudoNumeros").classList.toggle("hover");
  });

// CUMPRIMENTOS

document
  .querySelector("div.BotaoCumprimentos")
  .addEventListener("click", function () {
    document.querySelector("div.con_cum").classList.toggle("oculto");
    document.querySelector("div.ConteudoCumprientos").classList.toggle("hover");
  });
