

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("nav-list");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active"); // Ativa/desativa o menu
    overlay.classList.toggle("active"); // Ativa/desativa o overlay
  });

  // Fecha o menu se o usuário clicar no overlay
  overlay.addEventListener("click", () => {
    navList.classList.remove("active");
    overlay.classList.remove("active");
  });
  
});
