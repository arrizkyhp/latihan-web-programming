const turtle = document.querySelector('.turtle');
let x = 0;
let y = 0;
const speed = 10;
let flipped = false;
let rotate = 0;
function handleKeyDown(event) {
  // if not arrow key not work

  if (!event.key.includes('Arrow')) {
  }
  switch (event.key) {
    case 'ArrowUp':
      y -= 1;
      rotate = -90;
      break;
    case 'ArrowDown':
      y += 1;
      rotate = 90;
      break;
    case 'ArrowRight':
      x += 1;
      flipped = false;
      rotate = 0;
      break;
    case 'ArrowLeft':
      x -= 1;
      flipped = true;
      rotate = 0;
      break;
    default:
      console.log('Wrong!!');
      break;
  }
  //   turtle.style['--x'] = `${x}px`;
  //   turtle.style['--y'] = `${y}px`;
  turtle.setAttribute(
    'style',
    `
   --rotateY : ${flipped ? '180deg' : '0'};
   --x: ${x * speed}px;
   --y: ${y * speed}px;
   --rotate: ${rotate}deg;
   `
  );
}
window.addEventListener('keydown', handleKeyDown);
