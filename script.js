const slider = document.querySelector('.slider');
const images = Array.from(slider.children);
const imageWidth = 250; // Adjust for image width + margin
let currentIndex = 0;

// Clone images for seamless circular scrolling
images.forEach((img) => {
  const clone = img.cloneNode(true);
  slider.appendChild(clone);
});

function slideImages() {
  currentIndex++;
  slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

  // If we've scrolled through all original images, reset seamlessly
  if (currentIndex === images.length) {
    setTimeout(() => {
      slider.style.transition = 'none';
      currentIndex = 0;
      slider.style.transform = 'translateX(0)';
    }, 500);

    // Re-enable transition after the reset
    setTimeout(() => {
      slider.style.transition = 'transform 0s linear';
    }, 600);
  }
}

// Run the slide function every 2 seconds
setInterval(slideImages, 1500);
