// Apenas para abreviar o uso de 'document'
const doc = document;

// Capturando o elemento li com a classe toggle
const toggle = doc.querySelector(".toggle");
// Capturando o elemento ul com a classe navbar
const navbar = doc.querySelector(".navbar");

// Define a ação ao clicar no toggle
toggle.onclick = toggleAction;

// Função que será usada na a ação ao clicar no toggle
function toggleAction() {
  
  // Captura a ãncora (<a>) que está dentro de toggle
  const toggleA = toggle.querySelector("a");
  
  // Verifica Verdadeiro ou Falso se navbar tem a classe 'ativo'
  const estaAtivo = navbar.classList.contains("ativo");
  
  if (estaAtivo) {
    // Remova a classe 'ativo' da tag navbar
    navbar.classList.remove("ativo");
    // Altera o texto da âncora do toggle
    toggleA.innerText = '=';
  } else {
    // Adiciona a classe 'ativo' da tag navbar
    navbar.classList.add("ativo");
    // Altera o texto da âncora do toggle
    toggleA.innerText = 'x';
  }
}
