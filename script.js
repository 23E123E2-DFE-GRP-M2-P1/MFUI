const doc = document;
// Acessando dos elementos
const toggle = doc.querySelector(".toggle");
const navbar = doc.querySelector(".navbar");

toggle.onclick = toggleAction;

function toggleAction() {
  const toggleA = toggle.querySelector("a");
  const estaAtivo = navbar.classList.contains("ativo");
  if (estaAtivo) {
    navbar.classList.remove("ativo");
    toggleA.innerText = '=';
    // toggleA.style.color = "red";
  } else {
    navbar.classList.add("ativo");
    toggleA.innerText = 'x';
  }
}
