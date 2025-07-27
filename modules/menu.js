export function menuToggle() {
  let menuNav = document.getElementById("menuNav");
  let menuLinks = document.getElementById("menu-links");

  if (!menuNav || !menuLinks) return; // segurança, evita erro se não achar vi no chat esse if

  menuNav.addEventListener("click", function () {
    menuNav.classList.toggle("on");
    if (menuNav.classList.contains("on")) {
      menuLinks.classList.add("on");
    } else {
      menuLinks.classList.remove("on");
    }
  });
}
