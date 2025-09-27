// animacaoScroll.js
export function animacaoScroll() {
  function animacaoScroll() {
    const elements = document.querySelectorAll(".animacao-scroll");

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100 && rect.bottom > 100) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", animacaoScroll);
  window.addEventListener("load", animacaoScroll);
}
