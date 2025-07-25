function redirecionarL() {
  window.location.href = "https://www.linkedin.com/in/luiz-alves-leite/";
}
function redirecionarG() {
  window.location.href = "https://github.com/luizz-dev";
}
function redirecionarW() {
  window.location.href = "https://wa.me/11958212008";
}

// // contato
// document.getElementById("menu-toggle").addEventListener("click", function () {
//   const nav = document.querySelector("nav");
//   nav.classList.toggle("open"); // Alterna a classe 'open' na tag <nav>
// });

//mudar o tema
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

sun.addEventListener("click", function () {
  document.body.classList.add("light");
  console.log("sdas");
});
moon.addEventListener("click", function () {
  document.body.classList.remove("light");
});
