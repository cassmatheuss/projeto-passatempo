document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");
    const overlay = document.getElementById("overlay");
  
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("active"); 
      overlay.classList.toggle("active"); 
    });
  
   
    overlay.addEventListener("click", () => {
      navList.classList.remove("active");
      overlay.classList.remove("active");
    });
  });