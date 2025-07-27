export function redirecionarCliente() {
  const contatoWpp = document.getElementById("whatsapp-contato");
  if (contatoWpp) {
    contatoWpp.addEventListener("click", () => {
      window.location.href = "https://wa.me/+5511958212008";
    });
  }

  const contatoGitHub = document.getElementById("github");
  if (contatoGitHub) {
    contatoGitHub.addEventListener("click", () => {
      window.location.href = "https://github.com/luizz-dev";
    });
  }

  const contatoLinkedin = document.getElementById("linkedin-contato");
  if (contatoLinkedin) {
    contatoLinkedin.addEventListener("click", () => {
      window.location.href = "https://www.linkedin.com/in/luiz-alves-leite/";
    });
  }
}
