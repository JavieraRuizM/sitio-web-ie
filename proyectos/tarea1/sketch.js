let gridSize = 40; // Tamaño de cuadrado
let rows, cols;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = height / gridSize;
  cols = width / gridSize;
  rectMode(CENTER);
  noStroke();
  frameRate(30);
  background(255);
}

function draw() {
  background(255);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let offsetX = x * gridSize;
      let offsetY = y * gridSize;
      let wave = sin(angle + x * 0.2 + y * 0.2) * 20;
      let size = gridSize + wave;
      
      // Determinar si el cuadrado debe ser blanco o negro según la posición
      if ((x + y) % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }
      
      rect(offsetX + gridSize / 2, offsetY + gridSize / 2, size, size);
    }
  }

  angle += 0.1;
}