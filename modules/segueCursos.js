export function segueCursor() {
  const follow = document.getElementById("follow");
  // Ponto atual do círculo (vai movimentando-se)
  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;

  let tx = cx;
  let ty = cy;

  // Parâmetros de configuração
  const size =
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--size")
    ) || 40;
  const speed =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--speed")
    ) || 0.15;
  const offsetX =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--offset-x")
    ) || -10;
  const offsetY =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--offset-y")
    ) || -10;

  // Atualiza o alvo com o cursor (aplica offset para manter o centro no cursor)
  document.addEventListener("mousemove", (e) => {
    tx = e.clientX + offsetX + 12.5;
    ty = e.clientY + offsetY + 17;
  });

  // Animação com atraso (lerp)
  function animate() {
    // Interpola atual para o alvo
    cx += (tx - cx) * speed;
    cy += (ty - cy) * speed;

    // Posiciona o topo/esquerda para centralizar o círculo no ponto (cx, cy)
    follow.style.left = cx - size / 2 + "px";
    follow.style.top = cy - size / 2 + "px";

    requestAnimationFrame(animate);
  }

  // Inicia o loop
  animate();

  // Em caso de mudanças de tamanho da tela, ajuste o alvo
  window.addEventListener("resize", () => {
    tx = window.innerWidth / 2 + offsetX;
    ty = window.innerHeight / 2 + offsetY;
    // cx/cy continuam suave; não precisamos resetar imediatamente
  });
}
