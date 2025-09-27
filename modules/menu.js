export function menuToggle() {
  const menuNav = document.getElementById("menuNav");
  const menuLinks = document.getElementById("menu-links");
  const menuNavClose = document.getElementById("close-menu");
  const menuLinksM = document.getElementById("menu-links-m");

  if (!menuNav || !menuLinks || !menuNavClose || !menuLinksM) return;

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

      if (window.innerWidth <= 560) {
        menuLinksM.classList.add("on");
      } else {
        menuLinks.classList.add("on");
      }

      document.body.classList.add("transparente");
    }, transitionTime);
  });

  function closeMenu() {
    menuNavClose.classList.add("rotate");

    setTimeout(() => {
      menuNavClose.classList.remove("rotate");

      setTimeout(() => {
        menuNavClose.classList.remove("show");

        menuNav.classList.remove("hide");
        menuNav.classList.add("rotate");

        if (window.innerWidth <= 560) {
          menuLinksM.classList.remove("on");
        } else {
          menuLinks.classList.remove("on");
        }

        setTimeout(() => {
          menuNav.classList.remove("rotate");
        }, 200);
      }, transitionTime + 50);
    }, transitionTime);
  }

  menuNavClose.addEventListener("click", closeMenu);

  document.addEventListener("click", function (e) {
    const target = e.target;

    const clickedOutside =
      !menuNav.contains(target) &&
      !menuNavClose.contains(target) &&
      !menuLinks.contains(target) &&
      !menuLinksM.contains(target);

    const menuIsOpen =
      menuLinks.classList.contains("on") || menuLinksM.classList.contains("on");

    if (clickedOutside && menuIsOpen) {
      closeMenu();
    }
  });
}
