export function atlzData() {
  const hoje = new Date();

  const dataInicioHtmlCss = new Date(2022, 0, 1); // Janeiro de 2022
  const dataInicioJsFigma = new Date(2023, 5, 1); // Maio de 2023
  const dataInicioMySQL = new Date(2024, 3, 1); // Abril de 2024
  const dataInicioPhp = new Date(2025, 3, 1); // Abril de 2025

  // Função utilitária para calcular anos e meses de experiência
  const calcExp = (inicio) => {
    let anos = hoje.getFullYear() - inicio.getFullYear();
    let meses = hoje.getMonth() - inicio.getMonth();

    // Ajuste se o mês ainda não chegou no ano atual
    if (meses < 0) {
      anos -= 1;
      meses += 12;
    }
    return { anos, meses };
  };

  const expHtmlCss = calcExp(dataInicioHtmlCss);
  const expJsFigma = calcExp(dataInicioJsFigma);
  const expMySQL = calcExp(dataInicioMySQL);
  const expPhp = calcExp(dataInicioPhp);

  // Atualiza o DOM apenas se os elementos existirem
  const elHtml = document.getElementById("tempo-decorrido-html");
  if (elHtml)
    elHtml.textContent = `${expHtmlCss.anos}.${expHtmlCss.meses} anos`;

  const elCss = document.getElementById("tempo-decorrido-css");
  if (elCss) elCss.textContent = `${expHtmlCss.anos}.${expHtmlCss.meses} anos`;

  const elJs = document.getElementById("tempo-decorrido-js");
  if (elJs) elJs.textContent = `${expJsFigma.anos}.${expJsFigma.meses} anos`;

  const elFigma = document.getElementById("tempo-decorrido-figma");
  if (elFigma)
    elFigma.textContent = `${expJsFigma.anos}.${expJsFigma.meses} anos`;

  const elMySQL = document.getElementById("tempo-decorrido-mysql");
  if (elMySQL) elMySQL.textContent = `${expMySQL.anos}.${expMySQL.meses} anos`;

  const elPhp = document.getElementById("tempo-decorrido-php");
  if (elPhp) elPhp.textContent = `${expPhp.anos}.${expPhp.meses} anos`;
}

// Garantir que o código rode após o DOM carregar
document.addEventListener("DOMContentLoaded", atlzData);
