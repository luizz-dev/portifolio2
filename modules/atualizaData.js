export function atlzData() {
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

  const elHtml = document.getElementById("tempo-decorrido-html");
  if (elHtml) elHtml.textContent = `${anos}.${meses} anos`;

  const elCss = document.getElementById("tempo-decorrido-css");
  if (elCss) elCss.textContent = `${anos}.${meses} anos`;

  const elJs = document.getElementById("tempo-decorrido-js");
  if (elJs) elJs.textContent = `${anosJS}.${mesesJS} anos`;
}
