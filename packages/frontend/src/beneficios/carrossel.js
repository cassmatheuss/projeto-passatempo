const slides = document.querySelector('.slide');
let currenIndex = 0;

function showSlide(n) {
    slides[currenIndex].style.display = 'none';
    currenIndex = (n + slides.lenght) % slides.lenght;
    slides[currenIndex].style.display = 'block';
}

function nextSlide() {
    showSlide (currenIndex + 1);
}

function prevSlide() {
    showSlide (currenIndex - 1)
}

setInterval(nextSlide, 3000)