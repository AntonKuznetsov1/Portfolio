const arrow = document.querySelector('.menu-container');
const menu = document.querySelector('.links');



arrow.addEventListener("click", () => {
  arrow.classList.toggle('active');
  menu.classList.toggle('active');
})

let rellax;

function initRellax() {
  if (rellax) rellax.destroy();
  rellax = new Rellax('.rellax');
}

function updateRellaxSpeed() {
  const images = document.querySelectorAll('.background');
  images.forEach(image => {
    if (window.innerWidth < 510) {
      image.setAttribute('data-rellax-speed', '0');
    } else {
      image.setAttribute('data-rellax-speed', '-10');
    }
  });
  initRellax();
}

window.addEventListener('DOMContentLoaded', updateRellaxSpeed);
window.addEventListener('resize', updateRellaxSpeed);