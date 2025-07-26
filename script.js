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

// Data de início: janeiro de 2022
const dataInicio = new Date(2022, 0); // Janeiro = 0

// Data atual
const hoje = new Date();

// Cálculo da diferença total em meses
let anos = hoje.getFullYear() - dataInicio.getFullYear();
let meses = hoje.getMonth() - dataInicio.getMonth();

// Ajusta se os meses forem negativos
if (meses < 0) {
  anos -= 1;
  meses += 12;
}

// Mostra no HTML
document.getElementById(
  "tempo-decorrido"
).textContent = `${anos} anos e ${meses} meses`;
