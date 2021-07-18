console.log('it works');

const cardButtons = document.querySelectorAll('button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

// Handle Button Function
function handleButtonClick(event) {
  const button = event.target;
  const card = button.closest('.card');
  // Grab image source
  const imgSource = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  // populate ModalInner
  modalInner.innerHTML = `
     <img width="500" height="500" src="${imgSource.replace(
       '200',
       '500'
     )}" alt="${name}">
     <p>${desc}</p>
  `;
  // show the modal
  modalOuter.classList.add('open');
}

// Close Modal
function closeModal() {
  modalOuter.classList.remove('open');
}
// click outside close
modalOuter.addEventListener('click', function (event) {
  const isOutside = !event.target.closest('.modal-inner');

  if (isOutside) {
    closeModal();
  }
});

// press escape close modal
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Learn more button CLicked
cardButtons.forEach(function (button) {
  button.addEventListener('click', handleButtonClick);
});
