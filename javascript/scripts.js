const images = document.querySelectorAll('.image');
let currentImageIndex = 0;
function changeImage() {
  images.forEach((image) => {
    image.style.opacity = '0';
  });
  images[currentImageIndex].style.opacity = '1';
  currentImageIndex = (currentImageIndex + 1) % images.length;
}
setInterval(changeImage, 4000);

const leftImage = document.querySelector('.hover-image.left');
const rightImage = document.querySelector('.hover-image.right');

leftImage.addEventListener('mouseover', () => {
    leftImage.src = 'images/index/mision.png';
});

leftImage.addEventListener('mouseout', () => {
    leftImage.src = 'images/index/bm.png';
});

rightImage.addEventListener('mouseover', () => {
    rightImage.src = 'images/index/vision.png';
});

rightImage.addEventListener('mouseout', () => {
    rightImage.src = 'images/index/bv.png';
});

document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');

  menuIcon.addEventListener('click', function() {
      menu.classList.toggle('menu-active');
  });
});