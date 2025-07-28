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

      setTimeout(() => {
        menuNavClose.classList.add("rotate");
        document.body.classList.add("transparente");
      }, 20);

      menuLinks.classList.add("on");
      document.body.classList.add("transparente");
    }, transitionTime);
  });

  // Função para fechar com animação
  function closeMenu() {
    menuNavClose.classList.add("rotate");

    setTimeout(() => {
      menuNavClose.classList.remove("rotate");

      setTimeout(() => {
        menuNavClose.classList.remove("show");

        menuNav.classList.remove("hide");
        menuNav.classList.add("rotate");

        menuLinks.classList.remove("on");
        document.body.classList.remove("transparente");

        setTimeout(() => {
          menuNav.classList.remove("rotate");
        }, 200);
      }, transitionTime + 50);
    }, transitionTime);
  }

  // Clicou no botão X
  menuNavClose.addEventListener("click", closeMenu);

  // Clicou fora do menu
  document.addEventListener("click", (e) => {
    const clickedOutside =
      !menuLinks.contains(e.target) &&
      !menuNav.contains(e.target) &&
      !menuNavClose.contains(e.target);

    const menuIsOpen = menuLinks.classList.contains("on");

    if (clickedOutside && menuIsOpen) {
      closeMenu();
    }
  });
}
