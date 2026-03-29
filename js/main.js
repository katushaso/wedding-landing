const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 1;

function updateCarousel() {
  items.forEach((item,index)=>{item.classList.remove('center'); if(index===currentIndex)item.classList.add('center');});
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