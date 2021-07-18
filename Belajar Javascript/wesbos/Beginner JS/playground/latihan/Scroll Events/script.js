const terms = document.querySelector('.terms-and-conditions');

const button = document.querySelector('.accept');

// catch modal
const modalOuter = document.querySelector('.outer-modal');

// Old Stuff
// terms.addEventListener('scroll', function (e) {
//   console.log(e.target.scrollTop);
//   console.log(e.target.scrollHeight);
// });

// New
function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop obs
    ob.unobserve(terms.lastElementChild);
  }
}
const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });

// ob.observe(watch);
ob.observe(terms.lastElementChild);

// =========== MODAL ===================
function handleButtonClick(e) {
  modalOuter.classList.add('open');
}

// Close Modal
function closeModal() {
  modalOuter.classList.remove('open');
}
// click outside close
modalOuter.addEventListener('click', function (event) {
  const isOutside = !event.target.closest('.inner-modal');
  if (isOutside) {
    closeModal();
  }
});

button.addEventListener('click', handleButtonClick);
