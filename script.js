let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateCarousel() {
    items.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none';
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

updateCarousel();

// Inițializare AOS
AOS.init();
