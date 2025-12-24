// 🌙 Dark mode toggle
const toggle = document.getElementById("darkToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.innerHTML = document.body.classList.contains("dark-mode")
      ? '<i class="fa-solid fa-moon"></i> Dark Mode'
      : '<i class="fa-solid fa-sun"></i> Light Mode';
  });
}

// ⌨️ Typing effect
const text = "ull-Stack Developer· UI/UX Designer";
const typingSpan = document.querySelector(".sub.role .typing");
let i = 0;
const typingSpeed = 100;
const delayBetweenLoops = 1500;

function typeWriter() {
  if (!typingSpan) return;

  if (i < text.length) {
    typingSpan.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(() => {
      typingSpan.textContent = "";
      i = 0;
      typeWriter();
    }, delayBetweenLoops);
  }
}

setTimeout(typeWriter, 500);

// 🖼️ Infinite image scroll
const imageList = document.getElementById("image-list");

const imageData = [
  "assets/animation/1.jpg",
  "assets/animation/2.jpg",
  "assets/animation/3.jpg",
  "assets/animation/4.png",
  "assets/animation/5.png",
  "assets/animation/6.png",
  "assets/animation/7.jpg",
  "assets/animation/8.jpg"
];

function loadImages() {
  if (!imageList) return;

  imageData.forEach(src => {
    const imgCard = document.createElement("div");
    imgCard.className = "image-card";
    imgCard.innerHTML = `<img src="${src}" alt="Gallery image">`;
    imageList.appendChild(imgCard);
  });
}

loadImages();
loadImages();

let scrollSpeed = 1;
setInterval(() => {
  if (!imageList) return;

  imageList.scrollLeft += scrollSpeed;
  if (imageList.scrollLeft >= imageList.scrollWidth / 2) {
    imageList.scrollLeft = 0;
  }
}, 20);

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
