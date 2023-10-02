var coll = document.getElementsByClassName("collapsible");
var i;
        
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active_c");
      var collapsible_content = this.nextElementSibling;
      if (collapsible_content.style.maxHeight){
        collapsible_content.style.maxHeight = null;
      } else {
        collapsible_content.style.maxHeight = collapsible_content.scrollHeight + "px";
      } 
    });
  }

// Add the 'active' class to the first slide
document.querySelector('.slide').classList.add('active');

// Set the interval for transitioning to the next slide
let interval = setInterval(showNextSlide, 5000); // Change the duration as needed (in milliseconds)

// Generate slide indicators
const slides = document.querySelectorAll('.slide');
const indicatorsContainer = document.querySelector('.slideshow-indicators');
slides.forEach((slide, index) => {
  const indicator = document.createElement('span');
  indicator.setAttribute('onclick', `jumpToSlide(${index})`);
  indicatorsContainer.appendChild(indicator);
});

// Update active slide indicator
function updateIndicators() {
  const indicators = document.querySelectorAll('.slideshow-indicators span');
  const activeSlideIndex = Array.from(slides).findIndex((slide) =>
    slide.classList.contains('active')
  );
  indicators.forEach((indicator, index) => {
    if (index === activeSlideIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function showNextSlide() {
  const currentSlide = document.querySelector('.slide.active');
  const nextSlide = currentSlide.nextElementSibling;

  if (nextSlide) {
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
  } else {
    // If the last slide is reached, go back to the first slide
    currentSlide.classList.remove('active');
    document.querySelector('.slide').classList.add('active');
  }

  updateIndicators();
}

function changeSlide(direction) {
  clearInterval(interval);

  const currentSlide = document.querySelector('.slide.active');
  const slidesArray = Array.from(slides);
  const currentIndex = slidesArray.findIndex((slide) =>
    slide.classList.contains('active')
  );

  let nextIndex = currentIndex + direction;
  if (nextIndex < 0) {
    nextIndex = slidesArray.length - 1;
  } else if (nextIndex >= slidesArray.length) {
    nextIndex = 0;
  }

  currentSlide.classList.remove('active');
  slidesArray[nextIndex].classList.add('active');

  updateIndicators();

  interval = setInterval(showNextSlide, 5000);
}

function jumpToSlide(index) {
  clearInterval(interval);

  const currentSlide = document.querySelector('.slide.active');
  const targetSlide = slides[index];

  currentSlide.classList.remove('active');
  targetSlide.classList.add('active');

  updateIndicators();

  interval = setInterval(showNextSlide, 5000);
}