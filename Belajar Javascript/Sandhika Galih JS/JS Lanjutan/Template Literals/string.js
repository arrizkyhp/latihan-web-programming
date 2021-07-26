// Template Literals


// Expression Interpolation
/* let a = 10;
let b = 90;
console.log(`Jika a = ${a} dan b = ${b} maka hasil penjumlahanya adalah ${a+b}.`);
 */

// Tagged Template Literals
const nama = 'Arrizky Hasya';
const umur = 24;

function coba(strings, ...values) {
    let result = '';
    strings.forEach((strs, i) => {
        result += `${strs}${values[i] || ''} `;
    });
    return result;


    // reduce
    // return strings.reduce((result, strs, i) => `${result}${strs}${values[i] || ''}`,'')
}

const str = coba`Halo nama saya ${nama}, saya ${umur} tahun.`;

console.log(str);


// highlight
/* const nama = 'Arrizky Hasya';
const umur = 24;

function highlight(strings, ...values) {
    // reduce
    return strings.reduce((result, strs, i) => `${result}${strs}<span class="hl">${values[i]  || ''}</span>`,'')
}

const str = highlight`Halo nama saya ${nama}, saya ${umur} tahun.`;

document.body.innerHTML = str;
 */