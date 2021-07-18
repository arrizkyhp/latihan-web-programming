// Select the elemnts on the pave,canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shake = document.querySelector('.shake');
const MOVE_AMOUNT = 50;
// Setup canvas for drawing
// variable and property are same | const width = canvas.width;
const { width } = canvas;
const { height } = canvas;

// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

// color
let hue = 10;

ctx.strokeStyle = `hsl(${hue},100%,50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);

function beginBrush() {
  ctx.lineTo(x, y);
  ctx.stroke();
}

beginBrush();

// write a draw funtion
function draw({ key }) {
  // increment hue
  hue += 5;
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  //  begin path
  ctx.beginPath();
  ctx.moveTo(x, y);
  //   move x and y values depending on what user did
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }

  beginBrush();
}

// Shake function
function clearCanvas() {
  canvas.classList.add('shake');
  //   Clear Canvas
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  beginBrush();
  canvas.addEventListener(
    'animationend',
    function () {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// write a handler for the keys
function handleKey(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    draw({ key: event.key });
    // Shake keyboard shortcut
  } else if (event.key.includes('R') || event.key.includes('r')) {
    event.preventDefault();
    clearCanvas();
  }
}

// Listen for arrow kets
window.addEventListener('keydown', handleKey);

shake.addEventListener('click', clearCanvas);
