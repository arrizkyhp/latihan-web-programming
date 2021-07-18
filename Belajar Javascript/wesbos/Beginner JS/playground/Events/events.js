const buttoon = document.querySelector('.buttoon');

function handleGlick() {
  console.log('You glick me, Thanks!! 😊 ');
}

function handleBuyButtonClick(buyButton) {
  buyButton.addEventListener('click', handleGlick);
}

buttoon.addEventListener('click', handleGlick);

// Listen on multiple items
const buttonBuy = document.querySelectorAll('button.buy');

buttonBuy.forEach(handleBuyButtonClick);
