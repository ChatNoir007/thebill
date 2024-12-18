const dvd = document.querySelector(".dvd");
const container = document.querySelector(".dvd-container");

let x = 0; // Początkowa pozycja na osi X
let y = 0; // Początkowa pozycja na osi Y
let speedX = 2; // Szybkość ruchu w poziomie
let speedY = 2; // Szybkość ruchu w pionie
let rotation = 0;
const dvdWidth = 100; // Szerokość płyty DVD
const dvdHeight = 100; // Wysokość płyty DVD

function moveDVD() {
  // Przesuwamy płytę
  x += speedX;
  y += speedY;

  // Sprawdzamy, czy płyta dotknęła krawędzi po osi X (poziomej)
  if (x <= 0 || x + dvdWidth >= window.innerWidth) {
    speedX = -speedX; // Zmieniamy kierunek w poziomie
  }

  // Sprawdzamy, czy płyta dotknęła krawędzi po osi Y (pionowej)
  if (y <= 0 || y + dvdHeight >= window.innerHeight) {
    speedY = -speedY; // Zmieniamy kierunek w pionie
  }
  rotation += 1;
  // Ustawiamy nową pozycję płyty
  dvd.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

  // Wywołujemy funkcję ponownie przy następnej klatce animacji
  requestAnimationFrame(moveDVD);
}

// Rozpoczynamy animację
moveDVD();
