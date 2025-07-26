import { menuToggle } from "./modules/menu.js";
import { atlzData } from "./modules/atualizaData.js";
// import { slides } from "./modules/slide.js";
import { mudarTema } from "./modules/mudarTema.js"; // Exemplo seu mudarTema

document.addEventListener("DOMContentLoaded", () => {
  menuToggle();
  atlzData();
  // slides();
  mudarTema();
});

function redirecionarL() {
  window.location.href = "https://www.linkedin.com/in/luiz-alves-leite/";
}
function redirecionarG() {
  window.location.href = "https://github.com/luizz-dev";
}
function redirecionarW() {
  window.location.href = "https://wa.me/11958212008";
}
