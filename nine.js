// let beratBarang = Number(prompt("Masukan Berat Barang :"))
// let Daerah = prompt("Masukan Daerah :").toLowerCase();

// let daerahJawa = ["malang", "surabaya", "sidoarjo", "pasuruan", "blitar", "kediri", "jember", "banyuwangi", "lumajang", "probolinggo"]
// let daerahLuarJawa = ["jakarta", "bandung", "semarang", "yogyakarta", "solo", "bali", "makassar", "medan", "palembang", "pontianak"]
// let diskon = 500;
// let ongkir;
// let ongkirJawa = 5000;
// let ongkirLuarJawa = 5500;

// function formatRupiah(angka) {
//     return new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(angka)
// }
// function perhitunganAngkaOrder(beratbarang, daerah, ongkir) {
//     if (beratbarang > 10 && daerah.includes(daerah)) {
//         return formatRupiah(ongkir - diskon)
//     } else if (beratbarang <= 10 && daerah.includes(daerah)) {
//         return formatRupiah(ongkir)
//     } else {
//         return "Daerah Tidak Terdaftar"
//     }
// }
// function tampilkanHasilOrder() {
//     if (daerahJawa.includes(Daerah)) {
//         return console.log(`Hasil Ongkir :${perhitunganAngkaOrder(beratBarang, Daerah, ongkirJawa)}`);
//     } else if (daerahLuarJawa.includes(Daerah)) {
//         return console.log(`Hasil Ongkir :${perhitunganAngkaOrder(beratBarang, Daerah, ongkirLuarJawa)}`);
//     } else {
//         return console.log("Daerah Tidak Terdaftar");
//     }
// }
// tampilkanHasilOrder();



// // PRATICE 2
// let products = ["Laptop", "Mouse", "Keyboard"];
// function checkBarang(products, index) {
//     if (products.includes(products)) {
//         console.log(`Barang ${products} di temukan dengan Nomor Urut : ${index}`)
//     } else {
//         console.log(`Barang ${products} tidak di temukan`)
//     }
// }

// function menggabuggkanString(products) {
//     return products.join(",")
// }

// checkBarang(products[1], products.indexOf("Mouse"))
// console.log(menggabuggkanString(products))
// menggabuggkanString(products)

// // Object Keys
// let students = {
//     name: "Siti",
//     age: 21,
//     major: "Informatics"
// }


// function addKeyandValue(data) {
//     const key = Object.keys(data);
//     const values = Object.values(data)
//     let kondisiGrade = data.grade ? "memiliki grade" : "tidak memiliki grade"
//     return { key, values, kondisiGrade }
// }

// console.log(addKeyandValue(students))


function checkScore(nilai) {
    if (nilai >= 80) {
        return "lulus";
    } else if (nilai > 60) {
        return "Diperbaiki lagi";
    } else {
        return "Tidak lulus";
    }
}

// const scoresBatch20 = [90, 91, 92, 93, 98, 92, 72, 70];
// // for (let index = 0; index < scoresBatch20.length; index++) {
// //     const nilaiSaatLooping = scoresBatch20[index];
// //     const hasil = checkScore(nilaiSaatLooping);

// //     console.log(nilaiSaatLooping, hasil);
// // }


// for (const scoreSiswaSenin of scoresBatch20) {
//     const hasil = checkScore(scoreSiswaSenin)
//     console.log(scoreSiswaSenin)
//     console.log(scoreSiswaSenin, hasil)
//     if (scoreSiswaSenin % 2 === 0) {
//         console.log("nilai genap")
//     } else {
//         console.log("nilai ganjil")
//     }
// }


// const name = {
//     nama: "savira",
//     age: 18,
//     kelas: "XII RPL 2"
// }

// for (const users in name) {
//     console.log(`KEY : ${users} = ${name[users]}`)
// }

// function checkScore(nilai) {
//     if (nilai >= 80) {
//         return "lulus";
//     } else if (nilai > 60) {
//         return "Diperbaiki lagi";
//     } else {
//         return "Tidak lulus";
//     }
// }
// const scoresBatch20 = [90, 91, 92, 93, 98, 92, 72, 70];

// let studentFalse = false;

// do {
//     if (!studentFalse) {
//         console.log("kamu bukan siswa")
//     }
//     studentFalse = true
// } while (studentFalse);


// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("ALOOOO SAVIRA")
//         }, 2000)
//     })
// }

// getData().then((success) => console.log(success))


// function login(isValid) {
//     return new Promise((resolver, reject) => {
//         setTimeout(() => {
//             if (isValid) {
//                 resolver("success berhasil")
//             } else {
//                 resolver("gagal login")
//             }
//         }, 2000)
//     })
// }

// login(true).then((success) => console.log(success)).catch((error) => console.log(error)).finally(() => console.log(("Progress Login")))

// PRATICE ONE
// const numbers = [1, 2, 3, 4, 5]
// let arrayNumber = []
// function delayMultiply(number) {
//     return new Promise((resolver) => {
//         console.log(`Tunggu dalam 1 detik`)
//         setTimeout(() => {
//             for (const valueNumber of number) {
//                 const hasil = valueNumber * 2
//                 arrayNumber.push(hasil)
//             }
//             resolver(arrayNumber)
//         }, 1000)
//     })
// }

// delayMultiply(numbers).then((success) => console.log(success)).catch((errr) => console.log(errr)).finally(() => console.log("Proses selesai"));

// PRATICE TWO
function delayMultiply(number) {
    return new Promise(resolver => setTimeout(() => {
        resolver(number * 2)
    }, 2000))
}

async function processNumbers(number) {
    console.log("tunggu selama 2 detik")
    try {
        let formatArray = [];
        for (let arrayNumber of number) {
            let hasil = await delayMultiply(arrayNumber)
            formatArray.push(hasil)
        }
        return formatArray;
    } catch (error) {
        return console.error(error)
    }
}


async function jalankanProgram() {
    const numbers = [1, 2, 3, 4, 5]
    let hasil = await processNumbers(numbers);
    console.log(hasil)
}
jalankanProgram()