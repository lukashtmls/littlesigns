document
  .querySelector("div.BotaoNumeros")
  .addEventListener("click", function () {
    document.querySelector("div.con_num").classList.toggle("oculto");
    document.querySelector("div.conteudo").classList.toggle("hover");
  });
