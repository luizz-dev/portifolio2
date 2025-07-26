const dataInicio = new Date(2022, 0); // Janeiro de 2022
const hoje = new Date();

let anos = hoje.getFullYear() - dataInicio.getFullYear();
let meses = hoje.getMonth() - dataInicio.getMonth();
let mesesJS = meses + 3;
let anosJS = anos - 2;
if (meses < 0) {
  anos--;
  meses += 12;
}
if (mesesJS == 12) {
  anosJS++;
  mesesJS = 0;
}

document.getElementById(
  "tempo-decorrido-html"
).textContent = `${anos}.${meses} anos`;
document.getElementById(
  "tempo-decorrido-css"
).textContent = `${anos}.${meses} anos`;
document.getElementById(
  "tempo-decorrido-js"
).textContent = `${anosJS}.${mesesJS} anos`;
