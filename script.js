import { menuToggle } from "./modules/menu.js";
import { atlzData } from "./modules/atualizaData.js";
import { slides } from "./modules/slide.js";
import { redirecionarCliente } from "./modules/redirecinar.js";
import { fundoEstrela } from "./modules/fundo-estrelas.js";
import { terminal } from "./modules/terminal.js";
import { tradutor } from "./modules/traducao.js";
import { segueCursor } from "./modules/segueCursor.js";
import { animacaoScroll } from "./modules/animacaoScroll.js";
//evita bug desnecessarios
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path == "/sobreMim.html") {
    slides();
    atlzData();
    animacaoScroll();
  }

  if (path == "/index.html" || path === "/") {
    terminal();
    tradutor();
  }

  if (path === "/contato.html") {
    redirecionarCliente();
    fundoEstrela();
  }

  menuToggle(); //sempre
  segueCursor();
});
