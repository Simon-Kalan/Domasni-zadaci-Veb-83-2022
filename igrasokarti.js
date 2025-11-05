const tabla = document.getElementById('tabla');
const obidiDisplay = document.getElementById('obidi');

let prvaKarta = null;
let vtoraKarta = null;
let lockBoard = false;
let obidi = 0;


const sliki = [
  "Sliki/Jugg.jpg",
  "Sliki/Sven.jpeg",
  "Sliki/Void.jpeg",
  "Sliki/Axe.jpg",
  "Sliki/Ursa.jpg",
  "Sliki/Knight.avif"
];


let cardsArray = [...sliki, ...sliki];


cardsArray = cardsArray.sort(() => 0.5 - Math.random());


cardsArray.forEach(img => {
  const card = document.createElement('img');
  card.src = "Sliki/BlueCard.jpg";  // back of card
  card.dataset.front = img;
  card.classList.add('karta');
  tabla.appendChild(card);

  card.addEventListener('click', PrevrtiKarta);
});

function PrevrtiKarta() {
  if (lockBoard) return;
  if (this === prvaKarta) return;

  this.src = this.dataset.front;

  if (!prvaKarta) {
    prvaKarta = this;
    return;
  }

  vtoraKarta = this;
  lockBoard = true;
  obidi++;
  obidiDisplay.textContent = obidi;

  ProveriISTAKarta();
}

function ProveriISTAKarta() {
  if (prvaKarta.dataset.front === vtoraKarta.dataset.front) {
    resetBoard();
    checkWin();
  } else {
    setTimeout(() => {
      prvaKarta.src = "Sliki/BlueCard.jpg";
      vtoraKarta.src = "Sliki/BlueCard.jpg";
      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  [prvaKarta, vtoraKarta] = [null, null];
  lockBoard = false;
}

function checkWin() {
  const allFlipped = Array.from(document.querySelectorAll('.karta'))
    .every(card => card.src.includes(card.dataset.front.split('/').pop()));

  if (allFlipped) {
    setTimeout(() => {
      alert(`Браво! Ги најде сите парови за ${obidi} обиди.`);
    }, 200);
  }
}
