/* const benar = false;
const coba = new Promise((resolve, reject) => {
    if (benar == true) {
        setTimeout(() => {
            resolve('selesai');

        }, 2000);
    } else {
        reject('gagal');
    }
});

// jika langsung console log maka akan synchronous
// console.log(coba);

// jika pakai then terlebih dahulu akan Asynchronous
coba.then(() => console.log(coba))
.catch( error => console.log(error)); */

// * ========================= Menerapkan Async & Await =============================

const benar = true;
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 6000;

    if (waktu < 5000) {
        setTimeout(() => {
            resolve('selesai');

        }, waktu);
    } else {
        reject('gagal, terlalu lama!!');
    }
});
}

const coba = cobaPromise();
// console.log(coba); // Promise {<pending>}

coba.then(() => console.log(coba))
    .catch(() => console.log(coba));

async function cobaAsync() {
    // then & catch dalam function menggunakan try & catch
    try {
    const coba = await cobaPromise();
    console.log(coba);
    } catch(error) {
    console.error(error);
    }
}

cobaAsync();