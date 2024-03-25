const container = document.querySelector("#container");
const heart = document.querySelector("#heart");
const napis = document.querySelector("#napis");

let licznik = 0;
let komplementy = [
    "Jesteś piękna",
    "Twoje uśmiechy są promieniejące",
    "Jesteś niesamowicie inteligentna",
    "Twoja determinacja jest inspirująca",
    "Masz doskonałe poczucie humoru",
    "Jesteś niezwykle empatyczna",
    "Twoje marzenia są inspirujące",
    "Jesteś niezwykle urocza",
    "Twoja wrażliwość jest godna podziwu",
    "Jesteś niezwykle kreatywna",
    "Twoja hojność jest godna pochwały",
    "Jesteś duchem inspiracji",
    "Twoje serce jest pełne miłości",
    "Jesteś niezwykle wyjątkowa",
    "Twoje pomysły są oryginalne",
    "Jesteś niezwykle wyjątkową osobą",
    "Twoje działania przynoszą radość",
    "Jesteś niezwykle wyjątkowa",
    "Twoje słowa mają wielką moc",
    "Jesteś pełna wdzięku",
    "Twoje działania przynoszą radość innym",
    "Jesteś duchem inspiracji",
    "Twoja obecność jest motywująca",
    "Jesteś niezwykle wyjątkowa",
    "Twoje serce jest pełne miłości",
    "Jesteś hojna",
    "Twoje marzenia są inspirujące",
    "Jesteś inspirująca",
    "Twoje pomysły są niezwykłe",
    "Jesteś pełna miłości",
    "Twoje słowa mają wielką moc",
    "Jesteś niezwykle inspirująca",
    "Twoja wrażliwość jest godna podziwu",
    "Jesteś urocza",
    "Twoje działania mają wielki wpływ",
    "Jesteś kochana",
    "Twoje serce jest niesamowite",
    "Jesteś niezwykle empatyczna",
    "Twoje słowa mają ogromną moc",
    "Jesteś hojna",
    "Twoja obecność sprawia, że świat staje się lepszy",
    "Jesteś urocza",
    "Twoje działania przynoszą radość",
    "Jesteś pełna wdzięku",
    "Twoja obecność jest motywująca",
    "Jesteś wyjątkowa",
    "Twoje słowa mają wielką moc",
    "Jesteś inspirująca",
    "Twoja wrażliwość jest godna podziwu",
    "Jesteś urocza",
    "Twoje działania mają wielki wpływ",
    "Jesteś kochana",
    "Twoje serce jest niesamowite",
    "Jesteś niezwykle empatyczna",
    "Twoje słowa mają ogromną moc",
    "Jesteś hojna",
    "Twoja obecność sprawia, że świat staje się lepszy",
    "Jesteś urocza",
    "Twoje działania przynoszą radość",
    "Kocham cię"
];


let index = 0;


let isDragging = false;
let currentStokrotka = null;
let offsetX = 0;
let offsetY = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function generujNapis(){
  napis.textContent = komplementy[index];
  index= getRandomInt(komplementy.length-2);
  licznik++;
  if((licznik%20==0)&&(licznik!=100)) {alert(`Kliknęłaś to już ${licznik} razy 🥺`)};
  if((licznik%100==0)&&(confirm(`Kliknęłaś to już ${licznik} razy, czy chcesz przejść do kolejnej niespodzianki czy bawić się dalej stokrotkami?`))) location.assign("surprise.html")
}

function generateStokrotka() {
  const stokrotka = document.createElement("div");
  stokrotka.className = "flower";
  stokrotka.style.backgroundImage = `url("${getRandomInt(4)}.png")`;
  container.appendChild(stokrotka);
  stokrotka.style.width = `${getRandomInt(20)+10}%`;
  stokrotka.style.rotate = `${getRandomInt(360)}deg`;
  stokrotka.style.top = `${getRandomInt(window.innerHeight - stokrotka.offsetWidth)}px`;
  stokrotka.style.left = `${getRandomInt(window.innerWidth - stokrotka.offsetWidth)}px`;

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
    const containerRect = container.getBoundingClientRect();
    const minX = 0;
    const minY = 0;
    const maxX = containerRect.width - currentStokrotka.offsetWidth*1.15;
    const maxY = containerRect.height - currentStokrotka.offsetHeight*1.15;

    const touch = e.touches[0];
    let newX = touch.clientX - offsetX - containerRect.left;
    let newY = touch.clientY - offsetY - containerRect.top;

    newX = Math.max(minX, Math.min(newX, maxX));
    newY = Math.max(minY, Math.min(newY, maxY));

    currentStokrotka.style.left = `${newX}px`;
    currentStokrotka.style.top = `${newY}px`;
  }
}
  
  function handleTouchEnd() {
    isDragging = false;
    currentStokrotka = null;
  }

heart.addEventListener("click", ()=>{generateStokrotka(); generujNapis()});
