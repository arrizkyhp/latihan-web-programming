// for ( i = 10; i >= 1; i--) {
//     console.log(i);
// }

// function tampilAngka(n) {

//     // Base Case
//     if ( n === 0 ) {
//         return;
//     }


//     console.log(n);
//     // Rekursif
//     tampilAngka(n-1);
// }

// tampilAngka(100);


// Faktorial

function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n-1);

}

console.log(faktorial(10));