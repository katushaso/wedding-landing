// ====== Секция 1 - Главная карусель ======
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    if(index === currentIndex) {
      item.classList.add('center');
    } else {
      item.classList.remove('center');
    }
  });
  const slideWidth = items[0].getBoundingClientRect().width + 20;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

updateCarousel();

// ====== Секция 3 - Карусель Фото ======
const track3 = document.querySelector('.carousel3-track');
const items3 = Array.from(track3.children);
const prev3 = document.querySelector('.carousel3-btn.prev3');
const next3 = document.querySelector('.carousel3-btn.next3');

let currentIndex3 = 0;

function updateCarousel3() {
  const slideWidth = items3[0].getBoundingClientRect().width + 20;
  track3.style.transform = `translateX(-${currentIndex3 * slideWidth}px)`;
}

prev3.addEventListener('click', () => {
  currentIndex3 = (currentIndex3 - 1 + items3.length) % items3.length;
  updateCarousel3();
});

next3.addEventListener('click', () => {
  currentIndex3 = (currentIndex3 + 1) % items3.length;
  updateCarousel3();
});

updateCarousel3();