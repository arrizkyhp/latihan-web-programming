// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('ariz');
// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
const myUl = document.createElement('ul');
// =============== WESBOS WAY ===============
/* const ul = `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>`; */

// add three list items with the words "one, two, three" in them
// =============== ARIZ WAY ===============
const li1 = document.createElement('li');
li1.textContent = 'one';
const li2 = document.createElement('li');
li2.textContent = 'two';
const li3 = document.createElement('li');
li3.textContent = 'three';

// put that list into the above wrapper
// =============== WESBOS WAY ===============
// myDiv.innerHTML = ul;
// =============== ARIZ WAY ===============
myUl.appendChild(li1);
myUl.appendChild(li2);
myUl.appendChild(li3);

myDiv.appendChild(myUl);

document.body.appendChild(myDiv);

// create an image
const myImage = document.createElement('img');

// set the source to an image
const src = 'https://picsum.photos/500';
myImage.src = src;
// set the width to 250
myImage.width = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="myDiv">
        <p>this is the first paragraph</p>
        <p>this is the second paragraph</p>
    </div>
`;
// put this div before the unordered list from above
const ariz = document.querySelector('.ariz');
const arizUl = ariz.querySelector('ul');
const myFragment = document.createRange().createContextualFragment(myHTML);

arizUl.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
// =============== ARIZ WAY ===============
const pDiv = myFragment.querySelectorAll('p');
pDiv[1].classList.add('warning');

// =============== WESBOS WAY ===============
// const paragraphDiv = myDiv.querySelector('.myDiv');
// paragraphDiv.children[1].classList.add('warning');

// remove the first paragraph
// =============== ARIZ WAY ===============
pDiv[0].remove();
// =============== WESBOS WAY ===============
// paragraphDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const playerHTML = `
    <div class="playerCard">
    <a href="" class="close" >x</a>
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
    </div>
    `;
  // =============== ARIZ WAY ===============
  // No need This actully
  const playerFragment = document
    .createRange()
    .createContextualFragment(playerHTML);
  return playerFragment;

  // =============== WESBOS WAY ===============
  //   return playerHTML;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard

// =============== ARIZ WAY ===============
const card1 = generatePlayerCard('Arrizky', 18, 175);
const card2 = generatePlayerCard('Hasya', 21, 180);
const card3 = generatePlayerCard('Pratama', 22, 170);
const card4 = generatePlayerCard('Suganda', 24, 182);
cards.appendChild(card1);
cards.appendChild(card2);
cards.appendChild(card3);
cards.appendChild(card4);

// =============== WESBOS WAY ===============
/* let cardsHTML = generatePlayerCard('Arrizky', 18, 175);
cardsHTML += generatePlayerCard('Hasya', 21, 180);
cardsHTML += generatePlayerCard('Pratama', 22, 170);
cardsHTML += generatePlayerCard('Suganda', 24, 182);

cards.innerHTML = cardsHTML;
*/

// append those cards to the div

// =============== ARIZ WAY ===============
const cardDiv = document.createElement('div');
cardDiv.appendChild(cards);

// =============== WESBOS WAY ===============
// div.insertAdjacentElement('beforebegin', cards);

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cardDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const closeButton = cardDiv.querySelectorAll('.close');

// make out delete function
function deleteCard(event) {
  const buttonClicked = event.currentTarget;
  //   buttonClicked.parentElement.remove();
  buttonClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener

// =============== ARIZ WAY ===============
closeButton.forEach(function (e) {
  e.addEventListener('click', function (event) {
    event.preventDefault();
    deleteCard(event);
  });
});

// =============== WESBOS WAY ===============
// function deleteCard(event) {
//   const clickedButton = event.currentTarget;
//   clickedButton.parentElement.remove();
// }

// closeButton.forEach((button) => button.addEventListener('click', deleteCard));
