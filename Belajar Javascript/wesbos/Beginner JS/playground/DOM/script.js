const p = document.querySelector('p');
const h1 = document.querySelector('h1');

p.textContent = 'Arrizky Bruh';
console.log(p.textContent);

h1.insertAdjacentText('afterbegin', '📢');
const noice = document.querySelector('.noice');
noice.classList.add('beauty');
// noice.classList.add('round');

noice.addEventListener('click', () => {
  noice.classList.toggle('round');
});
console.log(noice.classList);
noice.alt = 'city from the top';

console.log(noice.getAttribute('class')); // Getter
noice.setAttribute('class', 'crowdImg'); // Setter
