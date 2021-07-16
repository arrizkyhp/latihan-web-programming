console.log('it fokin werks');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'This is a paragraph';

// put on Document
const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/200/';
myImage.alt = 'random image from picsum';
myImage.className = 'niceImage';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

myDiv.appendChild(myImage);
myDiv.appendChild(myParagraph);

document.body.appendChild(myDiv);

// Adding Header before paragraph
const heading = document.createElement('h1');
heading.textContent = 'This is just a heading';

myDiv.insertAdjacentElement('afterbegin', heading);

// ===================================================

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'two';
list.appendChild(li);

const li1 = document.createElement('li');
li1.textContent = 'one';
const li5 = document.createElement('li');
li5.textContent = 'five';

li.insertAdjacentElement('beforebegin', li1);
li.insertAdjacentElement('afterend', li5);

document.body.appendChild(list);
