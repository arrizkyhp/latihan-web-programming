console.log('Its work!!');
/*
// Function Definition
function calculateBill() {
  // this is the function body
  //   console.log('Running calculate Bill !!!');
  const total = 3 * 15000;
  //   console.log(`total bayarnya adalah Rp.${total}`);
  return total;
}

// Function Call
// calculateBill();

// to call 'total' we need to get calculateBill to variable
const totalBayar = calculateBill();
console.log(`Totalnya adalah Rp.${totalBayar}`);

// we also cna call function
console.log(`Totalnya adalah Rp.${calculateBill()}`);
*/

// ===============================================================

function calculateBill(jumlahPesanan, harga = 20000) {
  const total = jumlahPesanan * harga;
  return total;
}


function doctorize(name) {
  return `Dr. ${name}`;
}

// add default params
function yell(name = 'old chicken') {
  return `HEY ${name.toUpperC}`;
}

yell(doctorize('Ariz'));
