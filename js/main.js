// ====== Карусель секции 1 ======
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 1;

function updateCarousel() {
  items.forEach((item,index)=>{
    item.classList.remove('center');
    if(index===currentIndex) item.classList.add('center');
  });
  const offset = items[currentIndex].offsetLeft - track.offsetWidth/2 + items[currentIndex].offsetWidth/2;
  track.style.transform = `translateX(${-offset}px)`;
}

prevBtn.addEventListener('click',()=>{
  currentIndex=(currentIndex-1+items.length)%items.length;
  updateCarousel();
});
nextBtn.addEventListener('click',()=>{
  currentIndex=(currentIndex+1)%items.length;
  updateCarousel();
});
window.addEventListener('load',updateCarousel);
window.addEventListener('resize',updateCarousel);

// ====== Карусель секции 3 ======
const track3 = document.querySelector('.carousel3-track');
const items3 = Array.from(track3.children);
const prev3 = document.querySelector('.prev3');
const next3 = document.querySelector('.next3');
let currentIndex3 = 0;

function updateCarousel3() {
  const offset = items3[currentIndex3].offsetLeft;
  track3.style.transform = `translateX(${-offset}px)`;
}

prev3.addEventListener('click', ()=>{
  currentIndex3 = (currentIndex3 - 1 + items3.length) % items3.length;
  updateCarousel3();
});

next3.addEventListener('click', ()=>{
  currentIndex3 = (currentIndex3 + 1) % items3.length;
  updateCarousel3();
});

window.addEventListener('load', updateCarousel3);
window.addEventListener('resize', updateCarousel3);