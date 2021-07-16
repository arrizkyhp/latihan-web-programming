console.log('its mofakin werk!!');

// This is a string because use back thick ``
const item = document.querySelector('.item');
const src = 'https://picsum.photos/200';
const alt = 'majestic environment';
const myHTML = `
    <div>
        <h1>Welcome bruh</h1>
        <img src='${src}' alt'${alt}'/>
        <p>Awesomo photo ofo randomo</p>
    </div>
`;
// item.innerHTML = myHTML;

// turn a string into a DOM Element
const myFragment = document.createRange().createContextualFragment(myHTML);

// now you can call myHTML
console.log(myFragment.querySelector('img'));

// plant into document
document.body.appendChild(myFragment);
