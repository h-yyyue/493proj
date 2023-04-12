const sliderImages = document.querySelectorAll('.slider-image');
const leftArrow = document.querySelector('.slider-arrow-left');
const rightArrow = document.querySelector('.slider-arrow-right');
let currentIndex = 0;

// Show the current image and hide the rest
function showCurrentImage() {
  sliderImages.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.opacity = 1;
    } else {
      image.style.opacity = 0;
    }
  });
}

// Move to the next image
function nextImage() {
  if (currentIndex === sliderImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showCurrentImage();
}

// Move to the previous image
function previousImage() {
  if (currentIndex === 0) {
    currentIndex = sliderImages.length - 1;
  } else {
    currentIndex--;
  }
  showCurrentImage();
}

// Add event listeners to arrows
leftArrow.addEventListener('click', previousImage);
rightArrow.addEventListener('click', nextImage);

// Show the initial image
showCurrentImage();
