export function redirecionarCliente() {
  const contatosWpp = [
    document.getElementById("whatsapp-contato"),
    document.getElementById("whatsapp-contato-m"),
  ];

  contatosWpp.forEach((el) => {
    if (el) {
      el.addEventListener("click", () => {
        window.location.href = "https://wa.me/+5511958212008";
      });
    }
  });

  const contatosGitHub = [
    document.getElementById("github"),
    document.getElementById("github-m"),
  ];

  contatosGitHub.forEach((el) => {
    el.addEventListener("click", () => {
      window.location.href = "https://github.com/luizz-dev";
    });
  });

  const contatosLinkedin = [
    document.getElementById("linkedin-contato"),
    document.getElementById("linkedin-contato-m"),
  ];

  contatosLinkedin.forEach((el) => {
    el.addEventListener("click", () => {
      window.location.href = "https://www.linkedin.com/in/luiz-alves-leite/";
    });
  });
}
