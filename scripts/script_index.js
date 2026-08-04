// ABRIR E FECHAR CONTEÚDOS

// NUMEROS

document
  .querySelector("div.BotaoNumeros")
  .addEventListener("click", function () {
    document.querySelector("div.con_num").classList.toggle("oculto");
    document.querySelector("div.ConteudoNumeros").classList.toggle("hover");
  });

// ALFABETO

document
  .querySelector("div.BotaoAlfabeto")
  .addEventListener("click", function () {
    document.querySelector("div.con_alf").classList.toggle("oculto");
    document.querySelector("div.ConteudoAlfabeto").classList.toggle("hover");
  });

// CUMPRIMENTOS

document
  .querySelector("div.BotaoCumprimentos")
  .addEventListener("click", function () {
    document.querySelector("div.con_cum").classList.toggle("oculto");
    document.querySelector("div.ConteudoCumprientos").classList.toggle("hover");
  });

// ANIMAIS

document
  .querySelector("div.BotaoAnimais")
  .addEventListener("click", function () {
    document.querySelector("div.con_ani").classList.toggle("oculto");
    document.querySelector("div.ConteudoAnimais").classList.toggle("hover");
  });

// CORES

document.querySelector("div.BotaoCores").addEventListener("click", function () {
  document.querySelector("div.con_cor").classList.toggle("oculto");
  document.querySelector("div.ConteudoCores").classList.toggle("hover");
});
