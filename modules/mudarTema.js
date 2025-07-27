export default function mudarTema() {
  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");

  sun.addEventListener("click", function () {
    document.body.classList.add("light");
  });
  moon.addEventListener("click", function () {
    document.body.classList.remove("light");
  });
}
