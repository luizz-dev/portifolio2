import { menuToggle } from "./modules/menu.js";
import { atlzData } from "./modules/atualizaData.js";
import { slides } from "./modules/slide.js";
import mudarTema from "./modules/mudarTema.js";
import { redirecionarCliente } from "./modules/redirecinar.js";

//evita bug desnecessarios
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path == "/sobreMim.html") {
    slides();
    atlzData();
    // só executa na página "projetos.html"
  }

  if (path == "/index.html" || path === "/") {
    mudarTema(); // só na home
  }

  if (path === "/contato.html") {
    redirecionarCliente(); //so no contato
  }

  menuToggle(); //sempre
});
