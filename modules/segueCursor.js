export function segueCursor() {
  const follow = document.getElementById("follow");
  if (!follow) return;

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

  let isActive = window.innerWidth > 708;
  let animationFrameId = null;

  // Atualiza o alvo com o cursor (aplica offset)
  function onMouseMove(e) {
    tx = e.clientX + offsetX + 12.5;
    ty = e.clientY + offsetY + 17;
  }

  function animate() {
    if (!isActive) return;

    cx += (tx - cx) * speed;
    cy += (ty - cy) * speed;

    follow.style.left = cx - size / 2 + "px";
    follow.style.top = cy - size / 2 + "px";

    animationFrameId = requestAnimationFrame(animate);
  }

  function enable() {
    if (!isActive) {
      isActive = true;
      document.addEventListener("mousemove", onMouseMove);
      animate();
    }
  }

  function disable() {
    if (isActive) {
      isActive = false;
      document.removeEventListener("mousemove", onMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      // Opcional: esconder o elemento
      follow.style.left = "-9999px";
      follow.style.top = "-9999px";
    }
  }

  // Inicializa se a tela for grande o suficiente
  if (isActive) {
    document.addEventListener("mousemove", onMouseMove);
    animate();
  }

  // Escuta redimensionamento para ativar/desativar o efeito
  window.addEventListener("resize", () => {
    if (window.innerWidth > 708) {
      enable();
    } else {
      disable();
    }
  });
}
