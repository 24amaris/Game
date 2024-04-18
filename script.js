function setup() {
    createCanvas(400, 400);
    let size = width / 8;
    drawChessboard(size);
    drawRandomPawns(size, 8, 'white');
    drawRandomPawns(size, 8, 'black');
  }
  
  function drawChessboard(size) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          fill(255); 
            } else {
          fill(0);   
            }
        rect(i * size, j * size, size, size);
      }
    }
  }
  
  function drawRandomPawns(size, numPawns, color) {
    let positions = [];
    while(positions.length < numPawns){
      let col = floor(random(8));
      let row = floor(random(8));
      let pos = col + row * 8; 
      let positionExists = false;
    for (let i = 0; i < positions.length; i++) {
    if (positions[i] === pos) {
      positionExists = true;
      break;
    }
  }
  
  if (!positionExists) {
    positions.push(pos);
    drawPawn(col * size + size / 2, row * size + size / 2, size / 2 - 2, color);
      }
    }
  }
  
  function drawPawn(x, y, size, color) {
    if (color === 'white') {
      fill(255); 
      } else {
      fill(0); 
  }
    circle(x, y, size);
  }
  