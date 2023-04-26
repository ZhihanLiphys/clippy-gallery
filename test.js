var images = ['11.png', '2.png', '3.png'];
var indicatorContainer = document.querySelector('.indicator-container');
var indicators = indicatorContainer.querySelectorAll('.indicator');
var currentIndex = 0;

function updateIndicator() {
  for (var i = 0; i < indicators.length; i++) {
    if (i === currentIndex) {
      indicators[i].classList.add('active');
    } else {
      indicators[i].classList.remove('active');
    }
  }
}

function nextImage() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateIndicator();
  document.querySelector('#main-image').src = images[currentIndex];
  // Customized distance for indicator
  indicatorContainer.style.transform = `translateX(-${(currentIndex * 20)}px)`;
}

document.querySelector('#next-btn').addEventListener('click', nextImage);
