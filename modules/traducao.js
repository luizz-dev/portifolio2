export function tradutor() {
  const traducoes = {
    pt: {
      titulo: "Prazer em te conhecer! <br> Meu nome é Luiz Eduardo",
      paragrafo:
        "Eu sou front-end development <br> tenho o objetivo de adquirir experiência <br>como programador desenvolvendo sites.",
      botao: "Projetos",
      sobreMim: "Sobre mim",
      contato: "Contato",
    },
    en: {
      titulo: "Nice to meet you! <br> My name' Luiz Eduardo",
      paragrafo:
        "I am a front-end developer <br> eager to gain experience and<br>  grow my skills by creating websites.",
      botao: "Project",
      sobreMim: "About me",
      contato: "Contact",
    },
  };

  let idiomaAtual = "pt";

  document.getElementById("tradutor").addEventListener("click", () => {
    idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";

    document.querySelectorAll("[data-translate]").forEach((el) => {
      let chave = el.getAttribute("data-translate");
      el.innerHTML = traducoes[idiomaAtual][chave]; 
    });
  });
}
