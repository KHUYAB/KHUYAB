const toggle = document.getElementById("darkToggle");

// Function to apply mode
function applyMode(isDark) {
  if(isDark) {
    document.body.classList.add("dark-mode");
    toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    document.body.classList.remove("dark-mode");
    toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

// Check localStorage on page load
const darkModeStored = localStorage.getItem("dark-mode") === "true";
applyMode(darkModeStored);

// Toggle button click
toggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  applyMode(isDark);

  // Save preference to localStorage
  localStorage.setItem("dark-mode", isDark);
});


// 🎞️ Carousel (safe check)
const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");
const dotsContainer = document.querySelector(".carousel-dots");

if (track && images.length && dotsContainer) {
  let index = 0;
  let autoPlayInterval;

  images.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
      stopAutoPlay();
      startAutoPlay();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".carousel-dots button");

  function updateCarousel() {
    const width = images[0].clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === index)
    );
  }

  function nextSlide() {
    index = (index + 1) % images.length;
    updateCarousel();
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 3000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  window.addEventListener("resize", updateCarousel);
  updateCarousel();
  startAutoPlay();
}

document.querySelectorAll('.timeline-item').forEach(item => {
  item.addEventListener('click', () => {
    document
      .querySelectorAll('.timeline-item')
      .forEach(i => i.classList.remove('active'));

    item.classList.add('active');
  });
});

//sliding image lisy
const imageList = document.getElementById("image-list");
const imageData = [
  { src: "assets/animation/1.jpg" },
  { src: "assets/animation/2.jpg" },
  { src: "assets/animation/3.jpg" },
  { src: "assets/animation/4.jpg" },
  { src: "assets/animation/5.jpg" },
  { src: "assets/animation/6.jpg" },
  { src: "assets/animation/7.jpg" },
  { src: "assets/animation/8.jpg" },
  { src: "assets/animation/9.jpg" },
  { src: "assets/animation/10.jpg" },
  { src: "assets/animation/11.jpg" },
  { src: "assets/animation/14.jpg" },
  { src: "assets/animation/15.jpg" }
];

// Inject images without label
function loadImages() {
  imageData.forEach(item => {
    const card = document.createElement("div");
    card.className = "timeline-card";
    card.innerHTML = `<img src="${item.src}">`; // no <span> label
    imageList.appendChild(card);
  });
}

loadImages();

function scrollSmooth(direction) {
  const isMobile = window.innerWidth <= 768;

  let step;

  if (isMobile) {
    step = imageList.clientWidth; // 1 image full width (mobile)
  } else {
    const card = imageList.querySelector(".timeline-card");
    step = card.offsetWidth + 20; // 1 image + gap (desktop)
  }

  imageList.scrollTo({
    left: imageList.scrollLeft + (step * direction),
    behavior: "smooth"
  });
} 
scrollLeft.addEventListener("click", () => scrollSmooth(-1));
scrollRight.addEventListener("click", () => scrollSmooth(1));

//security//
document.addEventListener('contextmenu', e => {
  e.preventDefault();
  alert('Wag Mung Subokan Inspect masisira Buhay mo hahaha');
});
