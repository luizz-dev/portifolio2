export function menuToggle() {
  const menuNav = document.getElementById("menuNav");
  const menuLinks = document.getElementById("menu-links");
  const menuNavClose = document.getElementById("close-menu");

  if (!menuNav || !menuLinks || !menuNavClose) return;

  const transitionTime = 400;

  menuNav.addEventListener("click", () => {
    menuNav.classList.add("rotate");

    setTimeout(() => {
      menuNav.classList.remove("rotate");
      menuNav.classList.add("hide");

      menuNavClose.classList.add("show");

      // Aguarda aparecer antes de girar
      setTimeout(() => {
        menuNavClose.classList.add("rotate");
      }, 20);

      menuLinks.classList.add("on");
    }, transitionTime);
  });
  //parte do tempo feita pelo chatGPT
  menuNavClose.addEventListener("click", () => {
    // Inicia rotação do X
    menuNavClose.classList.add("rotate");

    // Espera o X girar antes de esconder
    setTimeout(() => {
      menuNavClose.classList.remove("rotate");

      // Só esconde o X depois que ele terminou de girar
      setTimeout(() => {
        menuNavClose.classList.remove("show");

        menuNav.classList.remove("hide");
        menuNav.classList.add("rotate");

        menuLinks.classList.remove("on");

        // Remove rotação do hambúrguer depois que ele terminar
        setTimeout(() => {
          menuNav.classList.remove("rotate");
        }, 10);
      }, transitionTime);
    }, transitionTime);
  });
}
