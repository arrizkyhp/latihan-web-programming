const buttoon = document.querySelector('.buttoon');

function handleGlick(event) {
  const button = event.target;
  console.log(button.textContent);
  console.log('You are Buying it 😁');
  console.log(event.target.dataset.price);
}

function handleBuyButtonClick(buyButton) {
  buyButton.addEventListener('click', handleGlick);
}

buttoon.addEventListener('click', handleGlick);

// Listen on multiple items
const buttonBuy = document.querySelectorAll('button.buy');

buttonBuy.forEach(handleBuyButtonClick);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('click', function (e) {
  console.log('you glick the image 🤣');
  console.log(this);
});
