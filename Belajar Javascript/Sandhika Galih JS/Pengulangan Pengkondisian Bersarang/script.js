//  bintang kebawah nambah, di sebelah kiri
// var s = '';
// for ( var i = 0; i < 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         s += '*'
// }
//  s += '\n';
//     }


// console.log(s);


//  bintang kebawah kurang, di sebelah kiri
// var s = '';
// for ( var i = 10; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//         s += '*'
// }
//  s += '\n';
//     }


// console.log(s);

// bintang kebawah nambah, di sebelah kanan
// var s = '';
// for ( var i = 10; i > 0; i--) {
//     for (var j = 0; j <= i; j++) {
//         s += ' '
// }
// for ( var k = 10; k >= i; k--) {
//     s += '*'
// }

//  s += '\n';
//     }

// console.log(s);


// var s = '';
// for ( var i = 10; i >= 1; i--) {
//     for (var j = i; j <= 10; j++) {
//         s += ' '
// }
// for ( var k = 1; k <= i; k++) {
//     s += '*'
// }

//  s += '\n';
//     }

// console.log(s);


var s = '';
for ( var i = 0; i < 10; i++) {
    for (var j = 0; j <= i; j++) {
        s += '*'
}
 s += '\n';
    }
for ( var i = 10; i > 0; i--) {
    for (var k = 0; k < i; k++) {
        s += '*'
}
 s += '\n';
    }


console.log(s);

