
// lexical scope
/* function init() {
    const nama = 'Arrizky'; // local variable
    function tampilNama() { // inner function (closure*)
        console.log(nama); // akses ke parent variable
    }
    tampilNama();
}
init(); */

/* function init() {

    return function(nama) { // inner function (closure*)
        console.log(nama); // akses ke parent variable
    }
}
const panggilNama = init();
panggilNama("hasya"); */

// Function factories
// membuat function sesuai dengan function lain
/* function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, selamat ${waktu}`);
    }
}

const selamatPagi = ucapkanSalam('Pagi');
const selamatSiang = ucapkanSalam('Siang');
const selamatMalam = ucapkanSalam('Malam');

selamatPagi('arrizky');
 */

//  private method

let add = (function () { //bunkus dengan immediately invoke function
    let counter = 0; // private method
    return function () {
        return ++counter;
    }
})();

counter = 100; // tidak akan berpengarug ke counter di add()

console.log(add()); // 1
console.log(add()); // 2