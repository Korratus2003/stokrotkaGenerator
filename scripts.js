const container = document.querySelector("#container");
const heart = document.querySelector("#heart");
let isDragging = false;
let currentStokrotka = null;
let offsetX = 0;
let offsetY = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function generateStokrotka() {
  const stokrotka = document.createElement("div");
  stokrotka.className = "flower";
  stokrotka.style.backgroundImage = `url("${getRandomInt(4)}.png")`;
  container.appendChild(stokrotka);
  stokrotka.style.top = `${getRandomInt(window.innerHeight+200)-100}px`;
  stokrotka.style.left = `${getRandomInt(window.innerWidth+200)-100}px`;
  stokrotka.style.width = `${getRandomInt(30)}%`;
  stokrotka.style.rotate = `${getRandomInt(360)}deg`;

  stokrotka.addEventListener("mousedown", handleMouseDown);
  stokrotka.addEventListener("mousemove", handleMouseMove);
  stokrotka.addEventListener("mouseup", handleMouseUp);
  stokrotka.addEventListener("touchstart", handleTouchStart);
  stokrotka.addEventListener("touchmove", handleTouchMove);
  stokrotka.addEventListener("touchend", handleTouchEnd);
}

function handleMouseDown(e) {
  isDragging = true;
  currentStokrotka = e.target;
  offsetX = e.clientX - currentStokrotka.getBoundingClientRect().left;
  offsetY = e.clientY - currentStokrotka.getBoundingClientRect().top;
  currentStokrotka.style.position = "absolute";
  currentStokrotka.style.zIndex = "1000";
}

function handleMouseMove(e) {
  if (isDragging && currentStokrotka) {
    currentStokrotka.style.left = `${e.clientX - offsetX}px`;
    currentStokrotka.style.top = `${e.clientY - offsetY}px`;
  }
}

function handleMouseUp() {
  isDragging = false;
  currentStokrotka = null;
}

function handleTouchStart(e) {
    isDragging = true;
    currentStokrotka = e.target;
    const touch = e.touches[0];
    offsetX = touch.clientX - currentStokrotka.getBoundingClientRect().left;
    offsetY = touch.clientY - currentStokrotka.getBoundingClientRect().top;
  }
  
  function handleTouchMove(e) {
    if (isDragging && currentStokrotka) {
      const touch = e.touches[0];
      currentStokrotka.style.left = `${touch.clientX - offsetX}px`;
      currentStokrotka.style.top = `${touch.clientY - offsetY}px`;
    }
  }
  
  function handleTouchEnd() {
    isDragging = false;
    currentStokrotka = null;
  }

heart.addEventListener("click", generateStokrotka);
