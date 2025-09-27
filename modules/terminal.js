export function terminal() {
  const words = ["<HTML5>", "<CSS3/>", "<JavaScript>", "<PHP/>", "<MySQL/>"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const textElement = document.getElementById("typewriter");

  function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      charIndex--;
      textElement.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      textElement.textContent = currentWord.substring(0, charIndex);
    }

    let speed = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1000; // pausa no final da palavra
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 500; // pausa antes de escrever a próxima palavra
    }
    setTimeout(typeEffect, speed);
  }
  typeEffect();
}
