const options = document.querySelectorAll("#option h3");
const optionsP = document.querySelectorAll("#option p");
const arrows = document.querySelectorAll("#arrow");

function accordionItem(event) {
  const option = event.currentTarget;
  const optionP = option.nextElementSibling; // O elemento p relacionado ao h3 clicado
  const arrow = option.querySelector("#arrow"); // A seta dentro do h3 clicado

  // Remove a classe active de todos os elementos h3
  options.forEach((h3) => {
    if (h3 !== option) {
      h3.classList.remove("active");
    }
  });

  // adiciona a classe hide a todos os elementos optionsP
  optionsP.forEach((hide) => {
    if (hide !== optionP) {
      hide.classList.add("hide");
    }
  });

  // Remover a classe "rotate" de todas as setas
  arrows.forEach((rotate) => {
    if (rotate !== arrow) {
      rotate.classList.remove("rotate");
    }
  });

  option.classList.toggle("active");

  // Adicionar ou remover a classe "hide" no elemento p
  optionP.classList.toggle("hide");

  // Adicionar ou remover a classe "rotate" na seta
  arrow.classList.toggle("rotate");
}

options.forEach((option) => {
  option.addEventListener("click", accordionItem);
});
