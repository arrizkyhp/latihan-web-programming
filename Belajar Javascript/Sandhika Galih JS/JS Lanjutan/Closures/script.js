// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

/* console.log(nama); // undefined
var nama = "Arrizky Hasya";
 */
// creation phase pada Global context
// Pada fase ini javascript akan mengecek apkah ada variable atau function di dalam kodinganya, JS tidak akan memperdulikan console.log terlebih dahulu

// jika ada nama var => undefined
// jika ada function => fn() akan diisi function itu sendiri
// konsep diatas disbut konsep hoisting.

// window = global object
// this = window
// jika menulis window dan this di console maka akan ada hasilnya

// Execution phase

// test function

/* console.log(sayHello());

var nama ="Ariz"
var umur = 24;

function sayHello() {
    return `Hello Nama Saya ${nama}, saya ${umur} tahun`
} */

// function membbuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// dalam local execution kita dapat mengakses window juga arguments
// juga terdapat hoisting

//

ariz = "Arrizky";
console.log(ariz);

var ariz;
