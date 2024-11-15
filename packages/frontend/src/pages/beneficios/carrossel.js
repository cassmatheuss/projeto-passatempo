const prevButton = document.querySelector(".prev");
      const nextButton = document.querySelector(".next");
      const slides = document.querySelector(".inner");
      const slideWidth = document.querySelector(".carrosselSlide").clientWidth;
      let currentSlide = 0;

      const totalSlides = document.querySelectorAll(
        ".inner .carrosselSlide"
      ).length;

      function goToPrevSlide() {
        if (currentSlide > 0) {
          currentSlide--;
        } else {
          currentSlide = totalSlides - 1;
        }
        updateCarousel();
      }

      function goToNextSlide() {
        if (currentSlide < totalSlides - 1) {
          currentSlide++;
        } else {
          currentSlide = 0; 
        }
        updateCarousel();
      }

      function updateCarousel() {
        const offset = -currentSlide * 0.016 * slideWidth; 
        slides.style.transform = `translateX(${offset}%)`;
      }

      prevButton.addEventListener("click", goToPrevSlide);
      nextButton.addEventListener("click", goToNextSlide);